import { useFetcher } from "@remix-run/react";
import React from "react";
import { useDidUpdate } from "rooks";
import { useLanguageStore } from "../store";

import { name } from "./server-persistance-action-name";


// ----
export function ServerPersistance({ action }: { action: string }) {
  const fetcher = useFetcher();

  /* ---------------------------------- BEGIN --------------------------------- */
  const language = useLanguageStore((s) => {
    return s.language;
  });

  // [language]
  useDidUpdate(() => {
    fetcher.submit(
      { language },
      {
        action: action + ["?/", name].join(""),
        method: "post",
      },
    );
  }, [language]);

  return <React.Fragment />;
}
