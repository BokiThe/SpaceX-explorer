'use client'
import React from 'react'
import { useFavoritePage } from '@/hooks/useFavoritePage'
import LaunchCard from '@/components/LaunchCard/LaunchCard'
import List from '@/components/List/List'

const FavoritesPage = () => {
  const { launches, loading, error } = useFavoritePage()

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Favorite Launches</h1>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-600 mb-4">{error}</div>}
      {!loading && launches.length === 0 && (
        <div className="text-gray-500 text-center py-8">No favorite launches yet.</div>
      )}
      <List items={launches} renderItem={(launch) => <LaunchCard launch={launch} />} />
    </div>
  )
}

export default FavoritesPage
