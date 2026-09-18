import SectionHeading from '../../components/SectionHeading'
import StepsFlow from '../../components/StepsFlow'

const STEPS = [
  { number: '01', title: 'Discover', description: 'Understand the business or operational problem.' },
  { number: '02', title: 'Design', description: 'Design the workflow and technical architecture.' },
  { number: '03', title: 'Build', description: 'Develop and integrate the solution.' },
  { number: '04', title: 'Deploy', description: 'Test and deploy the solution.' },
  { number: '05', title: 'Improve', description: 'Monitor and improve the workflow over time.' },
]

export default function HowWeWork() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <SectionHeading title="How We Work" />
      <StepsFlow steps={STEPS} />
    </section>
  )
}
