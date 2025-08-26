import React from 'react'

const LaunchSkeleton = () => (
  <div className="animate-pulse bg-white dark:bg-gray-700 px-6 rounded shadow flex-1 md:flex py-2 md:py-4 flex-col md:flex-row md:items-center justify-between h-32">
    <div className="flex-1 space-y-2 py-1">
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
      <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-1/2"></div>
      <div className="flex gap-2 mt-2">
        <div className="h-6 w-20 bg-gray-200 dark:bg-gray-600 rounded"></div>
        <div className="h-6 w-24 bg-gray-200 dark:bg-gray-600 rounded"></div>
      </div>
    </div>
    <div className="w-28 h-10 bg-gray-200 dark:bg-gray-600 rounded"></div>
  </div>
)

export default LaunchSkeleton
