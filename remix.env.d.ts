/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare" />
/// <reference types="@cloudflare/workers-types" />


import type { Bindings } from 'module/types/bindings'

// ----
declare module '@remix-run/cloudflare' {
  interface AppLoadContext {
    bindings: Bindings
  }
}

// ----
declare global {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
  }
  interface WorkerGlobalScope {
    process: {
      env: ProcessEnv
    }
  }
}
