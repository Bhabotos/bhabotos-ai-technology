import SectionHeading from '../../components/SectionHeading'
import CategoryCard from '../../components/CategoryCard'
import { trainingCategories } from '../../data/trainingCategories'

export default function TrainingCategories() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <SectionHeading title="Training Categories" subtitle="Focused technology tracks built around real, practical skills." />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trainingCategories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  )
}
