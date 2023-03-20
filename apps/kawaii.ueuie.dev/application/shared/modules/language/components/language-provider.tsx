import { ServerPersistance } from "@/shared/modules/language/providers/server-persistance";
import { languages } from "@/shared/modules/language/shared/options";
import {
  initLanguageStore,
  LanguageStoreProvider,
} from "@/shared/modules/language/store";

import type { Language } from "@/shared/modules/language/shared/_types";

// ----
export interface LanguageProviderProps {
  server: {
    language: Language;
  };

  action: string;
}

// ----
export const LanguageProvider = ({
  action,
  server,
  children,
}: React.PropsWithChildren<LanguageProviderProps>) => {
  const createLanguageStore = initLanguageStore({
    language: server.language || languages[0],
  });

  return (
    <LanguageStoreProvider create={createLanguageStore}>
      <ServerPersistance action={action} />
      {children}
    </LanguageStoreProvider>
  );
};
