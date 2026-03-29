'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
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

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-blue-50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shadow-lg group-hover:shadow-blue-300 transition-shadow duration-300">
              <span className="text-white font-black text-lg">S</span>
            </div>
            <div>
              <span className={`font-black text-xl tracking-tight transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                SmileCraft
              </span>
              <p className={`text-xs font-medium leading-none transition-colors duration-300 ${scrolled ? 'text-blue-600' : 'text-blue-200'}`}>
                Dental Clinic
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                  scrolled ? 'text-slate-700' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+2348100000000"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? 'text-blue-600 hover:text-blue-700' : 'text-white hover:text-blue-200'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>+234 810 000 0000</span>
            </a>
            <a
              href="#booking"
              className="bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all duration-200 hover:-translate-y-0.5"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
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
            className="md:hidden bg-white border-t border-slate-100 shadow-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-slate-700 font-medium hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <a
                  href="tel:+2348100000000"
                  className="flex items-center gap-2 px-4 py-3 text-blue-600 font-medium"
                >
                  <Phone className="w-4 h-4" /> +234 810 000 0000
                </a>
                <a
                  href="#booking"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold py-3 rounded-xl"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
