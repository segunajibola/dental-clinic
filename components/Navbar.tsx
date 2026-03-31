'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

// page: true  → Next.js page route (/about, /services, /contact)
// page: false → anchor on homepage (/#team, /#gallery, etc.)
const navLinks = [
  { label: 'Home',         href: '/',            page: true  },
  { label: 'About',        href: '/about',        page: true  },
  { label: 'Services',     href: '/services',     page: true  },
  { label: 'Team',         href: '/#team',        page: false },
  { label: 'Gallery',      href: '/#gallery',     page: false },
  { label: 'Testimonials', href: '/#testimonials',page: false },
  { label: 'Locations',    href: '/#locations',   page: false },
  { label: 'Contact',      href: '/contact',      page: true  },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const router   = useRouter()
  const isHome   = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Determine nav background: transparent only on the homepage hero
  const transparent = !scrolled && isHome

  const handleAnchorClick = (href: string) => {
    setMobileOpen(false)
    const anchor = href.replace('/#', '#')
    if (isHome) {
      document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Navigate to homepage then scroll after load
      router.push(href)
    }
  }

  const linkClass = (active = false) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
      active ? 'text-blue-600 bg-blue-50' : ''
    } ${
      transparent
        ? 'text-white/80 hover:text-white hover:bg-white/10'
        : 'text-slate-600 hover:text-blue-700 hover:bg-blue-50'
    }`

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? 'bg-transparent'
          : 'bg-white/96 backdrop-blur-md shadow-md border-b border-blue-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shadow-md group-hover:shadow-blue-300 transition-shadow duration-300">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                <path d="M12 2C9.243 2 7 4.243 7 7c0 1.357.498 2.594 1.316 3.542L10 17.5c.276 1.105.724 2.5 2 2.5s1.724-1.395 2-2.5l1.684-6.958C16.502 9.594 17 8.357 17 7c0-2.757-2.243-5-5-5z" />
              </svg>
            </div>
            <div className="text-left">
              <div className={`font-black text-lg leading-none transition-colors duration-300 ${transparent ? 'text-white' : 'text-blue-700'}`}>
                All Smiles
              </div>
              <div className={`text-xs font-medium leading-none mt-0.5 transition-colors duration-300 ${transparent ? 'text-blue-100' : 'text-slate-400'}`}>
                Dental Clinic
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) =>
              link.page ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className={linkClass(pathname === link.href)}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={() => handleAnchorClick(link.href)}
                  className={linkClass()}
                >
                  {link.label}
                </button>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+2349169892921"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                transparent ? 'text-white hover:text-blue-200' : 'text-blue-600 hover:text-blue-700'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">09169892921</span>
            </a>
            <Link
              href="/contact#booking"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-md hover:shadow-blue-300/50 transition-all duration-200 hover:-translate-y-0.5"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              transparent ? 'text-white hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'
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
              {navLinks.map((link) =>
                link.page ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 font-medium rounded-xl transition-colors ${
                      pathname === link.href
                        ? 'text-blue-700 bg-blue-50'
                        : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => handleAnchorClick(link.href)}
                    className="w-full text-left px-4 py-3 text-slate-700 font-medium hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                  >
                    {link.label}
                  </button>
                )
              )}
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <a
                  href="tel:+2349169892921"
                  className="flex items-center gap-2 px-4 py-3 text-blue-600 font-medium"
                >
                  <Phone className="w-4 h-4" /> 09169892921
                </a>
                <Link
                  href="/contact#booking"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center bg-blue-600 text-white font-bold py-3 rounded-xl"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
