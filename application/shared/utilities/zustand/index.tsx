import React from 'react'
import { useStore as useZustandStore } from 'zustand'

import type { WithImmer } from './with-immer'
import type { StoreApi, UseBoundStore } from 'zustand'

// ----
export function init<
  Store,
  Props,
  Create extends UseBoundStore<WithImmer<StoreApi<Store>>>
>(
  create: (init: Props) => Create
): {
  Context: React.Context<Create | null>
  Provider: ({
    children,
    ...props
  }: React.PropsWithChildren<Props>) => JSX.Element
  useStore: <T>(
    selector: (store: Store) => T,
    equalityFn?: (left: T, right: T) => boolean
  ) => T
} {
  const Context: React.Context<Create | null> =
    React.createContext<Create | null>(null)

  // ----
  function Provider({ children, ...props }: React.PropsWithChildren<Props>) {
    const ref = React.useRef<Create>()

    // @ts-expect-error
    if (!ref.current) ref.current = create(props)

    return <Context.Provider value={ref.current}>{children}</Context.Provider>
  }

  // ----
  function useStore<T>(
    selector: (store: Store) => T,
    equalityFn?: (left: T, right: T) => boolean
  ): T {
    const store = React.useContext(Context)

    if (!store)
      throw new Error('[Zustand] Missing Context.Provider in the tree')

    return useZustandStore(store, selector, equalityFn)
  }

  return { Context, Provider, useStore }
}

// ----
export type { WithImmer } from './with-immer'
