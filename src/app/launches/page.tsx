'use client'
import React, { useState } from 'react'
import { Launch } from '@/interfaces/launches'
import { useLaunches } from '@/hooks/useLaunches'
import LaunchesSkeleton from '@/components/skeletons/launchesSkeleton'
import List from '@/components/List/List'
import LaunchCard from '@/components/LaunchCard/LaunchCard'
import LaunchesForm from '@/components/LaunchesForm/LaunchesForm'

const Launches = () => {
  const [filters, setFilters] = useState({
    upcoming: undefined as undefined | boolean,
    success: undefined as undefined | boolean,
    start: '',
    end: '',
    sort: 'date_utc',
    order: 'desc' as 'asc' | 'desc',
    search: '',
  })

  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage, refetch } = useLaunches(filters)
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">SpaceX Launches</h1>
      <LaunchesForm
        values={filters}
        onChange={(name, value) => setFilters((prev) => ({ ...prev, [name]: value }))}
        onSubmit={(e) => {
          e.preventDefault()
          refetch()
        }}
      />
      {/* Error state */}
      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
          <p>
            Error loading launches.{' '}
            <button className="underline" onClick={() => refetch()}>
              Retry
            </button>
          </p>
        </div>
      )}

      {/* Skeletons */}
      {isLoading && <LaunchesSkeleton />}
      {/* Empty state */}

      {!isLoading && data?.pages[0].docs.length === 0 && (
        <div className="text-center text-gray-500 mt-8">No launches found matching the criteria.</div>
      )}
      {/* Launches List */}
      <List
        items={data?.pages?.flatMap((page) => page.docs) ?? []}
        className="flex flex-col gap-4"
        renderItem={(launch: Launch) => <LaunchCard launch={launch} />}
      />

      {/* Infinite scroll / Load more */}
      {hasNextPage && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="bg-blue-800 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            {isFetchingNextPage ? 'Loading...' : 'Load more'}
          </button>
        </div>
      )}
    </div>
  )
}

export default Launches
