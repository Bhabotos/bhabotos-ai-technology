import { Antenna, Briefcase, Building2, RadioTower, ServerCog, Store } from 'lucide-react'
import SectionHeading from '../../components/SectionHeading'
import FeatureCard from '../../components/FeatureCard'

const AUDIENCE = [
  {
    icon: Antenna,
    title: 'ISP & NTTN',
    description: 'Network monitoring, alarm processing and reporting automation.',
  },
  {
    icon: RadioTower,
    title: 'Telecom & Network Operations',
    description: 'Automation for device checks, configuration and operational reporting.',
  },
  {
    icon: Building2,
    title: 'IT Companies',
    description: 'AI and automation solutions built into existing technical workflows.',
  },
  {
    icon: Store,
    title: 'SMEs',
    description: 'Practical automation for lead handling, reporting and daily operations.',
  },
  {
    icon: Briefcase,
    title: 'Service Businesses',
    description: 'Automated workflows for customer communication and business processes.',
  },
  {
    icon: ServerCog,
    title: 'Technical Operations Teams',
    description: 'Tooling and automation that reduces manual operational work.',
  },
]

export default function WhoWeHelp() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <SectionHeading title="Who We Help" />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {AUDIENCE.map((item) => (
          <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  )
}
