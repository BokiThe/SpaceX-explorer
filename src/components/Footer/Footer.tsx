'use client'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white px-4 py-5 flex items-center justify-center shadow-md">
      <p className="text-sm text-center w-[300px]">
        &copy; {new Date().getFullYear()} SpaceX Explorer Bojan Ristic test app.
        <br />
        All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
