import SectionHeading from '../../components/SectionHeading'
import ProjectCard from '../../components/ProjectCard'
import { solutionExamples } from '../../data/solutionExamples'

export default function ExampleSolutions() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <SectionHeading
        title="Example Solutions"
        subtitle="Example solution concepts illustrating the type of work we build."
      />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutionExamples.map((example) => (
          <ProjectCard key={example.id} project={example} />
        ))}
      </div>
    </section>
  )
}
