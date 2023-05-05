import { GetActionName } from "./get-action-name";

// ----
export interface FromURLOptions {
  prefixes?: string[];
  queries?: string[];
}

// ----
export const getActionNameFromURL = (
  options?: FromURLOptions,
): GetActionName => {
  const PREFIXES = options?.prefixes || ["/"];
  const QUERIES = options?.queries || ["intent", "action", "_action"];

  // ----
  async function extract({ url }: Request) {
    const { searchParams: search } = new URL(url);

    // [1] check for names in prefixed keys ("https://example.com?{@,/}[name]")
    for (const key of search.keys()) {
      for (const prefix of PREFIXES) {
        if (key.startsWith(prefix)) {
          return key.slice(prefix.length);
        }
      }
    }

    // [2] check for names in a search query ("https://example.com?[query]=[name]")
    for (const query of QUERIES) {
      const name = search.get(query);
      if (typeof name === "string") return name;
    }
    return null;
  }

  return extract;
};
