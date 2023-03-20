import { useLanguageStore } from "../../../language/store";

// ----
export function useLanguage() {
  return useLanguageStore((state) => {
    return state.language;
  });
}
