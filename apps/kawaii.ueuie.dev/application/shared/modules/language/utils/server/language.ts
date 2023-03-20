import { getLanguageSession } from "../../../language/providers/server-session";

import type { DataFunctionArgs } from "@remix-run/cloudflare";

// ----
export async function getLanguage(args: DataFunctionArgs) {
  return (await getLanguageSession(args)).get("language") ?? "en";
}
