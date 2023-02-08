import { useMediaMatch } from "rooks";

import { ServerPersistance } from "./providers/server-persistance";
import { getThemeSession } from "./providers/server-session";
import { names } from "./shared/options";
import { ThemeStoreProvider, useThemeStore } from "./store";

import type { Mode, Name } from "./shared/_types";
import type { DataFunctionArgs } from "@remix-run/cloudflare";
import React from "react";

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

  return (
    <ThemeStoreProvider
      mode={server?.mode || (isDarkMedia ? "dark" : "light")}
      name={server?.name || names[0]}
    >
      <ServerPersistance action={action} />
      {children}
    </ThemeStoreProvider>
  );
};

// ----
export const useTheme = useThemeStore;

// ----
export { actions } from "./providers/server-persistance";

// ----
export async function getTheme(args: DataFunctionArgs) {
  const session = await getThemeSession(args);

  return {
    name: session.get("name") ?? undefined,
    mode: session.get("mode") ?? undefined,
  };
}
