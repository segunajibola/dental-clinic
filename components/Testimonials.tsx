'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Adaeze Okafor',
    role: 'Marketing Executive, VI',
    rating: 5,
    service: 'Teeth Whitening',
    review:
      'I walked in feeling self-conscious and left absolutely beaming! The team at All Smiles is professional, gentle, and skilled. My teeth are now 8 shades whiter. Worth every naira!',
    avatar: 'AO',
    color: 'from-pink-400 to-rose-500',
    verified: true,
  },
  {
    id: 2,
    name: 'Chukwuemeka Eze',
    role: 'Business Owner, Lekki',
    rating: 5,
    service: 'Dental Implants',
    review:
      'After losing a tooth, I was devastated. All Smiles gave me back my confidence with a perfect implant. The procedure was painless and the result looks completely natural. Highly recommend!',
    avatar: 'CE',
    color: 'from-blue-400 to-blue-600',
    verified: true,
  },
  {
    id: 3,
    name: 'Fatimah Al-Rashid',
    role: 'Doctor, Lagos Island',
    rating: 5,
    service: 'Braces',
    review:
      "As a healthcare professional, I have high standards. All Smiles exceeded them all. My daughter's braces treatment was exceptional — professional, on schedule, and results are perfect.",
    avatar: 'FA',
    color: 'from-purple-400 to-purple-600',
    verified: true,
  },
  {
    id: 4,
    name: 'Tunde Badmus',
    role: 'Software Engineer, Ikate',
    rating: 5,
    service: 'Root Canal',
    review:
      'I was terrified of getting a root canal but the team made it completely painless. Zero discomfort during or after. The price was also much more affordable than other clinics I quoted.',
    avatar: 'TB',
    color: 'from-emerald-400 to-green-500',
    verified: true,
  },
  {
    id: 5,
    name: 'Ngozi Amadi',
    role: 'Banker, Chevron Drive',
    rating: 5,
    service: 'Snap-on Veneers',
    review:
      "I finally got the smile I've always dreamed of. The veneers look so natural — nobody can tell! All Smiles transformed my appearance and my self-confidence completely.",
    avatar: 'NA',
    color: 'from-sky-400 to-cyan-500',
    verified: true,
  },
  {
    id: 6,
    name: 'Babatunde Williams',
    role: 'Architect, Ajah',
    rating: 5,
    service: 'Scaling & Polishing',
    review:
      "Best dental experience I've ever had in Lagos. Clean facility, friendly staff, and my teeth feel incredibly clean. Pricing is transparent and fair. This is now my permanent dentist.",
    avatar: 'BW',
    color: 'from-orange-400 to-amber-500',
    verified: true,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [current, setCurrent] = useState(0)
  const perPage = 3

  const prev = () => setCurrent((c) => Math.max(0, c - perPage))
  const next = () => setCurrent((c) => Math.min(testimonials.length - perPage, c + perPage))
  const visible = testimonials.slice(current, current + perPage)

  return (
    <section id="testimonials" className="py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-500/20 text-blue-300 text-sm font-semibold px-4 py-2 rounded-full mb-4 uppercase tracking-wider border border-blue-500/30">
            Patient Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            What Our Patients{' '}
            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Over 5,000 patients have trusted All Smiles Dental Clinic. Here is what they say
            about their experience.
          </p>

          <div className="flex items-center justify-center gap-2 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-white font-bold text-xl ml-1">4.9</span>
            <span className="text-slate-400">(500+ verified reviews)</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {visible.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/60 rounded-3xl p-6 hover:border-blue-500/30 hover:bg-slate-800 transition-all duration-300 flex flex-col"
            >
              <Quote className="w-8 h-8 text-blue-500/40 mb-4" />
              <p className="text-slate-300 leading-relaxed mb-6 flex-1 text-sm">{t.review}</p>

              <div className="border-t border-slate-700/60 pt-4">
                <StarRating rating={t.rating} />
                <div className="flex items-center gap-3 mt-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold text-sm">{t.name}</span>
                      {t.verified && (
                        <span className="text-xs bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-0.5 rounded-full">
                          ✓ Verified
                        </span>
                      )}
                    </div>
                    <div className="text-slate-400 text-xs">{t.role}</div>
                    <div className="text-blue-400 text-xs mt-0.5">{t.service}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-10 h-10 rounded-full border border-slate-600 text-slate-300 flex items-center justify-center hover:border-blue-500 hover:text-blue-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {[...Array(Math.ceil(testimonials.length / perPage))].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i * perPage)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  Math.floor(current / perPage) === i ? 'w-8 bg-blue-500' : 'w-2 bg-slate-600'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            disabled={current + perPage >= testimonials.length}
            className="w-10 h-10 rounded-full border border-slate-600 text-slate-300 flex items-center justify-center hover:border-blue-500 hover:text-blue-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
