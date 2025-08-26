import Image from 'next/image'
import Link from 'next/link'

import HeroImage from '../assets/images/hero_image_spaceX.jpg'

export default function Home() {
  return (
    <div className="flex flex-col pt-[10%] items-center justify-center ">
      <div className="absolute w-full h-screen">
        <Image src={HeroImage} alt="Hero Image" fill className="object-cover rounded h-150 w-full z-0" />
      </div>
      <div className="font-sans z-10 flex flex-col items-center justify-center w-full md:w-1/2  h-full gap-[32px] md:p-0 p-20">
        <Image src="/logo.svg" alt="SpaceX Logo" width={400} height={80} className="mb-8 z-10" />

        <h1 className="font-bold text-4xl">Welcome to SpaceX Explorer</h1>
        <p className="text-lg">Discover the latest missions, rockets, and news from SpaceX.</p>
        <Link
          href="/launches"
          className="w-95 md:w-100 text-sm text-start md:text-center text-blue-600 dark:text-white dark:bg-blue-600 hover:bg-blue-700 rounded p-2 mb-4 inline-block"
        >
          Discover Launches
        </Link>
      </div>
    </div>
  )
}
