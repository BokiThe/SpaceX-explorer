import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getLaunchDetails } from '@/lib/getLaunchDetails'
import FavoriteToggle from '@/components/LaunchDetail/FavoriteToggle'
import LaunchLinks from '@/components/LaunchDetail/LaunchLinks'
import RocketSection from '@/components/LaunchDetail/RocketSection'
import LaunchpadSection from '@/components/LaunchDetail/LaunchpadSection'

type Props = {
  params: {
    id: string
  }
}

export default async function LaunchDetail({ params }: Props) {
  const resolvedParams = (await params) as unknown as { id?: string | string[] }
  const rawId = resolvedParams.id
  const id = Array.isArray(rawId) ? rawId[0] ?? '' : rawId ?? ''

  const details = await getLaunchDetails(id)
  if (!details) return notFound()

  const { launch, rocket, launchpad } = details

  const launchImages: string[] = launch.links?.flickr?.original ?? []
  const rocketImages: string[] = rocket?.flickr_images ?? []
  const launchPadImages: string[] = launchpad?.images?.large ?? []

  const returnHeroImage = () => launchImages[0] ?? launchPadImages[0] ?? rocketImages[0] ?? '/hero_image_spaceX.jpg'

  return (
    <>
      <div className="relative w-full h-150">
        <Image
          src={returnHeroImage()}
          alt="Hero Image"
          fill
          sizes="(min-width: 640px) 32rem, 100vw"
          className="object-cover rounded h-auto"
        />
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link
          href="/launches"
          className="text-sm text-blue-600 dark:text-white dark:bg-blue-600 rounded p-2 mb-4 inline-block"
        >
          ← Back to launches
        </Link>
        <h1 className="text-2xl font-bold mb-4">{launch.name}</h1>
        <p className="text-sm text-gray-500 mb-2">{new Date(launch.date_utc).toUTCString()}</p>

        <div className="flex gap-4 mb-4">
          <FavoriteToggle id={id} />
        </div>

        <div>
          <p className="p-0 text-sm ">Links</p>
          <LaunchLinks links={launch.links} />
        </div>

        <RocketSection rocket={rocket} />
        <LaunchpadSection launchpad={launchpad} />
      </div>
    </>
  )
}
