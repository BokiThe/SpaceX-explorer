import { useCallback } from 'react'
import { useFavoritesStore } from '@/stores/favoritesStore'

export function useFavorites() {
  const { ids, toggle, remove, has } = useFavoritesStore()

  const addFavorite = useCallback(
    (id: string) => {
      if (!has(id)) toggle(id)
    },
    [has, toggle]
  )

  const removeFavorite = useCallback((id: string) => remove(id), [remove])
  const isFavorite = useCallback((id: string) => has(id), [has])

  return { favorites: ids, addFavorite, removeFavorite, isFavorite }
}
