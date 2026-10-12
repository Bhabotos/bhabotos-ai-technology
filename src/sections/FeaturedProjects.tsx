import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import CatalogProjectCard from '../components/CatalogProjectCard'
import SectionHeading from '../components/SectionHeading'
import { featuredProjects } from '../data/catalog'

export default function FeaturedProjects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 scroll-mt-16">
      <SectionHeading
        eyebrow="Network → Automation → DevOps → AI"
        title="Featured Projects"
        subtitle="Six public GitHub projects, each labelled with what has actually been tested or deployed."
      />
      <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0">
        {featuredProjects.map((p) => (
          <li key={p.slug}>
            <CatalogProjectCard project={p} compact />
          </li>
        ))}
      </ul>
      <div className="mt-10 flex justify-center">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 rounded-lg border border-border-strong bg-surface px-5 py-2.5 text-sm font-medium text-heading hover:border-accent-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          View all projects
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
