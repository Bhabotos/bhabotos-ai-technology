import { ArrowLeft, ExternalLink, GitBranch } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import FlowDiagram from '../components/FlowDiagram'
import StatusBadge from '../components/StatusBadge'
import TechTag from '../components/TechTag'
import { categoryLabel, getProject } from '../data/catalog'
import { usePageMeta } from '../hooks/usePageMeta'
import NotFound from './NotFound'

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section className="mt-12" aria-labelledby={id}>
      <h2 id={id} className="text-xl font-semibold text-heading">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

const bullets = 'list-disc pl-5 space-y-2 text-text leading-relaxed marker:text-accent'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined

  usePageMeta(
    project ? `${project.title} | Projects | BHABOTOS` : 'Project not found | BHABOTOS',
    project ? project.summary : 'The requested project could not be found.',
    project ? `/projects/${project.slug}` : undefined,
  )

  if (!project) return <NotFound />

  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <Link
        to="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-heading rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <ArrowLeft className="size-4" aria-hidden="true" /> All Projects
      </Link>

      <header className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{categoryLabel(project.category)}</p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-semibold text-heading leading-tight">{project.title}</h1>
        <p className="mt-4 text-lg text-text leading-relaxed">{project.summary}</p>

        <div className="mt-6 glass-panel rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3">
          <StatusBadge status={project.status} />
          <p className="text-sm text-text">{project.statusNote}</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-surface px-4 py-2.5 text-sm font-medium text-heading hover:border-accent-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <GitBranch className="size-4" aria-hidden="true" /> View on GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-2 px-4 py-2.5 text-sm font-semibold text-bg hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <ExternalLink className="size-4" aria-hidden="true" /> Live demo
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
        </div>
      </header>

      <Section id="problem" title="Problem and use case">
        <p className="text-text leading-relaxed">{project.problem}</p>
      </Section>

      <Section id="functionality" title="Implemented functionality">
        <ul className={bullets}>
          {project.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </Section>

      {project.flow && (
        <Section id="architecture" title="Architecture and workflow">
          <FlowDiagram title={project.flow.title} steps={project.flow.steps} />
        </Section>
      )}

      {project.visuals && project.visuals.length > 0 && (
        <Section id="visuals" title="Screenshots and diagrams">
          <div className="grid gap-6">
            {project.visuals.map((v) => (
              <figure key={v.src} className="glass-panel rounded-2xl p-3">
                <img
                  src={v.src}
                  alt={v.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full max-h-[640px] object-contain rounded-lg bg-white"
                />
                <figcaption className="text-xs text-text-muted mt-3 px-1">{v.caption}</figcaption>
              </figure>
            ))}
          </div>
        </Section>
      )}

      <Section id="stack" title="Technology stack">
        <ul className="flex flex-wrap gap-2 list-none p-0" aria-label="Technology stack">
          {project.stack.map((t) => (
            <li key={t}>
              <TechTag label={t} />
            </li>
          ))}
        </ul>
      </Section>

      {project.limitations.length > 0 && (
        <Section id="limitations" title="Limitations and current stage">
          <ul className={bullets}>
            {project.limitations.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </Section>
      )}

      <Section id="links" title="Repository and documentation">
        <ul className="space-y-2 text-sm list-none p-0">
          <li>
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              GitHub repository
            </a>
          </li>
          {project.docs?.map((d) => (
            <li key={d.url}>
              <a href={d.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                {d.label}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <div className="mt-14 pt-8 border-t border-border">
        <Link to="/projects" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
          <ArrowLeft className="size-4" aria-hidden="true" /> Back to All Projects
        </Link>
      </div>
    </main>
  )
}
