import spacexApi from '@/api/spacex'
import { Launch } from '@/interfaces/launches'

export interface LaunchQuery {
  upcoming?: boolean
  success?: boolean
  date_utc?: {
    $gte?: string
    $lte?: string
  }
  name?: {
    $regex: string
    $options: string
  }
}

export async function queryLaunches({
  page = 1,
  limit = 10,
  upcoming,
  success,
  start,
  end,
  sort = 'date_utc',
  order = 'desc',
  search,
}: {
  page?: number
  limit?: number
  upcoming?: boolean
  success?: boolean
  start?: string
  end?: string
  sort?: string
  order?: 'asc' | 'desc'
  search?: string
}) {
  const query: LaunchQuery = {}
  if (typeof upcoming === 'boolean') query.upcoming = upcoming
  if (typeof success === 'boolean') query.success = success
  if (start || end) query.date_utc = {}
  if (start) query.date_utc!.$gte = start
  if (end) query.date_utc!.$lte = end
  if (search) query.name = { $regex: search, $options: 'i' }

  const options = {
    method: 'POST',
    url: '/launches/query',
    data: {
      query,
      options: {
        page,
        limit,
        sort: { [sort]: order },
      },
    },
  }

  try {
    const response = await spacexApi.request(options)
    return response.data
  } catch (error) {
    console.error('SpaceX API error:', error)
    throw error
  }
}

export const fetchFavoriteLaunches = async (ids: string[]): Promise<Launch[]> => {
  if (ids.length === 0) return []
  const data = await spacexApi<{ docs: Launch[] }>('/launches/query', {
    method: 'POST',
    data: {
      query: { _id: { $in: ids } },
      options: { pagination: false },
    },
  })
  return data.data.docs
}
