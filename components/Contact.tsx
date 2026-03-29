'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Location',
    lines: ['12 Admiralty Way, Lekki Phase 1', 'Lagos, Nigeria'],
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    link: 'https://maps.google.com/?q=Lekki+Phase+1+Lagos',
  },
  {
    icon: Phone,
    title: 'Call / WhatsApp',
    lines: ['+234 810 000 0000', '+234 701 000 0000'],
    color: 'text-green-600',
    bg: 'bg-green-50',
    link: 'tel:+2348100000000',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['hello@smilecraftdental.ng', 'info@smilecraftdental.ng'],
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    link: 'mailto:hello@smilecraftdental.ng',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Mon – Fri: 8:00 AM – 7:00 PM', 'Sat – Sun: 9:00 AM – 5:00 PM'],
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    link: null,
  },
]

const socials = [
  { icon: Instagram, label: 'Instagram', color: 'hover:text-pink-500', href: '#' },
  { icon: Facebook, label: 'Facebook', color: 'hover:text-blue-500', href: '#' },
  { icon: Twitter, label: 'Twitter/X', color: 'hover:text-sky-400', href: '#' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
            Contact & Location
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
            Find Us in{' '}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Lekki, Lagos
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            We are conveniently located in Lekki Phase 1, easily accessible from VI, Ajah, and
            Chevron. Walk-ins welcome.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — contact cards + map */}
          <div className="space-y-6">
            {/* Contact info grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map(({ icon: Icon, title, lines, color, bg, link }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:shadow-md transition-shadow ${link ? 'cursor-pointer' : ''}`}
                  onClick={() => link && window.open(link, '_blank')}
                >
                  <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center mb-3`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">{title}</h4>
                  {lines.map((line, j) => (
                    <p key={j} className="text-slate-500 text-sm">{line}</p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm"
            >
              <iframe
                title="SmileCraft Dental Clinic Location - Lekki Phase 1 Lagos"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7242083339776!2d3.4663!3d6.4360!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjYnMDkuNiJOIDPCsDI3JzU4LjciRQ!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

          {/* Right — CTA + social */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Emergency card */}
            <div className="bg-gradient-to-br from-red-500 to-rose-600 rounded-3xl p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-black text-xl mb-1">Dental Emergency?</h3>
                  <p className="text-rose-100 text-sm mb-4">
                    We offer same-day emergency dental appointments. Call us immediately and we
                    will see you as soon as possible.
                  </p>
                  <a
                    href="tel:+2348100000000"
                    className="inline-flex items-center gap-2 bg-white text-red-600 font-bold px-5 py-2.5 rounded-xl hover:bg-red-50 transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now: +234 810 000 0000
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 text-white">
              <h3 className="font-black text-xl mb-2">Quick WhatsApp Booking</h3>
              <p className="text-green-100 text-sm mb-4">
                Get an instant response. Message us on WhatsApp and book your appointment in minutes.
              </p>
              <a
                href={`https://wa.me/2348100000000?text=${encodeURIComponent('Hello SmileCraft! I would like to book an appointment.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-green-600 font-bold px-5 py-2.5 rounded-xl hover:bg-green-50 transition-colors text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Open WhatsApp
              </a>
            </div>

            {/* Follow us */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6">
              <h3 className="font-bold text-slate-900 mb-3">Follow Us Online</h3>
              <p className="text-slate-500 text-sm mb-4">
                See our latest work, patient transformations, and dental tips on social media.
              </p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, color, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className={`w-10 h-10 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 ${color} hover:border-slate-300 hover:shadow-sm transition-all`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Directions note */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
              <p className="text-blue-800 text-sm font-medium mb-1">📍 Getting Here</p>
              <p className="text-blue-600 text-sm">
                Located on Admiralty Way, Lekki Phase 1 — close to 1st Roundabout. Easily
                accessible from Victoria Island, Ajah, and Chevron. Free parking available.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
