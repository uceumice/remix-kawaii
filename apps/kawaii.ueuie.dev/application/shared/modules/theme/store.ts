import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { modes, names } from "./shared/options";

import { init } from "zustand-create";

import type { Mode, Name } from "./shared/_types";

// ----
export type ThemeStore = {
  name: Name;
  mode: Mode;

  setName: (name: Name) => void;
  setMode: (mode: Mode) => void;

  setNextName: () => void;
  setNextMode: () => void;
};

export interface ThemeStoreInit {
  name: Name;
  mode: Mode;
}

// ----
export const initThemeStore = (init: ThemeStoreInit) => {
  const _create = () => {
    return create(
      immer<ThemeStore>((set) => {
        return {
          ...init,
          setName: (name) => {
            return set((s) => {
              s.name = name;
            });
          },
          setMode: (mode) => {
            return set((s) => {
              s.mode = mode;
            });
          },
          setNextName: () => {
            return set((s) => {
              s.name = names[(names.indexOf(s.name) + 1) % names.length];
            });
          },
          setNextMode: () => {
            return set((s) => {
              s.mode = modes[(modes.indexOf(s.mode) + 1) % modes.length];
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
  Context: ThemeStoreContext,
  Provider: ThemeStoreProvider,
  useStore: useThemeStore,
} = init<ReturnType<ReturnType<typeof initThemeStore>>>();
