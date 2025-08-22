'use client'
import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'

import { Launch } from '@/interfaces/launches'
import { useFavorites } from './useFavorites'
import { fetchFavoriteLaunches } from '@/api/launches'

export function useFavoritePage() {
  const { favorites } = useFavorites()

  const {
    data: favoriteLaunches,
    refetch: refetchFavoriteLaunches,
    isLoading,
    error,
  } = useQuery<Launch[], Error>({
    queryKey: ['favoriteLaunches', favorites],
    queryFn: () => fetchFavoriteLaunches(favorites),
    enabled: favorites.length > 0,
  })

  const launches = useMemo(() => {
    if (!favoriteLaunches) return []
    return favoriteLaunches.filter((l) => favorites.includes(l.id))
  }, [favoriteLaunches, favorites])

  return {
    launches,
    loading: isLoading,
    error: error?.message ?? null,
    refetchFavoriteLaunches,
  }
}
