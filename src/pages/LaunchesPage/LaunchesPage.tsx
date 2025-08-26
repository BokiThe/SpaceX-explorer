'use client'
import React, { useEffect, useState } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { Launch, LaunchesFiltersParamsType, LaunchesResponse } from '@/interfaces/launches'
import { generatePath } from '@/utils'
import LaunchesForm from '@/components/LaunchesForm/LaunchesForm'
import LaunchCard from '@/components/LaunchCard/LaunchCard'
import List from '@/components/List/List'

type LaunchesPageProps = {
  params: LaunchesFiltersParamsType
  response: LaunchesResponse
}

const LaunchesPage = ({ params, response }: LaunchesPageProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const [data, setData] = useState<Launch[]>([])
  const { docs, nextPage, hasNextPage } = response
  const handleFiltersChange = (key: keyof LaunchesFiltersParamsType, value: unknown) => {
    const path = generatePath(key, value, pathname, searchParams)
    router.push(path, { scroll: false })
  }

  useEffect(() => {
    setData((prev) => [...prev, ...docs])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.page])

  useEffect(() => {
    setData(docs)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.success, params.upcoming, params.start, params.end, params.search, params.sort, params.order])

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">SpaceX Launches</h1>
      <LaunchesForm handleFiltersChange={handleFiltersChange} values={params} />

      {/* Launches List */}
      <>
        <List
          items={data ?? []}
          className="flex flex-col gap-4"
          renderItem={(launch: Launch) => <LaunchCard launch={launch} />}
        />
        {/* route-level loading UI will render during navigation */}
      </>

      {/* Infinite scroll / Load more */}

      <div className="flex justify-center mt-6">
        <button
          onClick={() => handleFiltersChange('page', nextPage)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          disabled={!hasNextPage}
        >
          Load More
        </button>
      </div>
    </div>
  )
}

export default LaunchesPage
