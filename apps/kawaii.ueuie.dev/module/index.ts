import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import * as build from "@remix-run/dev/server-build";

import type { Bindings, DefaultPagesBindings } from "./types/bindings";

// ----
export const onRequest = (
  context: EventContext<Bindings & DefaultPagesBindings, "[[path]]", null>,
) => {
  return createPagesFunctionHandler({
    build,
    mode: process.env.NODE_ENV,
    getLoadContext: (context) => {
      return {
        bindings: context.env,
        secrets: {
          SESSION_PREFERENCES: context.env.SESSION_PREFERENCES,
        },
      };
    },
  })(context);
};
