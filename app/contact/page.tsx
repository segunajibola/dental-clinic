import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Locations from '@/components/Locations'
import Contact from '@/components/Contact'
import BookingForm from '@/components/BookingForm'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Contact & Locations | All Smiles Dental Clinic — Lekki, Lagos',
  description:
    'Find All Smiles Dental Clinic near you. Two branches in Lekki, Lagos — Oniru (7 T.K Kuboye Street) and Chevron (Talea Mall, Chevron Drive). Call 09169892921 or WhatsApp us.',
  keywords:
    'All Smiles Dental Clinic location, dental clinic Oniru Lekki, dental clinic Chevron Lagos, dentist near me Lekki',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Page hero banner */}
      <section
        className="pt-32 pb-16 text-center"
        style={{
          background:
            'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #1d4ed8 100%)',
        }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-xs font-semibold px-4 py-2 rounded-full mb-4 uppercase tracking-widest">
            Find Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Contact & Locations
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            Two branches in Lekki — Oniru and Chevron. We&apos;re always happy to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <a
              href="tel:+2349169892921"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-blue-50 transition-all text-sm"
            >
              📞 09169892921
            </a>
            <a
              href="https://wa.me/2348183088375?text=Hello%20All%20Smiles%20Dental%20Clinic!%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all text-sm"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Locations />
      <Contact />
      <section id="booking">
        <BookingForm />
      </section>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
