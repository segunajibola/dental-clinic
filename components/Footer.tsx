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
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Book Appointment', href: '#booking' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Top promo bar */}
      <div className="bg-gradient-to-r from-blue-600 to-sky-500 py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-white">
          <p className="text-sm font-medium">
            🎉 Special discounts available now — Up to 50% OFF selected treatments!
          </p>
          <a
            href="#booking"
            className="bg-white text-blue-600 font-bold px-4 py-1.5 rounded-full text-sm hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            Book Now
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-lg">S</span>
              </div>
              <div>
                <span className="font-black text-xl text-white tracking-tight">SmileCraft</span>
                <p className="text-blue-400 text-xs font-medium leading-none">Dental Clinic</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Premium dental care in the heart of Lekki, Lagos. Transforming smiles with
              world-class technology and compassionate care since 2012.
            </p>
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
                <p className="text-slate-400 text-sm">
                  12 Admiralty Way, Lekki Phase 1,<br />Lagos, Nigeria
                </p>
              </div>
              <div className="flex gap-3">
                <Phone className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+2348100000000" className="text-slate-400 hover:text-blue-400 text-sm block transition-colors">
                    +234 810 000 0000
                  </a>
                  <a href="tel:+2347010000000" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                    +234 701 000 0000
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@smilecraftdental.ng" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                  hello@smilecraftdental.ng
                </a>
              </div>
            </div>

            {/* Hours */}
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

        {/* Bottom bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center">
            © {new Date().getFullYear()} SmileCraft Dental Clinic. All rights reserved. | Lekki, Lagos, Nigeria
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
