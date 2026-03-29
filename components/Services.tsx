'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '2348100000000'

const services = [
  {
    name: 'Teeth Whitening',
    originalPrice: '₦239,400',
    discountedPrice: '₦180,000',
    savings: '₦59,400',
    discountPct: '25% OFF',
    icon: '✨',
    description: 'Professional-grade whitening for a radiant, confident smile up to 8 shades brighter.',
    popular: false,
    category: 'Cosmetic',
  },
  {
    name: 'Scaling & Polishing',
    originalPrice: '₦80,000',
    discountedPrice: '₦45,000',
    savings: '₦35,000',
    discountPct: '44% OFF',
    icon: '🦷',
    description: 'Deep clean your teeth, remove tartar and stains for optimal oral health.',
    popular: false,
    category: 'Preventive',
  },
  {
    name: 'Tooth-Colored Filling',
    originalPrice: '₦120,000',
    discountedPrice: '₦45,000',
    savings: '₦75,000',
    discountPct: '63% OFF',
    icon: '🩹',
    description: 'Natural-looking composite fillings that blend seamlessly with your teeth.',
    popular: true,
    category: 'Restorative',
  },
  {
    name: 'Airflow',
    originalPrice: '₦159,600',
    discountedPrice: '₦120,000',
    savings: '₦39,600',
    discountPct: '25% OFF',
    icon: '💨',
    description: 'Advanced air-polishing technology that removes biofilm and stains gently.',
    popular: false,
    category: 'Preventive',
  },
  {
    name: 'Crown',
    originalPrice: '₦665,000',
    discountedPrice: '₦500,000',
    savings: '₦165,000',
    discountPct: '25% OFF',
    icon: '👑',
    description: 'Durable, porcelain dental crowns that look and feel like natural teeth.',
    popular: false,
    category: 'Restorative',
  },
  {
    name: 'Dentures',
    originalPrice: '₦113,050',
    discountedPrice: '₦85,000',
    savings: '₦28,050',
    discountPct: '25% OFF',
    icon: '😁',
    description: 'Custom-fitted full or partial dentures for a complete, functional smile.',
    popular: false,
    category: 'Restorative',
  },
  {
    name: 'Root Canal',
    originalPrice: '₦250,000',
    discountedPrice: '₦150,000',
    savings: '₦100,000',
    discountPct: '40% OFF',
    icon: '🔬',
    description: 'Pain-free root canal treatment to save infected teeth and relieve discomfort.',
    popular: true,
    category: 'Endodontics',
  },
  {
    name: 'Dental Implants',
    originalPrice: '$1,300',
    discountedPrice: '$1,000',
    savings: '$300',
    discountPct: '23% OFF',
    icon: '🔩',
    description: 'Permanent titanium implants that look, feel, and function like real teeth.',
    popular: true,
    category: 'Implantology',
  },
  {
    name: 'Braces',
    originalPrice: '₦3,600,000',
    discountedPrice: '₦1,800,000',
    savings: '₦1,800,000',
    discountPct: '50% OFF',
    icon: '🦷',
    description: 'Traditional metal or clear braces for perfectly aligned teeth and bite correction.',
    popular: true,
    category: 'Orthodontics',
  },
  {
    name: 'Invisalign Veneers',
    originalPrice: '$4,000',
    discountedPrice: '$4,000',
    savings: null,
    discountPct: null,
    icon: '💎',
    description: 'Ultra-thin porcelain veneers for a flawless Hollywood smile with Invisalign alignment.',
    popular: false,
    category: 'Cosmetic',
  },
  {
    name: 'Snap-on Veneers',
    originalPrice: '₦650,000',
    discountedPrice: '₦450,000',
    savings: '₦200,000',
    discountPct: '31% OFF',
    icon: '⚡',
    description: 'Removable snap-on veneers for an instant smile transformation without permanent alterations.',
    popular: false,
    category: 'Cosmetic',
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const waMessage = encodeURIComponent(
    `Hello! I'm interested in booking a ${service.name} appointment at SmileCraft Dental Clinic. The discounted price is ${service.discountedPrice}. Can you confirm availability?`
  )

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`relative group bg-white rounded-3xl border-2 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col ${
        service.popular ? 'border-blue-500 shadow-blue-100' : 'border-slate-100'
      }`}
    >
      {/* Popular badge */}
      {service.popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <span className="bg-gradient-to-r from-blue-600 to-sky-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg whitespace-nowrap">
            ⭐ Most Popular
          </span>
        </div>
      )}

      {/* Discount badge */}
      {service.discountPct && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-red-500 text-white text-xs font-black px-2.5 py-1.5 rounded-xl shadow-md">
            {service.discountPct}
          </span>
        </div>
      )}

      {/* Card top gradient */}
      <div
        className={`h-2 w-full ${
          service.popular
            ? 'bg-gradient-to-r from-blue-600 to-sky-500'
            : 'bg-gradient-to-r from-slate-200 to-slate-100 group-hover:from-blue-400 group-hover:to-sky-400 transition-all duration-300'
        }`}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Category */}
        <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-3">
          {service.category}
        </span>

        {/* Icon + Name */}
        <div className="flex items-start gap-3 mb-3">
          <span className="text-3xl">{service.icon}</span>
          <h3 className="text-lg font-bold text-slate-900 leading-tight">{service.name}</h3>
        </div>

        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{service.description}</p>

        {/* Pricing */}
        <div className="mb-5">
          {service.savings && (
            <div className="text-xs font-medium text-slate-400 line-through mb-0.5">
              Was {service.originalPrice}
            </div>
          )}
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-slate-900">{service.discountedPrice}</span>
            {service.savings && (
              <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                Save {service.savings}
              </span>
            )}
          </div>
        </div>

        {/* Book Now button */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 ${
            service.popular
              ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-200 hover:shadow-blue-300'
              : 'bg-slate-900 hover:bg-blue-700 text-white'
          }`}
        >
          <MessageCircle className="w-4 h-4" />
          Book Now
        </a>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
            World-Class Dental{' '}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Treatments
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            All services are now available at special discounted prices. Book today and save big on
            your journey to a perfect smile.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.name} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-slate-500 mb-4">Not sure which service you need?</p>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-1 transition-all duration-200"
          >
            Book a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
