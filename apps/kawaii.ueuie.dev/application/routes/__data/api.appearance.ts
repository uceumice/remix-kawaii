import { ActionFunction } from "@remix-run/cloudflare";
import { action as _action } from "@/api/appearance/_action";

// ----
export const action: ActionFunction = (_) => {
  return _action(_);
};
