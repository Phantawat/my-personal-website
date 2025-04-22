import React from 'react'

export default function navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg shadow-lg border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold">
            <a href="/" className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400 hover:opacity-80 transition-colors">PL</a>
          </span>
          <div className="space-x-8">
            <a href="#about" className="text-slate-300 hover:text-indigo-400 transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-indigo-500 after:to-blue-500 after:transition-all hover:after:w-full">About</a>
            <a href="#portfolio" className="text-slate-300 hover:text-indigo-400 transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-indigo-500 after:to-blue-500 after:transition-all hover:after:w-full">Portfolio</a>
            <a href="#contact" className="text-slate-300 hover:text-indigo-400 transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-indigo-500 after:to-blue-500 after:transition-all hover:after:w-full">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}