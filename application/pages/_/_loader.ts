import { getLanguage } from '@remix-kawaii/language'
import { json } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'

import { getTheme } from '@/shared/modules/theme'
import type { LoaderArgs } from '@remix-run/cloudflare';


// ----
export async function loader(args: LoaderArgs) {
  return json({
    theme: await getTheme(args),
    language: await getLanguage(args),
  })
}

// ----
export const useRootData = useLoaderData<typeof loader>
