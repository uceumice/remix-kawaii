/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare" />
/// <reference types="@cloudflare/workers-types" />

import { Bindings } from "./module/types/bindings";

// [*]
declare module "@remix-run/cloudflare" {
  interface AppLoadContext {
    bindings: Bindings;
  }
}

// [*] accessed at build time
declare global {
  const process: {
    env: {
      NODE_ENV: "development" | "production" | "test";
    };
  };
}
