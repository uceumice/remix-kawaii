import { parse } from '@remix-kawaii/env'
import { createCookieSessionStorage } from '@remix-run/cloudflare'
import { createTypedSessionStorage } from 'remix-utils'
import { z } from 'zod'

import { name as s_name, mode as s_mode } from '../shared/schemas'

import type {
  CookieSerializeOptions,
  DataFunctionArgs,
} from '@remix-run/cloudflare'

// ----
export async function getThemeSession({
  request: { headers },
  context: {
    bindings: { SESSION_PREFERENCES },
  },
}: DataFunctionArgs) {
  // [1] define session storage
  const storage = createTypedSessionStorage({
    sessionStorage: createCookieSessionStorage({
      cookie: {
        name: '__theme__session',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        secrets: parse.array(SESSION_PREFERENCES),
        httpOnly: true,
        sameSite: 'lax',
      },
    }),
    schema: z.object({
      name: s_name.optional(),
      mode: s_mode.optional(),
    }),
  })

  // [2] parse session from cookie
  const session = await storage.getSession(headers.get('cookie'))

  return {
    get: session.get,
    set: session.set,

    commit: (options?: CookieSerializeOptions) => {
      return storage.commitSession(session, options)
    },
    destroy: (options?: CookieSerializeOptions) => {
      return storage.destroySession(session, options)
    },
  }
}
