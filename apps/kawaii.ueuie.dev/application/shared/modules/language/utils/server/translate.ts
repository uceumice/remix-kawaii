import { getLanguage } from "./language";
import { translate } from "../translate";

import type { Translations } from "../translate";
import type { DataFunctionArgs } from "@remix-run/cloudflare";

// ----
export async function getTranslation(
  args: DataFunctionArgs,
  translations: Translations,
): Promise<string> {
  return translate(await getLanguage(args), translations);
}

// ----
export async function getTranslateFunction(args: DataFunctionArgs) {
  const language = await getLanguage(args);

  // ----
  function __translate(translations: Translations) {
    return translate(language, translations);
  }

  return __translate;
}
