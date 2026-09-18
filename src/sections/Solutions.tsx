import SectionHeading from '../components/SectionHeading'
import SolutionCard from '../components/SolutionCard'
import { solutions } from '../data/solutions'

export default function Solutions() {
  return (
    <section id="solutions" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 scroll-mt-16">
      <SectionHeading title="AI & Technology Solutions" />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((solution) => (
          <SolutionCard key={solution.id} solution={solution} />
        ))}
      </div>
    </section>
  )
}
