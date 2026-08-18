import { useCallback, useMemo, useSyncExternalStore } from 'react'

export function useMediaQuery(query: string) {
  const list = useMemo(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function')
      return null
    return window.matchMedia(query)
  }, [query])

  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      list?.addEventListener('change', onStoreChange)
      return () => list?.removeEventListener('change', onStoreChange)
    },
    [list],
  )

  return useSyncExternalStore(
    subscribe,
    () => list?.matches ?? false,
    () => false,
  )
}
