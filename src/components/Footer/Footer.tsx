'use client'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white px-4 py-3 flex items-center justify-center shadow-md">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} SpaceX Explorer Bojan Ristic test app. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer