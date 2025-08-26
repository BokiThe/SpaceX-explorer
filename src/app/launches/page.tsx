import { LaunchesFiltersParamsType } from '@/interfaces/launches'
import LaunchesPage from '@/pages/LaunchesPage/LaunchesPage'
import fetchSpaceX from '../actions/launches'

const Launches = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
  const params = await searchParams

  const LaunchesFiltersParams: LaunchesFiltersParamsType = {
    upcoming: (params.upcoming as string) || undefined,
    success: (params.success as string) || undefined,
    start: (params.start as string) || '',
    end: (params.end as string) || '',
    sort: (params.sort as string) || 'date_utc',
    order: (params.order as 'asc' | 'desc') || 'desc',
    search: (params.search as string) || '',
    page: params.page ? String(params.page) : '1',
  }
  const response = await fetchSpaceX(LaunchesFiltersParams)

  return <LaunchesPage params={LaunchesFiltersParams} response={response} />
}

export default Launches
