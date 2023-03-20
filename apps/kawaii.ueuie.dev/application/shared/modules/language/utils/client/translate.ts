import { useCallback } from "react";

import { useLanguageStore } from "../../../language/store";
import { translate } from "../../../language/utils/translate";

import type { Translations } from "../../../language/utils/translate";

// ----
export function useTranslate() {
  const language = useLanguageStore((s) => {
    return s.language;
  });

  // [handlers]
  return useCallback(
    (translations: Translations) => {
      return translate(language, translations);
    },
    [language],
  );
}
