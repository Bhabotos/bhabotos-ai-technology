import { ArrowRight } from 'lucide-react'
import type { TrainingCategory } from '../data/trainingCategories'

interface CategoryCardProps {
  category: TrainingCategory
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const Icon = category.icon

  return (
    <div className="group glass-panel rounded-2xl p-6 h-full flex flex-col shadow-card transition-colors duration-200 hover:border-accent-border">
      <div className="size-11 rounded-xl bg-accent-soft border border-accent-border flex items-center justify-center">
        <Icon className="size-5 text-accent" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-heading mt-4">{category.title}</h3>
      <p className="text-sm text-text-muted mt-2 leading-relaxed grow">{category.description}</p>

      <ul className="flex flex-wrap gap-2 mt-4">
        {category.skills.map((skill) => (
          <li key={skill} className="text-xs font-medium text-text border border-border rounded-full px-2.5 py-1">
            {skill}
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent mt-5 self-start transition-transform duration-200 group-hover:gap-2.5"
      >
        Explore
        <ArrowRight className="size-4" aria-hidden="true" />
      </button>
    </div>
  )
}
