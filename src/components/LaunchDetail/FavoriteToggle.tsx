'use client'
import { useState, useEffect } from 'react'
import { useFavoritesStore } from '@/stores/favoritesStore'
import FavoriteButton from '../FavoriteButton/FavoriteButton'

export default function FavoriteToggle({ id }: { id: string }) {
  const { toggle, remove, has } = useFavoritesStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isFavorite = mounted ? has(id) : false

  const handle = () => {
    if (isFavorite) remove(id)
    else toggle(id)
  }

  return <FavoriteButton isFavorite={isFavorite} onClick={handle} />
}
