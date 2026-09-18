import SectionHeading from '../../components/SectionHeading'

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

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
        {STEPS.map((step, index) => (
          <div key={step.number} className="relative flex flex-col items-start lg:items-center lg:text-center lg:px-6">
            {index < STEPS.length - 1 && (
              <div className="hidden lg:block absolute top-7 left-1/2 w-full h-px bg-border" aria-hidden="true" />
            )}
            <div className="relative z-10 size-14 rounded-full bg-surface border border-border-strong flex items-center justify-center text-lg font-semibold text-gradient shrink-0">
              {step.number}
            </div>
            <h3 className="text-lg font-semibold text-heading mt-5">{step.title}</h3>
            <p className="text-sm text-text-muted mt-2 leading-relaxed max-w-[220px]">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
