import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          src="/logo.svg"
          alt="SpaceX Logo"
          width={150}
          height={50}
          className="mb-8"
        />

        <h1 className="font-bold text-4xl">Welcome to SpaceX Explorer</h1>
        <p className="text-lg">
          Discover the latest missions, rockets, and news from SpaceX.
        </p>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      
      </footer>
    </div>
  );
}
