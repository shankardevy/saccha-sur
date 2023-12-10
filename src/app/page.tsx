import Image from 'next/image'
import Hero from '@/app/components/hero'
import Testimonials from '@/app/components/testimonials'
import Community from '@/app/components/community'
import FAQ from '@/app/components/faq'
import Footer from '@/app/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Testimonials />
      {/* <Community /> */}
      <FAQ />
      <Footer />
    </main>
  )
}
