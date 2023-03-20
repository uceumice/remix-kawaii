import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { clsx } from "clsx";

import { use$$Root } from "./_loader";
import { Progress } from "./components/progress";
import { Providers } from "./components/providers";
import { Transitions } from "./components/transitions";

// ----
export function $$Root() {
  const {
    context: {
      theme: { mode },
    },
  } = use$$Root();

  return (
    <html
      lang="en"
      data-theme={mode || "light"}
      className={clsx("w-full h-full", "overflow-hidden", "bg-base-100")}
    >
      <head>
        <Meta />
        <Links />
      </head>
      <body className={clsx("w-full h-full", "overflow-hidden", "bg-base-100")}>
        <Progress />
        <Providers>
          <Transitions>
            <Outlet />
          </Transitions>
        </Providers>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

// ----
