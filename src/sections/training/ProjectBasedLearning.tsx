import SectionHeading from '../../components/SectionHeading'
import { trainingProjects } from '../../data/trainingProjects'

export default function ProjectBasedLearning() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <SectionHeading
        title="Learn by Building Real Projects"
        subtitle="Training focuses on practical implementation, not only theory."
      />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trainingProjects.map((project) => (
          <div key={project.id} className="rounded-2xl border border-border bg-surface/60 p-6 h-full flex flex-col">
            <h3 className="text-base font-semibold text-heading">{project.name}</h3>
            <p className="text-sm text-text-muted mt-2 leading-relaxed grow">{project.description}</p>

            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium text-text-muted border border-border rounded-full px-2 py-0.5"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-xs text-text-muted mt-4 pt-4 border-t border-border">
              <span className="text-heading font-medium">Outcome: </span>
              {project.outcome}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
