import SectionHeading from '../../components/SectionHeading'
import StepsFlow from '../../components/StepsFlow'

const STEPS = [
  { number: '01', title: 'Learn', description: 'Understand the technology and concepts.' },
  { number: '02', title: 'Build', description: 'Create a practical project.' },
  { number: '03', title: 'Automate', description: 'Connect tools and automate workflows.' },
  { number: '04', title: 'Deploy', description: 'Deploy and use the solution in a real environment.' },
]

export default function LearningApproach() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <SectionHeading title="Learning Approach" subtitle="A practical, project-driven path from concept to deployment." />
      <StepsFlow steps={STEPS} />
    </section>
  )
}
