import { createCookieSessionStorage } from "@remix-run/cloudflare";
import { createTypedSessionStorage } from "remix-utils";
import { z } from "zod";

import { language as language_schema } from "../shared/schemas";

import { getEnvVar } from "@/config/env.server";

import type {
  CookieSerializeOptions,
  DataFunctionArgs,
} from "@remix-run/cloudflare";

// ----
export async function getLanguageSession(args: DataFunctionArgs) {
  const { request } = args;
  // ----
  const _env_ = await getEnvVar(args);
  /* ---------------------------------- BEGIN --------------------------------- */
  // [1] define session storage
  const storage = createTypedSessionStorage({
    sessionStorage: createCookieSessionStorage({
      cookie: {
        name: "__language__session",
        path: "/",
        secure: process.env.NODE_ENV === "production",
        secrets: _env_.session_secret.language,
        httpOnly: true,
        sameSite: "lax",
      },
    }),
    schema: z.object({
      language: language_schema.optional(),
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
