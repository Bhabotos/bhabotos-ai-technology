import { Check } from 'lucide-react'
import type { Course } from '../data/courses'
import Button from './Button'

interface CourseCardProps {
  course: Course
  ctaTo?: string
  ctaLabel?: string
}

export default function CourseCard({ course, ctaTo, ctaLabel = 'View Course' }: CourseCardProps) {
  const resolvedCtaTo = ctaTo ?? `/courses/${course.id}`

  return (
    <div className="glass-panel rounded-2xl p-6 sm:p-8 shadow-card w-full max-w-3xl mx-auto">
      <div className="flex flex-wrap items-start justify-between gap-4">
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
          <h3 className="text-xl sm:text-2xl font-semibold text-heading">{course.title}</h3>
        </div>
        <div className="text-right shrink-0">
          <p className="text-2xl sm:text-3xl font-semibold text-gradient">{course.price}</p>
          <p className="text-xs text-text-muted mt-1">one-time</p>
        </div>
      </div>

      <p className="text-text mt-4 leading-relaxed">{course.description}</p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 py-5 border-y border-border">
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

      <div className="mt-6">
        <p className="text-sm font-medium text-heading mb-3">What you'll learn</p>
        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
          {course.outcomes.map((outcome) => (
            <li key={outcome} className="flex items-start gap-2 text-sm text-text">
              <Check className="size-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
              {outcome}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <Button to={resolvedCtaTo} variant="primary" size="lg" className="w-full sm:w-auto">
          {ctaLabel}
        </Button>
      </div>
    </div>
  )
}
