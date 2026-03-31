'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Phone, User, Stethoscope, CheckCircle, MessageCircle, MapPin } from 'lucide-react'

const WA_NUMBER = '2348183088375'

const servicesList = [
  'Teeth Whitening',
  'Scaling & Polishing',
  'Tooth-Colored Filling',
  'Airflow',
  'Crown',
  'Dentures',
  'Root Canal',
  'Dental Implants',
  'Braces',
  'Invisalign Veneers',
  'Snap-on Veneers',
  'Routine Extraction',
  'Surgical Extraction',
  'Free Consultation',
  'Emergency Dental Care',
]

const timeSlots = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
  '4:00 PM', '5:00 PM', '6:00 PM',
]

const branches = ['Oniru (Lekki)', 'Chevron']

interface FormData {
  name: string
  phone: string
  service: string
  branch: string
  date: string
  time: string
  message: string
}

export default function BookingForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    service: '',
    branch: '',
    date: '',
    time: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validate = () => {
    const errs: Partial<FormData> = {}
    if (!form.name.trim()) errs.name = 'Full name is required'
    if (!form.phone.trim() || !/^[0-9+\s\-]{9,15}$/.test(form.phone))
      errs.phone = 'Enter a valid phone number'
    if (!form.service) errs.service = 'Please select a service'
    if (!form.date) errs.date = 'Please select a date'
    return errs
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setLoading(true)

    const msg = encodeURIComponent(
      `Hello All Smiles Dental Clinic! I would like to book an appointment.\n\n` +
        `👤 Name: ${form.name}\n` +
        `📞 Phone: ${form.phone}\n` +
        `🦷 Service: ${form.service}\n` +
        `📍 Branch: ${form.branch || 'Any branch'}\n` +
        `📅 Date: ${form.date}${form.time ? ` at ${form.time}` : ''}\n` +
        `${form.message ? `💬 Notes: ${form.message}` : ''}\n\n` +
        `Please confirm my appointment. Thank you!`
    )

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank')
    }, 800)
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <section
      id="booking"
      className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left — info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-white/15 text-white text-sm font-semibold px-4 py-2 rounded-full mb-5 border border-white/20">
              Book an Appointment
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
              Ready for Your Perfect Smile?
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Fill in the form and we will reach out within minutes. Or book instantly via
              WhatsApp — available at both our Oniru and Chevron branches.
            </p>

            {[
              {
                step: '01',
                title: 'Fill the Form',
                desc: 'Enter your name, phone, service, branch and preferred date.',
              },
              {
                step: '02',
                title: 'We Confirm',
                desc: 'Our team will call or WhatsApp you within 30 minutes.',
              },
              {
                step: '03',
                title: 'Come In & Smile',
                desc: 'Visit your chosen branch for a comfortable, professional treatment.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-sky-300 font-black text-sm flex-shrink-0">
                  {step}
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{title}</h4>
                  <p className="text-blue-200 text-sm">{desc}</p>
                </div>
              </div>
            ))}

            {/* Branch indicators */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { branch: 'Oniru Branch', area: 'Lekki Phase 1' },
                { branch: 'Chevron Branch', area: 'Chevron Drive, Lekki' },
              ].map(({ branch, area }) => (
                <div
                  key={branch}
                  className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl p-3"
                >
                  <MapPin className="w-4 h-4 text-sky-300 flex-shrink-0" />
                  <div>
                    <div className="text-white text-xs font-semibold">{branch}</div>
                    <div className="text-blue-200 text-xs">{area}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hello All Smiles Dental Clinic! I would like to book a dental appointment.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              Book Directly via WhatsApp
            </a>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Booking Sent!</h3>
                  <p className="text-slate-500 mb-6">
                    WhatsApp has been opened with your booking details. Our team will confirm
                    your appointment shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setForm({
                        name: '', phone: '', service: '', branch: '',
                        date: '', time: '', message: '',
                      })
                    }}
                    className="text-blue-600 font-medium hover:underline text-sm"
                  >
                    Book Another Appointment
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <h3 className="text-xl font-black text-slate-900 mb-1">Book Your Appointment</h3>
                  <p className="text-slate-400 text-sm mb-4">Fields marked * are required.</p>

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Adaeze Okafor"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-slate-900 text-sm outline-none transition-all focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 ${
                          errors.name ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-slate-50 focus:bg-white'
                        }`}
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="e.g. 08012345678"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-slate-900 text-sm outline-none transition-all focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 ${
                          errors.phone ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-slate-50 focus:bg-white'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Service Required *</label>
                    <div className="relative">
                      <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-slate-900 text-sm outline-none appearance-none transition-all focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 ${
                          errors.service ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-slate-50 focus:bg-white'
                        }`}
                      >
                        <option value="">Select a service...</option>
                        {servicesList.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                  </div>

                  {/* Branch */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Preferred Branch</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      <select
                        name="branch"
                        value={form.branch}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm outline-none appearance-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white"
                      >
                        <option value="">Any branch</option>
                        {branches.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Date *</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        <input
                          type="date"
                          name="date"
                          value={form.date}
                          onChange={handleChange}
                          min={today}
                          className={`w-full pl-10 pr-2 py-3 rounded-xl border text-slate-900 text-sm outline-none transition-all focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 ${
                            errors.date ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-slate-50 focus:bg-white'
                          }`}
                        />
                      </div>
                      {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Time</label>
                      <select
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        className="w-full px-3 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm outline-none appearance-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white"
                      >
                        <option value="">Any time</option>
                        {timeSlots.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Additional Notes (optional)</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any specific concerns or requests..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm outline-none resize-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-4 h-4" />
                        Book via WhatsApp
                      </>
                    )}
                  </button>

                  <p className="text-slate-400 text-xs text-center">
                    Clicking &quot;Book&quot; opens WhatsApp with your details pre-filled.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
