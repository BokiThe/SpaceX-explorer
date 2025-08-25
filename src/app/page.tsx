import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-[10%] ">
      <div className="font-sans flex flex-col items-center justify-center w-full md:w-1/2  h-full gap-[32px] md:p-0 p-20">
        <Image src="/logo.svg" alt="SpaceX Logo" width={400} height={80} className="mb-8" />

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
