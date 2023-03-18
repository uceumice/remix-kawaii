const PARAMS_SUFFIX = ":";
const SPLASH_SUFFIX = "*";

export function $path(route: string, ...params_or_query: Array<any>) {
  let route__: string = route;
  let query__: Record<string, string> | string = params_or_query[0];

  // [1] check for any parameters or splashes
  if (route.includes("/:") || route.includes("/*")) {
    const params = params_or_query[0] || {};
    query__ = params_or_query[1];

    route__ = route
      .split("/")
      .map((part) => {
        // [1.1] -> /:params
        if (part.startsWith(PARAMS_SUFFIX)) {
          const name = part.slice(1);
          return params[name] ?? null;
        }

        // [1.2] -> /* (splash)
        if (part === SPLASH_SUFFIX) {
          if (typeof params === "string") return params;
          return params["*"] ?? null;
        }

        return part;
      })
      .filter((f) => f !== null)
      .join("/");
  }

  if (!query__) {
    return route__;
  }

  return (
    route__ +
    "?" +
    (typeof query__ === "string"
      ? query__
      : new URLSearchParams(query__).toString())
  );
}

export function $params(
  _route: string,
  params: { readonly [key: string]: string | undefined }
) {
  return params;
}
