import type { Group, Replica } from 'dog'

/* -------------------------------------------------------------------------- */
/*                         Cloudflare Worker Bindings                         */
/* -------------------------------------------------------------------------- */
export interface Bindings
  extends ModuleWorker.Bindings,
    BindingsVariables,
    BindingsDurableObjects {}

/* -------------------------------- Variables ------------------------------- */
export interface BindingsVariables {
  // Directus Content
  DIRECTUS_DSN: string
  DIRECTUS_TOKEN: string
  DIRECTUS_SECRET: string

  // Session Secrets
  SESSION_SECURE: string
  SESSION_PREFERENCES: string

  // Stytch Authentication
  STYTCH_PUBLIC_TOKEN: string
  STYTCH_PROJECT_ID: string
  STYTCH_SECRET: string
  STYTCH_URL: string
}

/* ----------------------------- Durable Objects ---------------------------- */
export interface BindingsDurableObjects {
  CARD_STUDIO: DurableObjectNamespace & Group<Bindings>
  CARD_EDITOR: DurableObjectNamespace & Replica<Bindings>
}

/* ------------------ Pages Assets [Not-Included/Standart] ------------------ */
export interface DefaultPagesBindings {
  ASSETS: Record<'fetch', typeof fetch>
}
