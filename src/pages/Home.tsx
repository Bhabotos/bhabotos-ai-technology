import { usePageMeta } from '../hooks/usePageMeta'
import Hero from '../sections/Hero'
import TrustStrip from '../sections/TrustStrip'
import WhatWeDo from '../sections/WhatWeDo'
import FeaturedTraining from '../sections/FeaturedTraining'
import Solutions from '../sections/Solutions'
import WhyUs from '../sections/WhyUs'
import FeaturedProjects from '../sections/FeaturedProjects'
import AboutPreview from '../sections/AboutPreview'
import FinalCTA from '../sections/FinalCTA'

export default function Home() {
  usePageMeta(
    'BHABOTOS AI & TECHNOLOGY | AI, Automation, Network & DevOps',
    'Practical AI, automation, network and DevOps training and technology solutions for professionals and businesses.',
  )

  return (
    <main>
      <Hero />
      <TrustStrip />
      <WhatWeDo />
      <FeaturedTraining />
      <Solutions />
      <WhyUs />
      <FeaturedProjects />
      <AboutPreview />
      <FinalCTA />
    </main>
  )
}
