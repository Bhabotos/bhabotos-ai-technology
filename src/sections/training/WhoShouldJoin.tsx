import { Boxes, Cloud, GraduationCap, Network, Router, ServerCog, UserCog, Users } from 'lucide-react'
import SectionHeading from '../../components/SectionHeading'
import FeatureCard from '../../components/FeatureCard'

const AUDIENCE = [
  {
    icon: Router,
    title: 'Network Engineers',
    description: 'Build automation skills on top of existing network expertise.',
  },
  {
    icon: ServerCog,
    title: 'IT Professionals',
    description: 'Apply AI and automation to everyday IT operations.',
  },
  {
    icon: Cloud,
    title: 'DevOps Engineers',
    description: 'Extend DevOps workflows with practical AI and automation.',
  },
  {
    icon: UserCog,
    title: 'System Administrators',
    description: 'Automate repetitive administration and infrastructure tasks.',
  },
  {
    icon: Boxes,
    title: 'Automation Engineers',
    description: 'Deepen hands-on automation and workflow-building skills.',
  },
  {
    icon: GraduationCap,
    title: 'Students & Career Starters',
    description: 'Build a practical, project-based technology foundation.',
  },
  {
    icon: Users,
    title: 'Working Professionals',
    description: 'Learn in a live, structured format alongside your work.',
  },
  {
    icon: Network,
    title: 'Technical Teams',
    description: 'Upskill teams together on shared automation practices.',
  },
]

export default function WhoShouldJoin() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <SectionHeading title="Who Should Join?" />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {AUDIENCE.map((item) => (
          <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  )
}
