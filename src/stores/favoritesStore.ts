'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface FavoritesProps {
  ids: string[]
  toggle: (id: string) => void
  remove: (id: string) => void
  has: (id: string) => boolean
  clear: () => void
}

export const useFavoritesStore = create<FavoritesProps>()(
  persist(
    (set, get) => ({
      ids: [],
      toggle: (id: string) =>
        set((storage) => ({
          ids: storage.ids.includes(id) ? storage.ids.filter((x) => x !== id) : [...storage.ids, id],
        })),
      remove: (id: string) => set((storage) => ({ ids: storage.ids.filter((x) => x !== id) })),
      has: (id: string) => get().ids.includes(id),
      clear: () => set({ ids: [] }),
    }),
    { name: 'favoriteLaunches' }
  )
)
