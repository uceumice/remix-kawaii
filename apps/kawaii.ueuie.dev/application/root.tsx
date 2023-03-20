import { headers as _headers } from "@/pages/_/_headers";
import { loader as _loader } from "@/pages/_/_loader";
import { links as _links } from "@/pages/_/links";
import { meta as _meta } from "@/pages/_/meta";

import type {
  MetaFunction,
  LinksFunction,
  LoaderFunction,
  HeadersFunction,
} from "@remix-run/cloudflare";

// ----

// ----
export const meta: MetaFunction = (_) => {
  return _meta(_);
};

export const links: LinksFunction = () => {
  return _links();
};

export const loader: LoaderFunction = (_) => {
  return _loader(_);
};

export const headers: HeadersFunction = (_) => {
  return _headers(_);
};

// ----
export { CatchBoundary } from "@/pages/_/_boundary.catch";
export { ErrorBoundary } from "@/pages/_/_boundary.error";

export { $$Root as default } from "@/pages/_/_layout";
