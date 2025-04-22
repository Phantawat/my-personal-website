import { InstagramIcon, GithubIcon, LinkedinIcon, Phone } from 'lucide-react'
import React from 'react'

export default function footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-bold text-2xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">Phantawat L.</h3>
            <p className="text-slate-400">Backend Developer based in Bangkok, Thailand</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4 text-white">Connect</h3>
            <div className="flex flex-col space-y-4">
              <a href="https://www.instagram.com/p_organ/" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2">
                <InstagramIcon size={20} className="text-indigo-400" />
                <span>Instagram</span>
              </a>
              <a href="https://github.com/Phantawat" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2">
                <GithubIcon size={20} className="text-indigo-400" />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/phantawat-lueangsiriwattana-a72939322/" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2">
                <LinkedinIcon size={20} className="text-indigo-400" />
                <span>LinkedIn</span>
              </a>
              <div className="text-slate-400 flex items-center gap-2">
                <Phone size={20} className="text-indigo-400" />
                <span>(+66) 95-924-2833</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500">
          © {new Date().getFullYear()} Phantawat Lueangsiriwattana. All rights reserved.
        </div>
      </div>
    </footer>
  )
}