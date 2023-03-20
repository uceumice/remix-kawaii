import { json } from "@remix-run/cloudflare";
import { parseForm } from "zodix";

import { theme_mode_action, theme_name_action } from "./_names";
import { getThemeSession } from "./server-session";
import { name as s_name, mode as s_mode } from "../shared/schemas";
import { NamedActions } from "@remix-kawaii/named/out/get-named";


// ----
export const actions: NamedActions = {
  [theme_name_action]: async (args) => {
    const { name } = await parseForm(args.request, {
      name: s_name,
    });

    // [1] set theme name
    const session = await getThemeSession(args);
    session.set("name", name);

    return json(
      { name },
      { headers: { "set-cookie": await session.commit() } },
    );
  },
  [theme_mode_action]: async (args) => {
    const { mode } = await parseForm(args.request, {
      mode: s_mode,
    });

    // [1] set theme mode
    const session = await getThemeSession(args);
    session.set("mode", mode);

    return json(
      { mode },
      { headers: { "set-cookie": await session.commit() } },
    );
  },
};
