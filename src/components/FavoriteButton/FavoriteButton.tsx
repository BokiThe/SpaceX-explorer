import React, { ButtonHTMLAttributes } from 'react'

interface FavoriteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isFavorite: boolean
}

const FavoriteButton = ({ isFavorite, ...props }: FavoriteButtonProps) => {
  return (
    <button
      {...props}
      aria-pressed={isFavorite}
      className={
        isFavorite
          ? 'bg-yellow-400 text-black rounded-xl p-2 font-bold'
          : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-xl p-2 font-bold'
      }
    >
      {isFavorite ? 'Remove favorite' : 'Add to favorites'}
    </button>
  )
}

export default FavoriteButton
