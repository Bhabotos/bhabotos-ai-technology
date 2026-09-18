import { FolderKanban, Radio, Target, Wrench } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import FeatureCard from '../components/FeatureCard'

const REASONS = [
  {
    icon: FolderKanban,
    title: 'Practical Projects',
    description: 'Every concept is tied to a real, buildable project rather than theory alone.',
  },
  {
    icon: Radio,
    title: 'Live Training',
    description: 'Live, instructor-led classes with direct interaction and feedback.',
  },
  {
    icon: Target,
    title: 'Real-World Use Cases',
    description: 'Content grounded in real automation, network and DevOps scenarios.',
  },
  {
    icon: Wrench,
    title: 'Hands-On Learning',
    description: 'Build, run and troubleshoot tools yourself instead of just watching.',
  },
]

export default function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <SectionHeading title="Why Learn & Build With Us" />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {REASONS.map((reason) => (
          <FeatureCard key={reason.title} icon={reason.icon} title={reason.title} description={reason.description} />
        ))}
      </div>
    </section>
  )
}
