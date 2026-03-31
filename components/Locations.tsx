'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Phone, Clock, Navigation } from 'lucide-react'

const branches = [
  {
    id: 1,
    name: 'Oniru Branch',
    subtitle: 'Lekki, Lagos',
    address: '7 T.K Kuboye Street, Oniru, Lekki, Lagos',
    phone: '+234 916 989 2921',
    phone2: '+234 818 308 3375',
    hours: {
      weekdays: 'Mon – Fri: 9:00 AM – 6:00 PM',
      weekend: 'Saturday: 9:00 AM – 3:00 PM',
      note: 'Closed Sundays',
    },
    landmarks: 'Oniru Estate Area, Lekki Phase 1',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7242083339776!2d3.4663!3d6.4360!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjYnMDkuNiJOIDPCsDI3JzU4LjciRQ!5e0!3m2!1sen!2sng!4v1',
    directionUrl: 'https://maps.google.com/?q=7+TK+Kuboye+Street+Oniru+Lekki+Lagos',
    gradient: 'from-blue-600 to-sky-500',
    badge: 'Main Branch',
  },
  {
    id: 2,
    name: 'Chevron Branch',
    subtitle: 'Chevron Drive, Lekki, Lagos',
    address: 'Talea Mall, Chevron Drive (Before UBA Bank), Lagos',
    phone: '+234 916 989 2921',
    phone2: '+234 818 308 8375',
    hours: {
      weekdays: 'Mon – Sun: 9:00 AM – 8:00 PM',
      weekend: 'Open Every Day',
      note: 'Including public holidays',
    },
    landmarks: 'Inside Talea Mall, before UBA Bank',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.9!2d3.488!3d6.425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnMzAuMCJOIDPCsDI5JzE2LjgiRQ!5e0!3m2!1sen!2sng!4v1',
    directionUrl: 'https://maps.google.com/?q=Talea+Mall+Chevron+Drive+Lekki+Lagos',
    gradient: 'from-purple-600 to-indigo-500',
    badge: 'Chevron Branch',
  },
]

export default function Locations() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="locations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
            Our Branches
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
            Two Convenient{' '}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Locations
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Visit us at either of our two Lekki branches — Oniru and Chevron. Both fully
            equipped with world-class care and our expert dental team.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {branches.map((branch, i) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white rounded-3xl border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${branch.gradient} p-6 text-white`}>
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 border border-white/30">
                      {branch.badge}
                    </span>
                    <h3 className="text-2xl font-black">{branch.name}</h3>
                    <p className="text-white/80 text-sm mt-1">{branch.subtitle}</p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Map */}
              <iframe
                title={`${branch.name} Location`}
                src={branch.mapUrl}
                width="100%"
                height="220"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Details */}
              <div className="p-6 space-y-4">
                <div className="flex gap-3">
                  <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                      Address
                    </p>
                    <p className="text-slate-700 text-sm font-medium">{branch.address}</p>
                    <p className="text-slate-400 text-xs mt-0.5">📍 {branch.landmarks}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                      Phone
                    </p>
                    <a
                      href={`tel:${branch.phone.replace(/\s/g, '')}`}
                      className="text-slate-700 text-sm hover:text-blue-600 transition-colors block"
                    >
                      {branch.phone}
                    </a>
                    <a
                      href={`tel:${branch.phone2.replace(/\s/g, '')}`}
                      className="text-slate-500 text-xs hover:text-blue-600 transition-colors"
                    >
                      {branch.phone2}
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-9 h-9 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                      Opening Hours
                    </p>
                    <p className="text-slate-700 text-sm font-medium">{branch.hours.weekdays}</p>
                    <p className="text-slate-500 text-xs">{branch.hours.weekend}</p>
                    <p className="text-slate-400 text-xs italic">{branch.hours.note}</p>
                  </div>
                </div>

                <a
                  href={branch.directionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full mt-2 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r ${branch.gradient} text-white hover:-translate-y-0.5 transition-all duration-200 shadow-md`}
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-10"
        >
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-sm font-medium px-5 py-3 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Both branches are currently accepting new patients
          </div>
        </motion.div>
      </div>
    </section>
  )
}
