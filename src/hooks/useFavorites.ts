import { useEffect, useState } from 'react'

const STORAGE_KEY = 'favoriteLaunchIds'

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([])

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        setFavorites(JSON.parse(stored))
      } catch {
        setFavorites([])
      }
    }
  }, [])

  // Persist to localStorage when favorites change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites])

  const addFavorite = (id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev : [...prev, id]))
  }

  const removeFavorite = (id: string) => {
    setFavorites((prev) => prev.filter((favId) => favId !== id))
  }

  const isFavorite = (id: string) => favorites.includes(id)

  return { favorites, addFavorite, removeFavorite, isFavorite }
}
