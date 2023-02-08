import { json } from '@remix-run/cloudflare'
import { useFetcher } from '@remix-run/react'
import React from 'react'
import { useDidUpdate } from 'rooks'
import { parseForm } from 'zodix'

import { getThemeSession } from './server-session'
import { name as s_name, mode as s_mode } from '../shared/schemas'
import { useThemeStore } from '../store'

import type { NamedActions } from '@remix-kawaii/named-actions'

// ----
const theme_name_action = 'ad7f6b57a97d-----theme:name'
const theme_mode_action = 'ad7f6b57a97d-----theme:mode'
 
// ----
export const actions: NamedActions = {
  [theme_name_action]: async (args) => {
    const { name } = await parseForm(args.request, {
      name: s_name,
    })

    // [1] set theme name
    const session = await getThemeSession(args)
    session.set('name', name)

    return json({ name }, { headers: { 'set-cookie': await session.commit() } })
  },
  [theme_mode_action]: async (args) => {
    const { mode } = await parseForm(args.request, {
      mode: s_mode,
    })

    // [1] set theme mode
    const session = await getThemeSession(args)
    session.set('mode', mode)

    return json({ mode }, { headers: { 'set-cookie': await session.commit() } })
  },
}

// ----
export function ServerPersistance({ action }: { action: string }) {
  const fetcher = useFetcher()

  /* ---------------------------------- BEGIN --------------------------------- */
  const name = useThemeStore((s) => {
    return s.name
  })
  const mode = useThemeStore((s) => {
    return s.mode
  })

  // [name]
  useDidUpdate(() => {
    fetcher.submit(
      { name },
      {
        action: action + ['?/', theme_name_action].join(''),
        method: 'post',
      }
    )
  }, [name])

  // [mode]
  useDidUpdate(() => {
    fetcher.submit(
      { mode },
      {
        action: action + ['?/', theme_mode_action].join(''),
        method: 'post',
      }
    )
  }, [mode])

  return <React.Fragment />
}
