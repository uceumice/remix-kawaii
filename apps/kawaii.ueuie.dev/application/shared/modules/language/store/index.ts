import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { languages } from "../shared/options";

import { init } from "zustand-create";

import type { Language } from "../shared/_types";

// ----
export interface LanguageStore {
  language: Language;
  setLanguage: (language: Language) => void;
  setNextLanguage: () => void;
}

export interface LanguageStoreInit {
  language: Language;
}

// ----
export const initLanguageStore = (init: LanguageStoreInit) => {
  const _create = () => {
    return create(
      immer<LanguageStore>((set) => {
        return {
          ...init,

          setLanguage: (language) => {
            return set((s) => {
              s.language = language;
            });
          },
          setNextLanguage: () => {
            return set((s) => {
              s.language =
                languages[
                  (languages.indexOf(s.language) + 1) % languages.length
                ];
            });
          },
        };
      }),
    );
  };

  return _create;
};

// ----
export const {
  Context: LanguageStoreContext,
  Provider: LanguageStoreProvider,
  useStore: useLanguageStore,
} = init<ReturnType<ReturnType<typeof initLanguageStore>>>();
