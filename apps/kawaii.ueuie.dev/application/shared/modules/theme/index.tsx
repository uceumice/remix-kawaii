import React from "react";
import { useMediaMatch } from "rooks";

import { ServerPersistance } from "./providers/server-persistance";
import { getThemeSession } from "./providers/server-session";
import { names } from "./shared/options";
import { initThemeStore, ThemeStoreProvider, useThemeStore } from "./store";

import type { Mode, Name } from "./shared/_types";
import type { DataFunctionArgs } from "@remix-run/cloudflare";

// ----
export interface ThemeProviderProps {
  server?: {
    name?: Name;
    mode?: Mode;
  };

  action: string;
}

// ----
export const ThemeProvider = ({
  action,
  server,
  children,
}: React.PropsWithChildren<ThemeProviderProps>) => {
  const isDarkMedia =
    typeof window !== "undefined"
      ? useMediaMatch("(prefers-color-scheme: dark)")
      : false;

  // ----
  const createThemeStore = initThemeStore({
    mode: server?.mode || (isDarkMedia ? "dark" : "light"),
    name: server?.name || names[0],
  });

  return (
    <ThemeStoreProvider create={createThemeStore}>
      <ServerPersistance action={action} />
      {children}
    </ThemeStoreProvider>
  );
};

// ----
export const useTheme = useThemeStore;

// ----
export { actions } from "./providers/server-persistance.server";

// ----
export async function getTheme(_: DataFunctionArgs) {
  const session = await getThemeSession(_);

  return {
    name: session.get("name") ?? undefined,
    mode: session.get("mode") ?? undefined,
  };
}
