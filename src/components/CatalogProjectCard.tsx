import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categoryLabel, type Project } from '../data/catalog'
import StatusBadge from './StatusBadge'
import TechTag from './TechTag'

export default function CatalogProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <article className="glass-panel rounded-2xl p-6 h-full flex flex-col shadow-card transition-colors duration-200 hover:border-accent-border focus-within:border-accent-border">
      <span className="text-xs font-semibold uppercase tracking-wide text-accent">{categoryLabel(project.category)}</span>
      <h3 className="text-lg font-semibold text-heading mt-3">
        <Link to={`/projects/${project.slug}`} className="hover:text-accent transition-colors duration-200">
          {project.title}
        </Link>
      </h3>
      <div className="mt-2">
        <StatusBadge status={project.status} />
      </div>
      <p className="text-sm text-text-muted mt-3 leading-relaxed grow">{project.summary}</p>
      <ul className="flex flex-wrap gap-2 mt-4 list-none p-0" aria-label="Technologies">
        {project.tags.slice(0, compact ? 4 : 6).map((t) => (
          <li key={t}>
            <TechTag label={t} />
          </li>
        ))}
      </ul>
      <div className="mt-5 flex items-center gap-4 text-sm font-medium">
        <Link
          to={`/projects/${project.slug}`}
          className="group inline-flex items-center gap-1.5 text-accent rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          View details
          <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </Link>
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted hover:text-heading rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          GitHub<span className="sr-only"> repository for {project.title} (opens in a new tab)</span>
        </a>
      </div>
    </article>
  )
}
