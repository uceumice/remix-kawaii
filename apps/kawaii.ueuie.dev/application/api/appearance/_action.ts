import { actions as theme_actions } from "@/shared/modules/theme";
import { named } from "@/shared/server/named";
import { ActionArgs } from "@remix-run/cloudflare";

// ----
export async function action(args: ActionArgs) {
  return await named(args, {
    ...theme_actions,
  });
}
