import { LaunchesFiltersParamsType, LaunchesAPIQuery, LaunchesAPIRequestBody } from '@/interfaces/launches'

export default async function fetchSpaceX(LaunchFiltersParams: LaunchesFiltersParamsType) {
  'use server'

  const { upcoming, success, start, end, search, page, sort, order } = LaunchFiltersParams

  const date_utc = start || end ? { ...(start ? { $gte: start } : {}), ...(end ? { $lte: end } : {}) } : undefined
  const query: LaunchesAPIQuery = {
    ...(upcoming !== undefined ? { upcoming: upcoming === true || upcoming === 'true' } : {}),
    ...(success !== undefined ? { success: success === true || success === 'true' } : {}),
    ...(date_utc ? { date_utc } : {}),
    ...(search ? { name: { $regex: search, $options: 'i' } } : {}),
  }
  const body: LaunchesAPIRequestBody = {
    query,
    options: {
      page: page ? Number(page) : 1,
      limit: 5,
      sort: { [String(sort ?? 'date_utc')]: order ?? 'desc' },
    },
  }

  const response = await fetch('https://api.spacexdata.com/v4/launches/query', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    next: { revalidate: 60 },
    body: JSON.stringify(body),
  })

  return response.json()
}
