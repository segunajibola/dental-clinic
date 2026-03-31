'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Locations', href: '#locations' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/96 backdrop-blur-md shadow-md border-b border-blue-50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <button onClick={() => handleNav('#home')} className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shadow-md group-hover:shadow-blue-300 transition-shadow duration-300">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                <path d="M12 2C9.243 2 7 4.243 7 7c0 1.357.498 2.594 1.316 3.542L10 17.5c.276 1.105.724 2.5 2 2.5s1.724-1.395 2-2.5l1.684-6.958C16.502 9.594 17 8.357 17 7c0-2.757-2.243-5-5-5z" />
              </svg>
            </div>
            <div className="text-left">
              <div className={`font-black text-lg leading-none transition-colors duration-300 ${scrolled ? 'text-blue-700' : 'text-white'}`}>
                All Smiles
              </div>
              <div className={`text-xs font-medium leading-none mt-0.5 transition-colors duration-300 ${scrolled ? 'text-slate-400' : 'text-blue-100'}`}>
                Dental Clinic
              </div>
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  scrolled
                    ? 'text-slate-600 hover:text-blue-700 hover:bg-blue-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+2349169892921"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? 'text-blue-600 hover:text-blue-700' : 'text-white hover:text-blue-200'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">09169892921</span>
            </a>
            <button
              onClick={() => handleNav('#booking')}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-md hover:shadow-blue-300/50 transition-all duration-200 hover:-translate-y-0.5"
            >
              Book Now
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="w-full text-left px-4 py-3 text-slate-700 font-medium hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <a
                  href="tel:+2349169892921"
                  className="flex items-center gap-2 px-4 py-3 text-blue-600 font-medium"
                >
                  <Phone className="w-4 h-4" /> 09169892921
                </a>
                <button
                  onClick={() => handleNav('#booking')}
                  className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl text-center"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
