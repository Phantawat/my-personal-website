import { InstagramIcon } from 'lucide-react'
import React from 'react'

export default function footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="font-bold text-xl mb-4">Phantawat L.</h3>
        <p className="text-gray-400">Backend Developer based in Bangkok, Thailand</p>
      </div>
      <div>
        <h3 className="font-bold text-xl mb-4">Quick Links</h3>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
          <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-xl mb-4">Connect</h3>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/p_organ/" className="text-gray-400 hover:text-white transition-colors">
            <InstagramIcon size={24} />
          </a>
          <p className='space-y-2 text-gray-400'>(+66) 95-924-2833</p>
        </div>
      </div>
    </div>
    <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
      © {new Date().getFullYear()} Phantawat Lueangsiriwattana. All rights reserved.
    </div>
  </div>
</footer>
  )
}
