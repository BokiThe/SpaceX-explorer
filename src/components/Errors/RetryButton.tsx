'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

type Props = {
  href?: string
}

const RetryButton = ({ href }: Props) => {
  const router = useRouter()

  const handleClick = () => {
    if (href) return router.push(String(href))
    return router.refresh()
  }

  return (
    <button onClick={handleClick} className="mt-2 px-3 py-1 bg-red-600 text-white rounded">
      Retry
    </button>
  )
}

export default RetryButton
