import { Launch } from '@/interfaces/launches'
import Link from 'next/link'
import React from 'react'
import FavoriteToggle from '@/components/LaunchDetail/FavoriteToggle'

interface LaunchCardProps {
  launch: Launch
}

const LaunchCard = ({ launch }: LaunchCardProps) => {
  return (
    <div
      key={launch.id}
      className="bg-white dark:bg-gray-600 px-6 rounded shadow flex-1 md:flex py-2 md:py-4 flex-col md:flex-row md:items-center justify-between dark:color-white h-32"
    >
      <div className="flex flex-col gap-2">
        <p className="flex font-semibold text-lg">{launch.name}</p>
        <p className="text-sm text-gray-200">{launch.date_utc && new Date(launch.date_utc).toDateString()}</p>
        <div className="flex  flex-row  justify-start align-center gap-2">
          <p className="flex text-xs">
            {launch.success === true && (
              <span className="rounded-xl bg-green-100 text-green-600 dark:bg-green-400  p-2 dark:text-white ">
                Success
              </span>
            )}
            {launch.success === false && (
              <span className="rounded-xl bg-red-100 text-red-600 dark:bg-red-400 p-2 dark:text-white">Failure</span>
            )}
            {launch.upcoming && (
              <span className="rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-400 p-2 dark:text-white ">
                Upcoming
              </span>
            )}
          </p>

          <Link
            href={`/launches/${launch.id}`}
            className="text-xs bg-white dark:bg-blue-600 rounded-xl p-2 m-0 text-blue-600 dark:text-white font-bold hover:underline hover:bg-blue-400 hover:text-white transition-colors"
          >
            Details
          </Link>
        </div>
      </div>
      <div className="flex flex-row md:flex-col mt-2 md:mt-0 ">
        <FavoriteToggle id={launch.id} />
      </div>
    </div>
  )
}

export default LaunchCard
