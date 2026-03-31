'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  Award,
  Users,
  Clock,
  Star,
  CheckCircle2,
} from 'lucide-react'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'NDA Certified',
    description: 'Fully registered with the Nigerian Dental Association with internationally trained professionals.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: HeartPulse,
    title: 'Pain-Free Experience',
    description: 'We use advanced anaesthesia and modern techniques for a comfortable, anxiety-free visit.',
    color: 'text-rose-500',
    bg: 'bg-rose-50',
  },
  {
    icon: Stethoscope,
    title: 'Latest Technology',
    description: 'Digital X-rays, laser dentistry, and state-of-the-art dental equipment.',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
  },
  {
    icon: Award,
    title: 'Proven Excellence',
    description: 'Recognised as one of the most trusted dental clinics in Lekki since 2016.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    icon: Users,
    title: 'Expert Dental Team',
    description: 'Highly trained dentists and hygienists dedicated to your oral health and comfort.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: Clock,
    title: 'Flexible Hours',
    description: 'Open 7 days a week at both our Oniru and Chevron branches for your convenience.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
]

const highlights = [
  'Over 5,000 patients treated',
  'Same-day emergency appointments',
  'Child-friendly environment',
  'HMO accepted & flexible payment',
  'Sterile, modern facilities',
  'Two convenient Lekki branches',
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Why Lagos Chooses{' '}
              <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                All Smiles
              </span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-4">
              Established in 2016, All Smiles Dental Clinic is a world-class dental facility
              located in Lagos, delivering exceptional oral healthcare with a focus on comfort,
              precision, and results.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Our team of highly trained dental professionals is dedicated to helping every patient
              achieve a confident, healthy smile using modern techniques and advanced equipment.
              Designed for professionals, high-net-worth individuals, and anyone seeking premium
              dental care in Lekki.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-700 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <a
              href="/about#team"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5 transition-all duration-200"
            >
              Meet Our Team
            </a>
          </motion.div>

          {/* Right — visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-sky-500 p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '2016', label: 'Est. Year', icon: Star },
                  { value: '5,000+', label: 'Happy Smiles', icon: Users },
                  { value: '2', label: 'Branches', icon: Stethoscope },
                  { value: '98%', label: 'Success Rate', icon: Award },
                ].map(({ value, label, icon: Icon }) => (
                  <div
                    key={label}
                    className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 text-white text-center"
                  >
                    <Icon className="w-6 h-6 mx-auto mb-2 text-sky-200" />
                    <div className="text-3xl font-black mb-1">{value}</div>
                    <div className="text-blue-100 text-sm">{label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-white/15 rounded-2xl p-5 text-center text-white">
                <p className="text-lg font-semibold">
                  "Putting a Smile on your Face — every single visit."
                </p>
                <p className="text-blue-200 text-sm mt-1">— All Smiles Dental Clinic</p>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-slate-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">NDA Certified</div>
                  <div className="text-slate-400 text-xs">Nigerian Dental Association</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-12 h-12 ${reason.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <reason.icon className={`w-6 h-6 ${reason.color}`} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{reason.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
