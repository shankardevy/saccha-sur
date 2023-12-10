import Image from 'next/image'
import Hero from '@/app/components/hero'
import Testimonials from '@/app/components/testimonials'
import FAQ from '@/app/components/faq'
import Footer from '@/app/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
