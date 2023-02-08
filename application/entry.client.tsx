import { RemixBrowser } from '@remix-run/react'
import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'

import { applyGlobalStitchStyles } from './config/stitches.config'

import type { RemixBrowserProps } from '@remix-run/react';

function EntryClient(props: RemixBrowserProps) {
  applyGlobalStitchStyles()

  return (
    <StrictMode>
      <RemixBrowser {...props} />
    </StrictMode>
  )
}

// ----
function hydrate() {
  startTransition(() => {
    hydrateRoot(document, <EntryClient />)
  })
}

// ----
if (typeof requestIdleCallback === 'function') {
  requestIdleCallback(hydrate)
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  setTimeout(hydrate, 1)
}
