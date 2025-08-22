'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className="w-full bg-black text-white px-4 py-3 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-2">
        <Link href='/'>
        <Image src="/logo.svg" alt="SpaceX Logo" width={250} height={50} priority />
        </Link>
      </div>
      <div className="md:hidden">
        <button
          aria-label="Open menu"
          className="focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>
      <ul className={`flex-col  md:flex-row md:flex gap-8 absolute md:static top-10 left-0 w-full md:w-auto bg-black md:bg-transparent transition-all duration-300 z-10 ${menuOpen ? 'flex' : 'hidden md:flex'}`}>
        <li>
          <Link href="/launches" className="block px-2 py-2 hover:text-blue-400 transition-colors">Launches</Link>
        </li>
         <li>
          <Link href="/favorites" className="block px-2 py-2 hover:text-blue-400 transition-colors">Favorites</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation