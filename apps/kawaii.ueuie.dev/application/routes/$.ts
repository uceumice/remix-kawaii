import { $path } from "@remix-kawaii/routes";
import { redirect } from "@remix-run/cloudflare";

export function loader() {
  return redirect($path("/"));
}
