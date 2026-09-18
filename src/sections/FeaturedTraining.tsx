import SectionHeading from '../components/SectionHeading'
import CourseCard from '../components/CourseCard'
import { featuredCourse } from '../data/courses'

export default function FeaturedTraining() {
  return (
    <section id="training" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 scroll-mt-16">
      <SectionHeading title="Featured Training" />
      <div className="mt-12">
        <CourseCard course={featuredCourse} ctaTo="/training" ctaLabel="View Course" />
      </div>
    </section>
  )
}
