import React from 'react'
import Image from 'next/image'
import { Launchpad } from '@/interfaces/launchpad'

interface LaunchpadSectionProps {
  launchpad: Launchpad | null
}

const LaunchpadSection = ({ launchpad }: LaunchpadSectionProps) => {
  const { name, locality, details, images } = launchpad || {}

  const image: string | undefined = images?.large?.[0]

  return (
    <>
      <div className="mb-4">
        <h2 className="font-semibold text-2xl">Launchpad</h2>
        <p>
          {name} {locality && `— ${locality}`}
        </p>

        <div className="w-full h-150 relative mt-2">
          <Image src={image ?? '/default-hero.jpg'} alt="Hero Image" fill className="object-cover rounded" />
        </div>
      </div>

      <div>
        <h2 className="font-semibold">Details</h2>
        <p className="text-sm dark:text-gray-400 text-gray-700">{details ?? 'No details available.'}</p>
      </div>
    </>
  )
}

export default LaunchpadSection
