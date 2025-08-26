import spacexApi from '@/api/spacex'
import { Launch } from '@/interfaces/launches'
import { Rocket } from '@/interfaces/rocket'
import { Launchpad } from '@/interfaces/launchpad'

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

export const fetchLaunchById = async (id: string): Promise<Launch> => {
  const res = await spacexApi.get<Launch>(`/launches/${id}`)
  return res.data
}

export const fetchRocketById = async (id: string): Promise<Rocket> => {
  const res = await spacexApi.get<Rocket>(`/rockets/${id}`)
  return res.data
}

export const fetchLaunchpadById = async (id: string): Promise<Launchpad> => {
  const res = await spacexApi.get<Launchpad>(`/launchpads/${id}`)
  return res.data
}
