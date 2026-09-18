import { useState } from 'react'
import SectionHeading from '../../components/SectionHeading'
import ProjectShowcaseCard from '../../components/ProjectShowcaseCard'
import { PROJECT_CATEGORIES, projectShowcase, type ProjectCategory } from '../../data/projectShowcase'

const FILTERS: ('All' | ProjectCategory)[] = ['All', ...PROJECT_CATEGORIES]

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<(typeof FILTERS)[number]>('All')

  const visibleProjects =
    activeFilter === 'All' ? projectShowcase : projectShowcase.filter((project) => project.category === activeFilter)

  return (
    <section id="all-projects" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 scroll-mt-16">
      <SectionHeading title="All Projects" subtitle="Filter by category to explore specific areas of work." />

      <div className="mt-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter projects by category">
        {FILTERS.map((filter) => {
          const isActive = filter === activeFilter
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={isActive}
              className={`text-sm font-medium rounded-full px-4 py-2 border transition-colors duration-200 ${
                isActive
                  ? 'text-bg bg-gradient-to-r from-accent to-accent-2 border-transparent font-semibold'
                  : 'text-text border-border hover:border-accent-border hover:text-heading'
              }`}
            >
              {filter}
            </button>
          )
        })}
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((project) => (
          <ProjectShowcaseCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
