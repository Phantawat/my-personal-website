import Portfolio from '@/components/Portfolio';
import { Button } from '@/components/ui/button';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import { ChevronDownSquare } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* Hero/Intro Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Phantawat Lueangsiriwattana
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Backend Developer | Problem Solver | Tech Enthusiast
          </p>
          <div className="mt-8 space-x-4">
            <a href="#portfolio" className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              View My Work
            </a>
            <a href="#contact" className="inline-block px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20" id="about">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">About Me</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate developer with expertise in modern web technologies. 
              With a background in Django and a growing interest in Next.js, 
              I create efficient, scalable, and user-friendly applications.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 text-center">
              <div className="p-4 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-indigo-600">Frontend</h3>
                <p className="text-gray-600">React, Next.js</p>
              </div>
              <div className="p-4 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-indigo-600">Backend</h3>
                <p className="text-gray-600">Django, Python</p>
              </div>
              <div className="p-4 rounded-lg bg-white shadow-sm">
                <h3 className="font-semibold text-indigo-600">Tools</h3>
                <p className="text-gray-600">Git, Docker</p>
              </div>
              <Button 
                  className="col-span-3 mt-4 bg-gradient-to-r from-indigo-600 hover:bg-indigo-700 text-white font-medium py-6"
                  variant="default"
                  size="lg"
                >
              <span className="mr-2"><a href="#portfolio">Click to See More</a></span>
              <ChevronDownSquare className="w-4 h-4" />
            </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Programming Languages</h3>
              <ul className="text-center text-gray-600">
                <li>Python</li>
                <li>JavaScript</li>
                <li>Java</li>
                <li>C++</li>
                <li>GO</li>
                <li>HTML/CSS</li>
              </ul>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Frameworks & Libraries</h3>
              <ul className="text-center text-gray-600">
                <li>Django</li>
                <li>Next.js</li>
                <li>Nest.js</li>
                <li>REST API</li>
                <li>Websockets</li>
              </ul>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Databases</h3>
              <ul className="text-center text-gray-600">
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>SQLite</li>
                <li>MongoDB</li>
                <li>Redis</li>
              </ul>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Tools & Technologies</h3>
              <ul className="text-center text-gray-600">
                <li>Git</li>
                <li>Docker</li>
              </ul>
            </div>
            {/* Add more skill categories */}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl">Kasetsart University</h3>
              <p className="text-gray-600">Software and Knowledge Engineering • 2023 - Present</p>
              <p className="mt-2">-</p>
            </div>
          </div>
          <div className="max-w-3xl mx-auto mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl">Science and Mathametic • Bodindecha (Sing Singhaseni)</h3>
              <p className="text-gray-600">2017 - 2022</p>
              <p className="mt-2">-</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Let's Connect</h2>
            <p className="text-lg text-gray-600 mb-8">
              I'm always open to discussing new projects and opportunities.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:phantawat.l@ku.th" className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                <MailIcon className="inline-block mr-2" />Send Email
              </a>
              <a href="https://linkedin.com/in/phantawat-lueangsiriwattana-a72939322/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <LinkedinIcon className='inline-block mr-2'/>LinkedIn
              </a>
              <a href="https://github.com/Phantawat" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                <GithubIcon className="inline-block mr-2" />GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}