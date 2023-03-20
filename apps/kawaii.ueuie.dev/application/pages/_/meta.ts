import type { MetaFunction } from "@remix-run/cloudflare";

// ----
export const meta: MetaFunction = () => {
  return {
    viewport: "width=device-width,initial-scale=1",
    charSet: "utf-8",
    title: "Remix Kawaii | Hi",
    "msapplication-TileColor": "#ffffff",
    "msapplication-config": "/favicons/browserconfig.xml",
    "theme-color": "#ffffff",
  };
};
