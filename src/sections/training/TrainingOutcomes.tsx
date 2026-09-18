import { Check } from 'lucide-react'
import SectionHeading from '../../components/SectionHeading'

const OUTCOMES = [
  'Build AI workflows',
  'Automate repetitive tasks',
  'Create n8n workflows',
  'Automate network operations',
  'Work with Python automation',
  'Use Ansible for infrastructure',
  'Build DevOps workflows',
  'Deploy practical projects',
]

export default function TrainingOutcomes() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <SectionHeading title="Training Outcomes" subtitle="Skills and project outcomes you can build toward." />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {OUTCOMES.map((outcome) => (
          <div key={outcome} className="flex items-start gap-3 rounded-xl border border-border bg-surface/60 p-4">
            <Check className="size-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
            <span className="text-sm text-text">{outcome}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
