'use client'

import { motion } from 'framer-motion'
import { Star, Shield, Clock, ChevronDown, CheckCircle } from 'lucide-react'

const stats = [
  { value: '5,000+', label: 'Happy Patients' },
  { value: '9+', label: 'Years of Excellence' },
  { value: '2', label: 'Branches in Lagos' },
  { value: '98%', label: 'Satisfaction Rate' },
]

const badges = [
  { icon: Shield, text: 'NDA Certified' },
  { icon: Star, text: 'Top Rated in Lekki' },
  { icon: Clock, text: 'Open 7 Days' },
]

const WA_NUMBER = '2348183088375'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #0f172a 0%, #1e3a8a 40%, #1d4ed8 70%, #0ea5e9 100%)',
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-800/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {[
          { top: '8%', left: '12%' },
          { top: '15%', left: '72%' },
          { top: '28%', left: '88%' },
          { top: '42%', left: '5%' },
          { top: '55%', left: '60%' },
          { top: '68%', left: '30%' },
          { top: '78%', left: '80%' },
          { top: '90%', left: '18%' },
          { top: '35%', left: '45%' },
          { top: '62%', left: '92%' },
          { top: '20%', left: '38%' },
          { top: '82%', left: '55%' },
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{ top: pos.top, left: pos.left }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Now Accepting New Patients — Lekki, Lagos
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-3"
            >
              All Smiles{' '}
              <span className="relative inline-block">
                <span className="text-sky-300">Dental</span>
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 8 C50 2, 150 2, 198 8"
                    stroke="#38bdf8"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>{' '}
              Clinic
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-sky-200 text-xl font-semibold italic mb-5"
            >
              "Putting a Smile on your Face"
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-blue-100 leading-relaxed mb-8 max-w-xl"
            >
              Premium dental care in Lekki with experienced professionals, modern technology,
              and a patient-first approach. Two convenient branches — Oniru & Chevron.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              {['Painless Procedures', 'Same-Day Appointments', 'Flexible Payment Plans'].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2 text-blue-100 text-sm">
                    <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    {item}
                  </div>
                )
              )}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="#booking"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-2xl shadow-2xl hover:bg-blue-50 transition-all duration-200 hover:-translate-y-1 text-base"
              >
                Book Free Consultation
              </a>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                  'Hello! I would like to book a dental appointment at All Smiles Dental Clinic.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl transition-all duration-200 hover:-translate-y-1 text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {badges.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs font-medium px-3 py-2 rounded-lg"
                >
                  <Icon className="w-3.5 h-3.5 text-sky-300" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — before/after + stats */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="text-center mb-4">
                <span className="text-white/60 text-xs font-medium uppercase tracking-widest">
                  Real Patient Results
                </span>
                <h3 className="text-white font-bold text-xl mt-1">See the Transformation</h3>
              </div>

              {/* Side-by-side before/after */}
              <div className="flex gap-3 mb-4">
                <div className="flex-1">
                  <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                    <img
                      src="/images/before.jpg"
                      alt="Before dental treatment"
                      className="w-full h-60 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center">
                      <span className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-bold px-4 py-1 rounded-full">
                        Before
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="relative rounded-2xl overflow-hidden border-2 border-sky-400/60 shadow-2xl">
                    <img
                      src="/images/after.jpg"
                      alt="After dental treatment"
                      className="w-full h-60 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center">
                      <span className="bg-sky-500/80 backdrop-blur-sm border border-sky-300/50 text-white text-sm font-bold px-4 py-1 rounded-full">
                        After
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-4 gap-3">
                {stats.map(({ value, label }) => (
                  <div
                    key={label}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center"
                  >
                    <div className="text-lg font-black text-white">{value}</div>
                    <div className="text-blue-200 text-xs mt-0.5">{label}</div>
                  </div>
                ))}
              </div>

              {/* Floating offer */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-4 bg-red-500 text-white rounded-2xl px-4 py-3 shadow-xl"
              >
                <div className="text-xs font-medium opacity-90">Limited Offer</div>
                <div className="text-xl font-black">Up to 50% OFF</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  )
}
