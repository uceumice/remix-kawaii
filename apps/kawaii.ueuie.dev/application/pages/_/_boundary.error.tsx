import { Boundary } from "./components/boundary";

import type { ErrorBoundaryComponent } from "@remix-run/cloudflare";

// ----
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  console.error(error);

  return (
    <Boundary>
      <header>
        <h1>Error!</h1>
        <p className="mb-10">
          Sorry, something crashed and we didn't expect that to happen.
        </p>
      </header>
      <article className="prose-config">
        <h3>Error message</h3>
        <pre className="select-text">{error.message}</pre>
        <h3>Stack trace</h3>
        <pre className="scrollbar-none select-text">
          {error.stack as string}
        </pre>
      </article>
    </Boundary>
  );
};
