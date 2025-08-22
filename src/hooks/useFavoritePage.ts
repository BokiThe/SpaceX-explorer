'use client'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { Launch } from '@/interfaces/launches'
import { useFavorites } from './useFavorites'
import { fetchFavoriteLaunches } from '@/api/launches'

export function useFavoritePage() {
  const { favorites } = useFavorites()
  const [launches, setLaunches] = useState<Launch[]>([])

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

  useEffect(() => {
    if (favoriteLaunches) setLaunches(favoriteLaunches)
  }, [favoriteLaunches])

  useEffect(() => {
    setLaunches((prev) => prev.filter((l) => favorites.includes(l.id)))
    if (favorites.length === 0) setLaunches([])
  }, [favorites])

  return {
    launches,
    loading: isLoading,
    error: error ? (error as Error).message : null,
    refetchFavoriteLaunches,
  }
}
