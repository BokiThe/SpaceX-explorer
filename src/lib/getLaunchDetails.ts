import { fetchLaunchById, fetchRocketById, fetchLaunchpadById } from '@/api/launches'
import { Launch } from '@/interfaces/launches'
import { Rocket } from '@/interfaces/rocket'
import { Launchpad } from '@/interfaces/launchpad'

export type LaunchDetails = {
  launch: Launch
  rocket: Rocket | null
  launchpad: Launchpad | null
}

export async function getLaunchDetails(id?: string | null): Promise<LaunchDetails | null> {
  if (!id || typeof id !== 'string') return null

  let launch: Launch | null = null
  try {
    launch = await fetchLaunchById(id)
  } catch {
    // if fetching the launch fails (404 or network), return null to let caller decide
    return null
  }

  if (!launch) return null

  const launchpadId = typeof launch.launchpad === 'string' ? launch.launchpad : undefined

  const [rocketRes, launchpadRes] = await Promise.allSettled([
    rocketId ? fetchRocketById(rocketId) : Promise.resolve(null),
    launchpadId ? fetchLaunchpadById(launchpadId) : Promise.resolve(null),
  ])

  const rocket = rocketRes.status === 'fulfilled' ? (rocketRes.value as Rocket) : null
  const launchpad = launchpadRes.status === 'fulfilled' ? (launchpadRes.value as Launchpad) : null

  return { launch, rocket, launchpad }
}
