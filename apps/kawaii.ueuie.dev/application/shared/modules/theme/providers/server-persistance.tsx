import { useFetcher } from "@remix-run/react";
import React from "react";
import { useDidUpdate } from "rooks";

import { theme_mode_action, theme_name_action } from "./_names";
import { useThemeStore } from "../store";

// ----
export function ServerPersistance({ action }: { action: string }) {
  const fetcher = useFetcher();

  /* ---------------------------------- BEGIN --------------------------------- */
  const name = useThemeStore((s) => {
    return s.name;
  });
  const mode = useThemeStore((s) => {
    return s.mode;
  });

  // [name]
  useDidUpdate(() => {
    fetcher.submit(
      { name },
      {
        action: action + ["?/", theme_name_action].join(""),
        method: "post",
      },
    );
  }, [name]);

  // [mode]
  useDidUpdate(() => {
    fetcher.submit(
      { mode },
      {
        action: action + ["?/", theme_mode_action].join(""),
        method: "post",
      },
    );
  }, [mode]);

  return <React.Fragment />;
}
