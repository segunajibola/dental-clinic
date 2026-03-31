import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import BookingForm from '@/components/BookingForm'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Services & Pricing | All Smiles Dental Clinic — Lekki, Lagos',
  description:
    'Explore all dental services at All Smiles Dental Clinic with transparent pricing. Teeth whitening, braces, implants, veneers, root canal, and more — with special discounts up to 50% OFF.',
  keywords:
    'dental services Lagos, teeth whitening Lagos price, dental implants Lagos, braces Lekki, root canal Lagos, veneers Lagos pricing',
}

export default function ServicesPage() {
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
            Pricing & Treatments
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Our Services
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            Transparent pricing on all treatments — with special discounts up to 50% OFF.
          </p>
          <div className="inline-flex items-center gap-2 bg-red-500 text-white text-sm font-bold px-5 py-2.5 rounded-full mt-5 shadow-lg">
            🔥 Limited time discounts — Book before they expire!
          </div>
        </div>
      </section>

      <Services />
      <BookingForm />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
