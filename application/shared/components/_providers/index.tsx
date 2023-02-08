import { Provider as RadixToastProvider } from '@radix-ui/react-toast'
import { LanguageProvider } from '@remix-kawaii/language'

import { useRootData } from '@/pages/_/_loader'
import { ThemeProvider } from '@/shared/modules/theme'

// ----
export function Providers({ children }: React.PropsWithChildren<{}>) {
  const { theme, language } = useRootData()

  return (
    <LanguageProvider action="/api/appearance" server={{ language }}>
      <ThemeProvider action="/api/appearance" server={theme}>
        <RadixToastProvider>{children}</RadixToastProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}
