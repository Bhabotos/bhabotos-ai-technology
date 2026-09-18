import SectionHeading from '../../components/SectionHeading'
import StepsFlow from '../../components/StepsFlow'

const STEPS = [
  { number: '01', title: 'Problem', description: 'Identify the operational or business problem.' },
  { number: '02', title: 'Architecture', description: 'Design the workflow and technology architecture.' },
  { number: '03', title: 'Implementation', description: 'Build and integrate the components.' },
  { number: '04', title: 'Testing', description: 'Validate functionality and edge cases.' },
  { number: '05', title: 'Deployment', description: 'Prepare the solution for practical use.' },
]

export default function HowProjectsAreBuilt() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <SectionHeading title="How Projects Are Built" />
      <StepsFlow steps={STEPS} />
    </section>
  )
}
