'use client'
import React from 'react'
import ErrorState from '@/components/Errors/ErrorState'

export default function LaunchesError({ error }: { error: Error }) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <ErrorState message={error?.message} />
    </div>
  )
}
