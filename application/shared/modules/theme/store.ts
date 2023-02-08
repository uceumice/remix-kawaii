import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { modes, names } from './shared/options'

import type { Mode, Name } from './shared/_types'
import { init, WithImmer } from '@remix-kawaii/zustand'
import type { StoreApi, UseBoundStore } from 'zustand'

export interface Props {
  name: Name
  mode: Mode
}

export type Store = Props & {
  setName: (name: Name) => void
  setMode: (mode: Mode) => void

  setNextName: () => void
  setNextMode: () => void
}

// ----
export const _create = (
  init: Props
): UseBoundStore<WithImmer<StoreApi<Store>>> => {
  return create(
    immer<Store>((set) => {
      return {
        ...init,
        setName: (name) => {
          return set((s) => {
            s.name = name
          })
        },
        setMode: (mode) => {
          return set((s) => {
            s.mode = mode
          })
        },
        setNextName: () => {
          return set((s) => {
            s.name = names[(names.indexOf(s.name) + 1) % names.length]
          })
        },
        setNextMode: () => {
          return set((s) => {
            s.mode = modes[(modes.indexOf(s.mode) + 1) % modes.length]
          })
        },
      }
    })
  )
}

// ----
const { Context, Provider, useStore } = init<
  Store,
  Props,
  ReturnType<typeof _create>
>(_create)

export const useThemeStore = useStore
export const ThemeStoreContext: React.Context<UseBoundStore<
  WithImmer<StoreApi<Store>>
> | null> = Context
export const ThemeStoreProvider: ({
  children,
  ...props
}: React.PropsWithChildren<Props>) => JSX.Element = Provider
