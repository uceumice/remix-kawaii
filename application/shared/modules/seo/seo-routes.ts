import { generateRobotsTxt, generateSitemap } from '@balavishnuvj/remix-seo'
import { entries } from 'lodash'

import type { EntryContext } from '@remix-run/cloudflare'

const DOMAIN = 'https://ueuie.dev'

type Handler = (
  request: Request,
  context: EntryContext
) => Promise<Response | null> | null

const routes: Record<string, Handler> = {
  '/sitemap.xml': async (request, context) => {
    return generateSitemap(request, context, {
      siteUrl:
        process.env.NODE_ENV === 'production' ? DOMAIN : '127.0.0.1:8788',
      headers: {
        'Cache-Control': `public, max-age=${60 * 5}`,
      },
    })
  },
  '/robots.txt': async () => {
    return generateRobotsTxt(
      [
        {
          type: 'sitemap',
          value:
            (process.env.NODE_ENV === 'production'
              ? DOMAIN
              : '127.0.0.1:8788') + '/sitemap.xml',
        },
        { type: 'disallow', value: '/admin' },
      ],
      {
        headers: {
          'Cache-Control': `public, max-age=${60 * 5}`,
        },
      }
    )
  },
}

export const handlers: Array<Handler> = [
  ...entries(routes).map(([path, handler]) => {
    return (request: Request, context: EntryContext) => {
      return new URL(request.url).pathname === path
        ? handler(request, context)
        : null
    }
  }),
]
