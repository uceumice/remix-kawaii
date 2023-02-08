import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { clsx } from 'clsx'

import { useRootData } from './_loader'
import { Progress } from './components/navigation-progress'

import {
  
  
  themeDark,
} from '@/config/stitches.config'
import { Providers } from '@/shared/components/_providers'



// ----
export function $$Root() {
  const {
    theme: { mode },
  } = useRootData()

  return (
    <html lang="en" className={clsx(mode === 'dark' && themeDark.className)}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Progress />
        <Providers>
          <Outlet />
        </Providers>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

// ----
