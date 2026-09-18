import SectionHeading from '../../components/SectionHeading'
import CourseCard from '../../components/CourseCard'
import { featuredCourse } from '../../data/courses'

export default function FeaturedCourseSection() {
  return (
    <section id="featured-course" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 scroll-mt-16">
      <SectionHeading title="Featured Course" subtitle="Learn the tools. Build the workflow. Automate real work." />
      <div className="mt-12">
        <CourseCard course={featuredCourse} />
      </div>
    </section>
  )
}
