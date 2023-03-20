import { DataFunctionArgs } from "@remix-run/cloudflare";

// ----
export const getEnvVar = async (_: DataFunctionArgs) => {
  const preferences = _.context.bindings.SESSION_PREFERENCES.split(",");
  return {
    session_secret: {
      theme: preferences,
      language: preferences,
    },
  };
};
