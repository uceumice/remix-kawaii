import { RemixServer } from '@remix-run/react'
import { renderToString } from 'react-dom/server'

import { getCssText } from './config/stitches.config'
import { handlers as seo } from './shared/modules/seo/seo-routes'

import type { EntryContext } from '@remix-run/cloudflare'

// ----
export default async function handle(
  request: Request,
  status: number,
  headers: Headers,
  context: EntryContext
) {
  // ---- handlers (which require remix context object)
  for (const handler of seo) {
    const response = await handler(request, context)
    if (response) return response
  }

  let html = renderToString(<RemixServer context={context} url={request.url} />)
  // ---- markup
  html = html.replace(
    /<\/head>/,
    `<style id="stitches">${getCssText()}</style></head>`
  )

  // ---- headers
  headers.set('Content-Type', 'text/html')

  // ----
  return new Response(`<!DOCTYPE html>${html}`, { status, headers })
}
