import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import BookingForm from '@/components/BookingForm'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <BookingForm />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
