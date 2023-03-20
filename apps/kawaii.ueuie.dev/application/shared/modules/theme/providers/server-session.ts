import { createCookieSessionStorage } from "@remix-run/cloudflare";
import { createTypedSessionStorage } from "remix-utils";
import { z } from "zod";

import { name as s_name, mode as s_mode } from "../shared/schemas";

import { getEnvVar } from "@/config/env.server";

import type {
  CookieSerializeOptions,
  DataFunctionArgs,
} from "@remix-run/cloudflare";

// ----
export async function getThemeSession(args: DataFunctionArgs) {
  const { request } = args;
  // ----
  const _env_ = await getEnvVar(args);
  /* ---------------------------------- BEGIN --------------------------------- */
  // [1] define session storage
  const storage = createTypedSessionStorage({
    sessionStorage: createCookieSessionStorage({
      cookie: {
        name: "__theme__session",
        path: "/",
        secure: true,
        secrets: _env_.session_secret.theme,
        httpOnly: true,
        sameSite: "lax",
      },
    }),
    schema: z.object({
      name: s_name.optional(),
      mode: s_mode.optional(),
    }),
  });

  // [2] parse session from cookie
  const session = await storage.getSession(request.headers.get("cookie"));

  return {
    get: session.get,
    set: session.set,

    commit: (options?: CookieSerializeOptions) => {
      return storage.commitSession(session, options);
    },
    destroy: (options?: CookieSerializeOptions) => {
      return storage.destroySession(session, options);
    },
  };
}
