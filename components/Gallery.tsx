'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Camera } from 'lucide-react'

const cases = [
  {
    id: 1,
    treatment: 'Teeth Whitening',
    beforeColor: 'from-yellow-200 to-amber-300',
    afterColor: 'from-white to-slate-50',
    beforeLabel: 'Before',
    afterLabel: 'After',
    description: '8 shades whiter in one session',
  },
  {
    id: 2,
    treatment: 'Dental Braces',
    beforeColor: 'from-rose-100 to-rose-200',
    afterColor: 'from-blue-50 to-sky-100',
    beforeLabel: 'Before',
    afterLabel: 'After',
    description: 'Perfectly aligned smile',
  },
  {
    id: 3,
    treatment: 'Dental Implants',
    beforeColor: 'from-gray-200 to-gray-300',
    afterColor: 'from-white to-blue-50',
    beforeLabel: 'Before',
    afterLabel: 'After',
    description: 'Natural-looking implant result',
  },
  {
    id: 4,
    treatment: 'Porcelain Veneers',
    beforeColor: 'from-amber-100 to-yellow-200',
    afterColor: 'from-white to-sky-50',
    beforeLabel: 'Before',
    afterLabel: 'After',
    description: 'Hollywood smile achieved',
  },
  {
    id: 5,
    treatment: 'Snap-on Veneers',
    beforeColor: 'from-orange-100 to-amber-200',
    afterColor: 'from-white to-blue-50',
    beforeLabel: 'Before',
    afterLabel: 'After',
    description: 'Instant smile transformation',
  },
  {
    id: 6,
    treatment: 'Scaling & Polishing',
    beforeColor: 'from-yellow-100 to-amber-200',
    afterColor: 'from-white to-slate-50',
    beforeLabel: 'Before',
    afterLabel: 'After',
    description: 'Clean & healthy teeth',
  },
]

function CaseCard({ caseItem, index }: { caseItem: typeof cases[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Side-by-side image area */}
      <div className="flex h-48">
        {/* Before */}
        <div className={`relative flex-1 bg-gradient-to-br ${caseItem.beforeColor} flex items-center justify-center`}>
          <div className="text-center">
            <svg viewBox="0 0 80 100" className="w-16 h-20 mx-auto mb-2" fill="none">
              <path
                d="M40 8C26 8 16 18 16 30c0 6 2 11 5 16l5 30c1 4 3 8 6 10 2 1 4 1 5-1 1-1 2-3 3-5l5-10 5 10c1 2 2 4 3 5 1 2 3 2 5 1 3-2 5-6 6-10l5-30c3-5 5-10 5-16 0-12-10-22-24-22z"
                fill="#fef3c7"
                stroke="#fbbf24"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="absolute bottom-3 left-0 right-0 flex justify-center">
            <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Before
            </span>
          </div>
          <div className="absolute top-2 left-2 flex items-center gap-1 text-xs text-black/20 font-medium">
            <Camera className="w-3 h-3" />
            SmileCraft
          </div>
        </div>

        {/* Divider */}
        <div className="w-px bg-slate-200 z-10" />

        {/* After */}
        <div className={`relative flex-1 bg-gradient-to-br ${caseItem.afterColor} flex items-center justify-center`}>
          <div className="text-center">
            <svg viewBox="0 0 80 100" className="w-16 h-20 mx-auto mb-2" fill="none">
              <path
                d="M40 8C26 8 16 18 16 30c0 6 2 11 5 16l5 30c1 4 3 8 6 10 2 1 4 1 5-1 1-1 2-3 3-5l5-10 5 10c1 2 2 4 3 5 1 2 3 2 5 1 3-2 5-6 6-10l5-30c3-5 5-10 5-16 0-12-10-22-24-22z"
                fill="#fff"
                stroke="#e2e8f0"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="absolute bottom-3 left-0 right-0 flex justify-center">
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              After
            </span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-slate-900">{caseItem.treatment}</h3>
          <span className="text-xs bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full font-medium">
            Real Result
          </span>
        </div>
        <p className="text-slate-500 text-sm">{caseItem.description}</p>
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
            Before & After
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
            Real Results,{' '}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Real Smiles
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            See the difference side by side. These are actual patient results
            from SmileCraft Dental Clinic.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseItem, i) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-slate-400 text-sm">
            Results may vary. All photos are from actual patients with their consent.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
