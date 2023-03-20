import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

import { getTheme } from "@/shared/modules/theme";
import { getLanguage } from "@/shared/modules/language";

import type { LoaderArgs } from "@remix-run/cloudflare";

// ----
export async function loader(_: LoaderArgs) {
  return json({
    context: {
      theme: await getTheme(_),
      language: await getLanguage(_),
    },
  });
}

// ----
export const use$$Root = useLoaderData<typeof loader>;
