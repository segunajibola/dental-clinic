import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Team from '@/components/Team'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'About Us | All Smiles Dental Clinic — Lekki, Lagos',
  description:
    'Learn about All Smiles Dental Clinic — established 2016 in Lekki, Lagos. Meet our expert dental team and discover why thousands of patients trust us for world-class dental care.',
  keywords:
    'about All Smiles Dental Clinic, dentists Lekki Lagos, dental team Lagos, orthodontist Lekki',
}

export default function AboutPage() {
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
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            About All Smiles
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            Established in 2016, putting a smile on your face every single day.
          </p>
        </div>
      </section>

      <About />
      <Team />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
