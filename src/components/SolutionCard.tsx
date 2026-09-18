import { ArrowRight } from 'lucide-react'
import type { Solution } from '../data/solutions'

interface SolutionCardProps {
  solution: Solution
}

export default function SolutionCard({ solution }: SolutionCardProps) {
  const Icon = solution.icon

  return (
    <div className="group glass-panel rounded-2xl p-6 h-full flex flex-col shadow-card transition-colors duration-200 hover:border-accent-border">
      <div className="size-11 rounded-xl bg-accent-soft border border-accent-border flex items-center justify-center">
        <Icon className="size-5 text-accent" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-heading mt-4">{solution.title}</h3>
      <p className="text-sm text-text-muted mt-2 leading-relaxed grow">{solution.description}</p>
      <button
        type="button"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent mt-5 transition-transform duration-200 group-hover:gap-2.5"
      >
        Learn More
        <ArrowRight className="size-4" aria-hidden="true" />
      </button>
    </div>
  )
}
