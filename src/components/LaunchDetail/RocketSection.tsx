import { Rocket } from '@/interfaces/rocket'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

interface RocketSectionProps {
  rocket: Rocket | null
}

const RocketSection = ({ rocket }: RocketSectionProps) => {
  const { name, description, wikipedia, flickr_images: rocketImages } = rocket || {}
  return (
    <>
      <div className="mb-4 mt-2">
        <h1 className="text-2xl font-semibold h1">Rocket</h1>
        <p>{name}</p>
      </div>
      <div className="mb-4">
        <h2 className="font-semibold">Description</h2>
        <p className="text-sm dark:text-gray-400 text-gray-700">{description}</p>
        <p className="text-sm dark:text-blue-400 text-blue-700">
          {wikipedia ? (
            <Link href={wikipedia} target="_blank" rel="noopener noreferrer">
              Wikipedia
            </Link>
          ) : (
            'No Wikipedia link available.'
          )}
        </p>
      </div>
      <div className="mb-6">
        <h2 className="font-semibold mb-2">Rocket Galery</h2>
        {rocketImages?.length === 0 && <p className="text-sm text-gray-500">No images available.</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {rocketImages?.map((src, idx) => (
            <div key={idx} className="w-full h-48 relative">
              <Image
                src={src}
                alt={`launch-${idx}`}
                fill
                sizes="(min-width: 640px) 32rem, 100vw"
                className="object-cover rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default RocketSection
