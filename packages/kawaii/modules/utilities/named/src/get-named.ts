import type { ActionArgs, ActionFunction } from "@remix-run/server-runtime";
import { getActionName, GetActionName } from "./get-action-name";

// ----
export type NamedActions = Record<string, ActionFunction>;

// ----
export const getNamed = (parsers?: GetActionName[]) => {
  return async function (
    args: ActionArgs,
    actions: NamedActions,
  ): Promise<Response> {
    const name = await getActionName(args.request, parsers);

    if (typeof name === "string" && name in actions) return actions[name](args);

    if (name === null && "default" in actions) return actions["default"](args);

    if (name === null) throw new ReferenceError("Action name not found");

    throw new ReferenceError(`Action "${name}" not found`);
  };
};
