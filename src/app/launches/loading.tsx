'use client'
import React from 'react'
import LaunchSkeleton from '@/components/skeletons/LaunchSkeleton'

export default function Loading() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">SpaceX Launches</h1>
      <div className="flex flex-col gap-4">
        <LaunchSkeleton />
        <LaunchSkeleton />
        <LaunchSkeleton />
      </div>
    </div>
  )
}
