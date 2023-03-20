/* -------------------------------------------------------------------------- */
/*                         Cloudflare Worker Bindings                         */
/* -------------------------------------------------------------------------- */
export interface Bindings extends ModuleWorker.Bindings, BindingsVariables {}

/* -------------------------------- Variables ------------------------------- */
export interface BindingsVariables {
  // Session Secrets
  SESSION_PREFERENCES: string;
}

/* ------------------ Pages Assets [Not-Included/Standart] ------------------ */
export interface DefaultPagesBindings {
  ASSETS: Record<"fetch", typeof fetch>;
}
