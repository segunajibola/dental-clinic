'use client'

import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, ArrowUpCircle } from 'lucide-react'

const services = [
  'Teeth Whitening',
  'Scaling & Polishing',
  'Tooth-Colored Filling',
  'Root Canal',
  'Dental Implants',
  'Braces',
  'Invisalign Veneers',
  'Snap-on Veneers',
]

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Team', href: '#team' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Book Appointment', href: '#booking' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Promo bar */}
      <div className="bg-gradient-to-r from-blue-600 to-sky-500 py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-white">
          <p className="text-sm font-medium">
            🎉 Special discounts now available — Up to 50% OFF selected treatments!
          </p>
          <a
            href="#booking"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-white text-blue-600 font-bold px-4 py-1.5 rounded-full text-sm hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            Book Now
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M12 2C9.243 2 7 4.243 7 7c0 1.357.498 2.594 1.316 3.542L10 17.5c.276 1.105.724 2.5 2 2.5s1.724-1.395 2-2.5l1.684-6.958C16.502 9.594 17 8.357 17 7c0-2.757-2.243-5-5-5z" />
                </svg>
              </div>
              <div>
                <div className="font-black text-xl text-white leading-none">All Smiles</div>
                <div className="text-blue-400 text-xs font-medium leading-none mt-0.5">Dental Clinic</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-3">
              Putting a Smile on your Face since 2016. World-class dental care at our Oniru and
              Chevron branches in Lekki, Lagos.
            </p>
            <p className="text-sky-400 text-xs italic mb-5">"Putting a Smile on your Face"</p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-5">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-5">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 text-xs font-semibold mb-0.5">Oniru Branch</p>
                  <p className="text-slate-400 text-xs">7 T.K Kuboye Street, Oniru, Lekki, Lagos</p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 text-xs font-semibold mb-0.5">Chevron Branch</p>
                  <p className="text-slate-400 text-xs">Talea Mall, Chevron Drive (Before UBA Bank), Lagos</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+2349169892921" className="text-slate-400 hover:text-blue-400 text-sm block transition-colors">
                    09169892921
                  </a>
                  <a href="tel:+2348183083375" className="text-slate-400 hover:text-blue-400 text-xs transition-colors">
                    08183083375
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:ifeosho22@gmail.com" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                  ifeosho22@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-5 bg-slate-800/60 rounded-xl p-4">
              <p className="text-white text-xs font-semibold mb-2">Opening Hours</p>
              <p className="text-slate-400 text-xs">Mon – Fri: 8:00 AM – 7:00 PM</p>
              <p className="text-slate-400 text-xs">Sat – Sun: 9:00 AM – 5:00 PM</p>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-xs font-medium">Open Now</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center">
            © {new Date().getFullYear()} All Smiles Dental Clinic. All rights reserved. | Lekki, Lagos, Nigeria
          </p>
          <div className="flex items-center gap-4">
            <span className="text-slate-500 text-xs">Privacy Policy</span>
            <span className="text-slate-700">•</span>
            <span className="text-slate-500 text-xs">Terms of Service</span>
            <button
              onClick={scrollToTop}
              className="ml-4 w-8 h-8 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
              aria-label="Back to top"
            >
              <ArrowUpCircle className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
