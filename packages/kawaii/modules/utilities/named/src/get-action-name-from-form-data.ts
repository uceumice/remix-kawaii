import { GetActionName } from "./get-action-name";

// ----
export interface FromFormDataOptions {
  prefixes?: string[];
  names?: string[];
}

// ----
export const getActionNameFromFormData = (
  options?: FromFormDataOptions,
): GetActionName => {
  const PREFIXES = options?.prefixes || ["/", "@"];
  const NAMES = options?.names || ["intent", "action", "_action"];

  // ----
  async function extract({ formData }: Request) {
    const form = await formData();

    // [1] check for names in prefixed keys of FormData
    for (const key of form.keys()) {
      for (const prefix of PREFIXES) {
        if (key.startsWith(prefix)) {
          return key.slice(prefix.length);
        }
      }
    }

    // [1] check for names as FormData values
    for (const _name of NAMES) {
      const name = form.get(_name);
      if (typeof name === "string") return name;
    }

    return null;
  }

  return extract;
};
