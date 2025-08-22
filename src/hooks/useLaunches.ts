import { useInfiniteQuery } from '@tanstack/react-query'
import { queryLaunches } from '@/api/launches'
import { LaunchesResponse } from '@/interfaces/launches'

export function useLaunches(filters: {
  upcoming?: boolean
  success?: boolean
  start?: string
  end?: string
  sort?: string
  order?: 'asc' | 'desc'
  search?: string
}) {
  const PAGE_SIZE = 10
  return useInfiniteQuery<LaunchesResponse, Error>({
    queryKey: ['launches', filters],
    queryFn: async ({ pageParam = 1 }) =>
      await queryLaunches({
        page: typeof pageParam === 'number' ? pageParam : 1,
        limit: PAGE_SIZE,
        ...filters,
      }),
    getNextPageParam: (lastPage) => {
      if (lastPage && lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1
      }
      return undefined
    },
    initialPageParam: 1,
    retry: 2,
    refetchOnWindowFocus: false,
  })
}
