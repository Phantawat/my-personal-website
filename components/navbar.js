import React from 'react'

export default function navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold text-white">
            <a href="/" className="hover:text-indigo-900 transition-colors">PL</a></span>
          <div className="space-x-8">
            <a href="#about" className="text-white/90 hover:text-indigo-900 transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-indigo-600 after:to-blue-600 after:transition-all hover:after:w-full">About</a>
            <a href="#portfolio" className="text-white/90 hover:text-indigo-900 transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-indigo-600 after:to-blue-600 after:transition-all hover:after:w-full">Portfolio</a>
            <a href="#contact" className="text-white/90 hover:text-indigo-900 transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-indigo-600 after:to-blue-600 after:transition-all hover:after:w-full">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
