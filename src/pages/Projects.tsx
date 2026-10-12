import { Search, X } from 'lucide-react'
import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import CatalogProjectCard from '../components/CatalogProjectCard'
import { CATEGORIES, STATUSES, projects, type CategoryId, type ProjectStatus } from '../data/catalog'
import { usePageMeta } from '../hooks/usePageMeta'

// Default ordering: featured first (in their set order), then by category, then title.
const categoryOrder = new Map<string, number>(CATEGORIES.map((c, i) => [c.id, i]))
const sorted = [...projects].sort((a, b) => {
  const fa = a.featured ?? 99
  const fb = b.featured ?? 99
  if (fa !== fb) return fa - fb
  const ca = categoryOrder.get(a.category)! - categoryOrder.get(b.category)!
  return ca !== 0 ? ca : a.title.localeCompare(b.title)
})

// Technology filter: tags used by at least two projects, most common first.
const techCounts = projects
  .flatMap((p) => p.tags)
  .reduce<Record<string, number>>((acc, t) => {
    acc[t] = (acc[t] ?? 0) + 1
    return acc
  }, {})
const TECH_FILTERS = Object.entries(techCounts)
  .filter(([, n]) => n >= 2)
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  .map(([t]) => t)

const chip = (active: boolean) =>
  `rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
    active ? 'border-accent-border bg-accent-soft text-accent' : 'border-border text-text hover:border-border-strong hover:text-heading'
  }`

const selectClass =
  'w-full rounded-lg border border-border-strong bg-surface px-3 py-2.5 text-sm text-heading focus-visible:outline-2 focus-visible:outline-accent'

export default function Projects() {
  usePageMeta(
    'Projects | Network Automation, DevOps & AI Agents | BHABOTOS',
    'Verified GitHub projects across network automation, DevOps and cloud, AI agents and RAG systems, each with an honest status label.',
    '/projects',
  )

  // Filter state lives in the URL so links, refresh and back/forward all work.
  const [params, setParams] = useSearchParams()
  const category = (params.get('category') as CategoryId | null) ?? ''
  const status = (params.get('status') as ProjectStatus | null) ?? ''
  const tech = params.get('tech') ?? ''
  const q = params.get('q') ?? ''

  const setParam = (key: string, value: string) => {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: key === 'q' })
  }
  const clear = () => setParams(new URLSearchParams())

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return sorted.filter((p) => {
      if (category && p.category !== category) return false
      if (status && p.status !== status) return false
      if (tech && !p.tags.includes(tech)) return false
      if (!needle) return true
      return [p.title, p.summary, ...p.tags, ...p.stack].join(' ').toLowerCase().includes(needle)
    })
  }, [category, status, tech, q])

  const hasFilters = Boolean(category || status || tech || q)

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8 sm:pt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Network → Automation → DevOps → AI</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-heading leading-tight max-w-3xl">All Projects</h1>
          <p className="mt-5 text-text max-w-2xl leading-relaxed">
            Public GitHub projects I have built and reviewed, grouped by discipline. Each one carries a status that states what has
            actually been run, from a mocked test suite to a lab that was never deployed. These are personal projects and labs, not
            production deployments for employers or customers.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20" aria-label="Project catalog">
        <div className="flex flex-col gap-5 border-y border-border py-6">
          <div className="relative max-w-md">
            <label htmlFor="project-search" className="sr-only">
              Search projects by name or technology
            </label>
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-text-muted" aria-hidden="true" />
            <input
              id="project-search"
              type="search"
              value={q}
              onChange={(e) => setParam('q', e.target.value)}
              placeholder="Search by name or technology"
              className="w-full rounded-lg border border-border-strong bg-surface pl-10 pr-3 py-2.5 text-sm text-heading placeholder:text-text-muted focus-visible:outline-2 focus-visible:outline-accent"
            />
          </div>

          <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
            <button type="button" aria-pressed={!category} onClick={() => setParam('category', '')} className={chip(!category)}>
              All
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                aria-pressed={category === c.id}
                onClick={() => setParam('category', category === c.id ? '' : c.id)}
                className={chip(category === c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
            <div>
              <label htmlFor="status-filter" className="block text-xs font-semibold uppercase tracking-wide text-text-muted mb-1.5">
                Status
              </label>
              <select id="status-filter" value={status} onChange={(e) => setParam('status', e.target.value)} className={selectClass}>
                <option value="">Any status</option>
                {STATUSES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="tech-filter" className="block text-xs font-semibold uppercase tracking-wide text-text-muted mb-1.5">
                Technology
              </label>
              <select id="tech-filter" value={tech} onChange={(e) => setParam('tech', e.target.value)} className={selectClass}>
                <option value="">Any technology</option>
                {TECH_FILTERS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6 mb-5">
          <p className="text-sm text-text-muted" role="status" aria-live="polite">
            Showing {filtered.length} of {projects.length} projects
          </p>
          {hasFilters && (
            <button
              type="button"
              onClick={clear}
              className="inline-flex items-center gap-1.5 text-sm text-accent rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <X className="size-4" aria-hidden="true" /> Clear filters
            </button>
          )}
        </div>

        {filtered.length > 0 ? (
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0">
            {filtered.map((p) => (
              <li key={p.slug}>
                <CatalogProjectCard project={p} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="glass-panel rounded-2xl p-10 text-center">
            <h2 className="text-lg font-semibold text-heading">No projects match these filters</h2>
            <p className="text-sm text-text-muted mt-2">Try a different search term or remove a filter.</p>
            <button
              type="button"
              onClick={clear}
              className="mt-5 rounded-lg border border-border-strong bg-surface px-4 py-2 text-sm font-medium text-heading hover:border-accent-border"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>
    </main>
  )
}
