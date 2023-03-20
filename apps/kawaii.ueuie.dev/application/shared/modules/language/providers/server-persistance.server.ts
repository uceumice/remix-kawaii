import { json } from "@remix-run/cloudflare";
import { parseForm } from "zodix";

import { name } from "./server-persistance-action-name";
import { getLanguageSession } from "./server-session";

import { language as language_schema } from "@/shared/modules/language/shared/schemas";

import type { NamedActions } from "@remix-kawaii/named/out/get-named";

// ----
export const actions: NamedActions = {
  [name]: async (args) => {
    const { language } = await parseForm(args.request, {
      language: language_schema,
    });

    // [1] set language name
    const session = await getLanguageSession(args);
    session.set("language", language);

    return json(
      { success: true },
      { headers: { "set-cookie": await session.commit() } },
    );
  },
};
