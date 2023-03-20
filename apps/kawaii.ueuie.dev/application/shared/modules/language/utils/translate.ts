import { languages } from "../shared/options";

import type { Language } from "../shared/_types";

// ----
export type Translations = {
  [K in Language]?: string;
};

// ----
export function translate(language: Language, translations: Translations) {
  if (!translations[language]) {
    if (!translations[languages[0]]) {
      throw new Error(
        "⚠️ [Language:Translate] There is no translation for the selected language... ✨",
      );
    }
    return translations[languages[0]] as string;
  }
  return translations[language] as string;
}
