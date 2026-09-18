import SectionHeading from '../../components/SectionHeading'
import TrainingCourseCard from '../../components/TrainingCourseCard'
import { trainingCourses } from '../../data/trainingCourses'

export default function AvailableTraining() {
  return (
    <section id="available-training" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 scroll-mt-16">
      <SectionHeading title="Available Training" subtitle="Current and upcoming training programs." />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainingCourses.map((course) => (
          <TrainingCourseCard
            key={course.id}
            course={course}
            featuredHref={course.status === 'available' ? '#featured-course' : undefined}
          />
        ))}
      </div>
    </section>
  )
}
