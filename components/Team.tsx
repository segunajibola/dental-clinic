'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star } from 'lucide-react'

const team = [
  {
    name: 'Dr. Chika',
    role: 'Chief Dentist',
    specialty: 'Orthodontics',
    bio: 'Dr. Chika is a dedicated orthodontist with over a decade of experience helping patients achieve beautifully aligned smiles. She combines advanced orthodontic techniques with a caring, patient-focused approach that puts every patient at ease.',
    initials: 'DC',
    gradient: 'from-blue-600 to-sky-400',
    rating: 5.0,
    reviews: 312,
  },
  {
    name: 'Dr. Akinrinola Felix',
    role: 'Dentist',
    specialty: 'Orthodontics & Cosmetic Dentistry',
    bio: 'A specialist in orthodontics and cosmetic dentistry, Dr. Felix works with advanced systems including Invisalign, Damon, and MBT, delivering complex procedures and stunning smile transformations for his patients.',
    initials: 'AF',
    gradient: 'from-purple-600 to-indigo-500',
    rating: 4.9,
    reviews: 218,
  },
  {
    name: 'Dr. Adekoya Pelium',
    role: 'Dentist',
    specialty: 'Surgical & Aesthetic Dentistry',
    bio: 'Known for precision and advanced orthodontic care, Dr. Adekoya specialises in surgical procedures, smile design, and aesthetic dentistry — transforming smiles with exceptional attention to detail.',
    initials: 'AP',
    gradient: 'from-rose-500 to-pink-400',
    rating: 5.0,
    reviews: 187,
  },
  {
    name: 'Dr. Aladejare Ayotunde',
    role: 'Dentist',
    specialty: 'General & Restorative Dentistry',
    bio: 'A compassionate dental surgeon focused on patient comfort and high-quality care. Dr. Aladejare ensures every patient has a smooth, pleasant dental experience from consultation to aftercare.',
    initials: 'AA',
    gradient: 'from-emerald-500 to-teal-400',
    rating: 4.9,
    reviews: 154,
  },
  {
    name: 'Dr. Anene Ugwuanyi',
    role: 'Assistant Lead Dentist',
    specialty: 'Orthodontics & Patient Care',
    bio: 'Passionate about orthodontics and patient satisfaction, Dr. Anene delivers beautiful smiles with a caring and thorough approach. Her dedication to patient wellbeing makes her a favourite among patients of all ages.',
    initials: 'AU',
    gradient: 'from-amber-500 to-orange-400',
    rating: 5.0,
    reviews: 203,
  },
]

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="team" className="py-24 bg-slate-50" style={{ scrollMarginTop: '80px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
            Our Dental Team
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
            Meet Your{' '}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Expert Dentists
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Our highly trained, experienced dental professionals are dedicated to your comfort,
            health, and confidence — at both our Oniru and Chevron branches.
          </p>
        </motion.div>

        {/* First row: 3 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {team.slice(0, 3).map((member, i) => (
            <DentistCard key={member.name} member={member} index={i} />
          ))}
        </div>

        {/* Second row: 2 cards centered */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {team.slice(3).map((member, i) => (
            <DentistCard key={member.name} member={member} index={i + 3} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-slate-500 mb-4">Ready to meet our team in person?</p>
          <a
            href="#booking"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:-translate-y-1 transition-all duration-200"
          >
            Book an Appointment
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function DentistCard({ member, index }: { member: (typeof team)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-3xl border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div
        className={`h-36 bg-gradient-to-br ${member.gradient} flex items-center justify-center relative overflow-hidden`}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="relative w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/40 flex items-center justify-center shadow-2xl">
          <span className="text-white font-black text-3xl">{member.initials}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-black text-slate-900">{member.name}</h3>
          <p className="text-blue-600 font-semibold text-sm">{member.role}</p>
          <span className="inline-block bg-blue-50 text-blue-600 text-xs font-medium px-2.5 py-1 rounded-full mt-2">
            {member.specialty}
          </span>
        </div>

        <p className="text-slate-500 text-sm leading-relaxed mb-5">{member.bio}</p>

        <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, j) => (
              <Star
                key={j}
                className={`w-3.5 h-3.5 ${
                  j < Math.floor(member.rating)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-slate-200'
                }`}
              />
            ))}
          </div>
          <span className="text-slate-900 font-bold text-sm">{member.rating}</span>
          <span className="text-slate-400 text-xs">({member.reviews} reviews)</span>
        </div>
      </div>
    </motion.div>
  )
}
