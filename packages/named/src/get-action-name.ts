import { getActionNameFromURL } from "./get-action-name-from-url";

export { getActionNameFromFormData as InForm } from "./get-action-name-from-form-data";
export { getActionNameFromURL as InURL } from "./get-action-name-from-url";

// ----
export interface GetActionName {
  (request: Request): Promise<string | null>;
}

// ----
export async function getActionName(
  request: Request,
  getters?: GetActionName[]
) {
  const GETTERS = getters || [getActionNameFromURL()];

  // ----
  for (const getter of GETTERS) {
    const name = await getter(request.clone());
    if (typeof name === "string") {
      return name;
    }
  }
  return null;
}
