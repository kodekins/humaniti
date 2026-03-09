import Hero          from '@/components/sections/Hero'
import Marquee       from '@/components/sections/Marquee'
import ServicesPreview from '@/components/sections/ServicesPreview'
import Process       from '@/components/sections/Process'
import WorkPreview   from '@/components/sections/WorkPreview'
import CTABanner     from '@/components/sections/CTABanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServicesPreview />
      <Process />
      <WorkPreview />
      <CTABanner />
    </>
  )
}
