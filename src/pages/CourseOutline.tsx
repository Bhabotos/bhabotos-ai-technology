import { ArrowLeft, Check } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import { AccordionItem } from '../components/Accordion'
import { featuredCourse, type Course } from '../data/courses'
import { courseOutlines } from '../data/courseOutlines'

const COURSES: Record<string, Course> = {
  [featuredCourse.id]: featuredCourse,
}

export default function CourseOutline() {
  const { courseId } = useParams<{ courseId: string }>()
  const course = courseId ? COURSES[courseId] : undefined
  const outline = courseId ? courseOutlines[courseId] : undefined

  usePageMeta(
    course
      ? `BHABOTOS AI & TECHNOLOGY | ${course.title}`
      : 'BHABOTOS AI & TECHNOLOGY | Course Not Found',
    course ? course.description : 'The requested course could not be found.',
  )

  if (!course || !outline) {
    return (
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-3xl font-semibold text-heading">Course Not Found</h1>
        <p className="text-text-muted mt-4">The course you&apos;re looking for doesn&apos;t exist or may have been moved.</p>
        <div className="mt-8">
          <Button to="/training" variant="primary" size="lg">
            Back to Courses
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <section className="relative overflow-hidden scroll-mt-16">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" aria-hidden="true" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Button to="/training" variant="ghost" size="md" className="mb-8 -ml-3">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to Courses
          </Button>

          <div className="glass-panel rounded-2xl p-6 sm:p-10 shadow-card">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {[course.level, course.format].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-text-muted border border-border rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-3xl sm:text-4xl font-semibold text-heading">{course.title}</h1>
                <p className="text-text mt-4 leading-relaxed max-w-2xl">{course.description}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-2xl sm:text-3xl font-semibold text-gradient">{course.price}</p>
                <p className="text-xs text-text-muted mt-1">one-time</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-5 border-t border-border">
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wide">Duration</p>
                <p className="text-sm text-heading font-medium mt-1">{course.duration}</p>
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wide">Classes</p>
                <p className="text-sm text-heading font-medium mt-1">{course.classes}</p>
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wide">Level</p>
                <p className="text-sm text-heading font-medium mt-1">{course.level}</p>
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wide">Format</p>
                <p className="text-sm text-heading font-medium mt-1">{course.format}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <SectionHeading align="left" title="Course Outline" subtitle="Four weeks, eight live classes, one real project." />
        <div className="mt-10 flex flex-col gap-4">
          {outline.weeks.map((week, index) => (
            <AccordionItem key={week.title} title={week.title} defaultOpen={index === 0}>
              <div className="grid sm:grid-cols-2 gap-6">
                {week.classes.map((courseClass) => (
                  <div key={courseClass.title}>
                    <h4 className="text-sm font-semibold text-heading">{courseClass.title}</h4>
                    <ul className="mt-3 flex flex-col gap-2">
                      {courseClass.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2 text-sm text-text-muted">
                          <Check className="size-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </AccordionItem>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <SectionHeading align="left" title="What You'll Learn" />
        <div className="mt-10 glass-panel rounded-2xl p-6 sm:p-10">
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {outline.whatYoullLearn.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm sm:text-base text-text">
                <span className="size-6 rounded-full bg-accent-soft border border-accent-border flex items-center justify-center shrink-0">
                  <Check className="size-3.5 text-accent" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid sm:grid-cols-2 gap-10">
          <div>
            <SectionHeading align="left" title="Who This Course Is For" />
            <ul className="mt-6 flex flex-col gap-3">
              {outline.whoThisIsFor.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text">
                  <Check className="size-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading align="left" title="Course Format" />
            <ul className="mt-6 flex flex-col gap-3">
              {outline.courseFormat.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text">
                  <Check className="size-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="glass-panel bg-grid relative overflow-hidden rounded-3xl px-6 py-14 sm:px-12 sm:py-16 text-center">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-accent-soft),_transparent_70%)]"
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-center gap-4">
            <h2 className="text-3xl sm:text-4xl font-semibold text-heading max-w-2xl">
              Ready to start learning AI & Automation?
            </h2>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl sm:text-4xl font-semibold text-gradient">{course.price}</span>
              <span className="text-sm text-text-muted">one-time</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Enroll Now
              </Button>
              <Button to="/training" variant="secondary" size="lg" className="w-full sm:w-auto">
                Back to Courses
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
