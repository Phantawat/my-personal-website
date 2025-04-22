import Portfolio from '@/components/Portfolio';
import { Button } from '@/components/ui/button';
import { GithubIcon, LinkedinIcon, MailIcon, ChevronDownSquare, Code2, Server, Wrench } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">

      {/* Hero/Intro Section */}
      <section className="pt-36 pb-24 relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-indigo-500 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-500 blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg px-3 py-1 text-sm">
            Backend Developer
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400 leading-tight">
            Phantawat Lueangsiriwattana
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Problem Solver • Tech Enthusiast • Creative Developer
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#portfolio" className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-indigo-500/20">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-4 bg-slate-800 border border-indigo-500 rounded-xl hover:bg-slate-700 transition-all">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-slate-800" id="about">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mb-12 rounded-full"></div>
            <p className="text-lg text-slate-300 leading-relaxed text-center mb-12">
              I'm a passionate developer with expertise in modern web technologies. 
              With a background in Django and a growing interest in Next.js, 
              I create efficient, scalable, and user-friendly applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-700 hover:border-indigo-500 transition-all group hover:shadow-lg hover:shadow-indigo-500/20">
                <div className="mb-4 p-3 rounded-xl bg-indigo-600/20 inline-block">
                  <Code2 className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Frontend</h3>
                <p className="text-slate-400">React, Next.js</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-700 hover:border-indigo-500 transition-all group hover:shadow-lg hover:shadow-indigo-500/20">
                <div className="mb-4 p-3 rounded-xl bg-indigo-600/20 inline-block">
                  <Server className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Backend</h3>
                <p className="text-slate-400">Django, Python</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-700 hover:border-indigo-500 transition-all group hover:shadow-lg hover:shadow-indigo-500/20">
                <div className="mb-4 p-3 rounded-xl bg-indigo-600/20 inline-block">
                  <Wrench className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Tools</h3>
                <p className="text-slate-400">Git, Docker</p>
              </div>
            </div>
            <div className="mt-10 text-center">
              <Button 
                className="mt-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium py-6 px-8 rounded-xl hover:opacity-90 transition-all"
                variant="default"
                size="lg"
              >
                <span className="mr-2"><a href="#portfolio">Explore My Projects</a></span>
                <ChevronDownSquare className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio />

      {/* Skills Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mb-16 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col p-6 bg-slate-800 rounded-2xl border border-slate-700 hover:border-indigo-500 transition-all">
              <h3 className="font-semibold text-xl mb-6 text-white">Programming Languages</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>Python
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>JavaScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>Java
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>C++
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>GO
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>HTML/CSS
                </li>
              </ul>
            </div>
            <div className="flex flex-col p-6 bg-slate-800 rounded-2xl border border-slate-700 hover:border-indigo-500 transition-all">
              <h3 className="font-semibold text-xl mb-6 text-white">Frameworks & Libraries</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>Django
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>Next.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>Nest.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>REST API
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>Websockets
                </li>
              </ul>
            </div>
            <div className="flex flex-col p-6 bg-slate-800 rounded-2xl border border-slate-700 hover:border-indigo-500 transition-all">
              <h3 className="font-semibold text-xl mb-6 text-white">Databases</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>MySQL
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>PostgreSQL
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>SQLite
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>MongoDB
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>Redis
                </li>
              </ul>
            </div>
            <div className="flex flex-col p-6 bg-slate-800 rounded-2xl border border-slate-700 hover:border-indigo-500 transition-all">
              <h3 className="font-semibold text-xl mb-6 text-white">Tools & Technologies</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>Git
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>Docker
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mb-16 rounded-full"></div>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-indigo-500 transition-all">
              <div className="inline-block mb-3 bg-indigo-600/20 rounded-lg px-3 py-1 text-sm text-indigo-300">
                2023 - Present
              </div>
              <h3 className="font-bold text-2xl text-white mb-2">Kasetsart University</h3>
              <p className="text-indigo-300">Software and Knowledge Engineering</p>
              <p className="mt-4 text-slate-400">-</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-indigo-500 transition-all">
              <div className="inline-block mb-3 bg-indigo-600/20 rounded-lg px-3 py-1 text-sm text-indigo-300">
                2017 - 2022
              </div>
              <h3 className="font-bold text-2xl text-white mb-2">Bodindecha (Sing Singhaseni)</h3>
              <p className="text-indigo-300">Science and Mathematics</p>
              <p className="mt-4 text-slate-400">-</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-slate-900" id="contact">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto mb-12 rounded-full"></div>
            <p className="text-xl text-slate-300 mb-12">
              I'm always open to discussing new projects and opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:phantawat.l@ku.th" className="flex items-center px-8 py-4 bg-slate-800 border border-slate-700 hover:border-indigo-500 rounded-xl hover:bg-slate-700 transition-all group">
                <MailIcon className="mr-3 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                <span className="text-white">Send Email</span>
              </a>
              <a href="https://linkedin.com/in/phantawat-lueangsiriwattana-a72939322/" target="_blank" rel="noopener noreferrer" className="flex items-center px-8 py-4 bg-slate-800 border border-slate-700 hover:border-indigo-500 rounded-xl hover:bg-slate-700 transition-all group">
                <LinkedinIcon className="mr-3 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                <span className="text-white">LinkedIn</span>
              </a>
              <a href="https://github.com/Phantawat" target="_blank" rel="noopener noreferrer" className="flex items-center px-8 py-4 bg-slate-800 border border-slate-700 hover:border-indigo-500 rounded-xl hover:bg-slate-700 transition-all group">
                <GithubIcon className="mr-3 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                <span className="text-white">GitHub</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-24 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Phantawat Lueangsiriwattana. All rights reserved.
        </div>
      </section>
    </div>
  );
}