import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Team from '@/components/Team'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import BookingForm from '@/components/BookingForm'
import Locations from '@/components/Locations'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Gallery />
      <Testimonials />
      <BookingForm />
      <Locations />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
