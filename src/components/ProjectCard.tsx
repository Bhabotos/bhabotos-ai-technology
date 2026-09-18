import { ArrowUpRight, Terminal } from 'lucide-react'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="glass-panel rounded-2xl overflow-hidden flex flex-col shadow-card h-full transition-colors duration-200 hover:border-accent-border">
      <div className="bg-grid relative h-32 sm:h-36 bg-bg-elevated border-b border-border flex items-center justify-center">
        <div className="size-11 rounded-xl bg-surface border border-border-strong flex items-center justify-center">
          <Terminal className="size-5 text-accent" aria-hidden="true" />
        </div>
      </div>

      <div className="p-6 flex flex-col grow">
        <h3 className="text-lg font-semibold text-heading">{project.name}</h3>
        <p className="text-sm text-text-muted mt-2 leading-relaxed grow">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium text-text-muted border border-border rounded-full px-2.5 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          type="button"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent mt-5 self-start"
        >
          View Project
          <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
