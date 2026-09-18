import { ArrowUpRight } from 'lucide-react'
import type { ProjectShowcaseItem } from '../data/projectShowcase'

interface ProjectShowcaseCardProps {
  project: ProjectShowcaseItem
}

export default function ProjectShowcaseCard({ project }: ProjectShowcaseCardProps) {
  return (
    <div className="glass-panel rounded-2xl p-6 h-full flex flex-col shadow-card transition-colors duration-200 hover:border-accent-border">
      <span className="text-xs font-semibold uppercase tracking-wide text-accent">{project.category}</span>
      <h3 className="text-lg font-semibold text-heading mt-2">{project.title}</h3>
      <p className="text-sm text-text-muted mt-2 leading-relaxed">{project.description}</p>

      <div className="flex flex-col gap-2 mt-4 text-sm">
        <p className="text-text">
          <span className="text-heading font-medium">Problem: </span>
          {project.problem}
        </p>
        <p className="text-text">
          <span className="text-heading font-medium">Solution: </span>
          {project.solution}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.technology.map((tech) => (
          <span key={tech} className="text-xs font-medium text-text-muted border border-border rounded-full px-2.5 py-1">
            {tech}
          </span>
        ))}
      </div>

      <p className="text-sm text-text-muted mt-4 pt-4 border-t border-border grow">
        <span className="text-heading font-medium">Outcome: </span>
        {project.outcome}
      </p>

      <button
        type="button"
        className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent mt-5 self-start"
      >
        View Project
        <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      </button>
    </div>
  )
}
