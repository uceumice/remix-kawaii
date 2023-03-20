import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export function Boundary({ children }: React.PropsWithChildren<{}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="scrollbar-none">
        <div className="layout border-4 border-red-600">
          <div className="layout-container">
            <div className="layout-center">
              <main className="layout-content small">{children}</main>
            </div>
          </div>
        </div>
        <Scripts />
        <LiveReload />
        <ScrollRestoration />
      </body>
    </html>
  );
}
