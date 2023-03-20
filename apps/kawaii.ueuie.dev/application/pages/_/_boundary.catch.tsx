import { useCatch } from "@remix-run/react";

import { Boundary } from "./components/boundary";

import type { CatchBoundaryComponent } from "@remix-run/react";

// ----
export const CatchBoundary: CatchBoundaryComponent = () => {
  const caught = useCatch();

  return (
    <Boundary>
      <header>
        <h1>What happened?</h1>
        <p className="mb-10">Hmm, something went wrong.</p>
      </header>
      <article className="prose-config">
        <h3>Status Message</h3>
        <pre>
          {caught.status} {caught.statusText}
        </pre>
        <h3>Caught error data</h3>
        <pre>{JSON.stringify(caught, null, 2)}</pre>
      </article>
    </Boundary>
  );
};
