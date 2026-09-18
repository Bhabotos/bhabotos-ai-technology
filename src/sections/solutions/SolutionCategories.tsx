import SectionHeading from '../../components/SectionHeading'
import CategoryCard from '../../components/CategoryCard'
import { solutionCategories } from '../../data/solutionCategories'

export default function SolutionCategories() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <SectionHeading title="Solutions We Build" subtitle="Practical automation and AI solutions across six focus areas." />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutionCategories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  )
}
