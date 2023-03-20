import React from "react";

import { use$$Root } from "@/pages/_/_loader";
import { ThemeProvider } from "@/shared/modules/theme";
import { LanguageProvider } from "@/shared/modules/language/components/language-provider";

// ----
export function Providers({ children }: React.PropsWithChildren<{}>) {
  const {
    context: { language, theme },
  } = use$$Root();

  return (
    <ThemeProvider action="/api/appearance" server={theme}>
      <LanguageProvider action="/api/appearance" server={{ language }}>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}
