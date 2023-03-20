import type { HeadersFunction } from "@remix-run/cloudflare";

// ----
export const headers: HeadersFunction = () => {
  return {
    "accept-ch": "Sec-CH-Prefers-Color-Scheme",
  };
};
