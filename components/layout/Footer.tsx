'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2024)
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: '🐙', color: 'hover:text-gray-400' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', icon: '💼', color: 'hover:text-blue-400' },
    { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: '🐦', color: 'hover:text-sky-400' },
    { name: 'Email', url: 'mailto:your.email@example.com', icon: '📧', color: 'hover:text-red-400' }
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Contact', href: '/contact' }
  ]

  const techStack = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Sanity CMS']

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zenith
              </span>
            </Link>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              Transforming complex problems into elegant solutions through data science, 
              artificial intelligence, and cutting-edge software engineering.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl text-gray-500 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 font-mono">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:translate-x-2 inline-block group"
                  >
                    <span className="group-hover:text-cyan-400">▸</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 font-mono">Built With</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/10 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-gray-500 text-sm font-mono">
              © {currentYear} Zenith Portfolio. Crafted with precision.
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-6 text-gray-500 text-sm font-mono">
              <span>🚀 Powered by Vercel</span>
              <span>⚡ Blazing Fast</span>
              <span>🔒 Secure</span>
            </div>

            {/* Legal */}
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition duration-300 font-mono">
                Privacy
              </a>
              <a href="#" className="text-gray-500 hover:text-cyan-400 transition duration-300 font-mono">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}