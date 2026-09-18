import { Check } from 'lucide-react'
import Button from './Button'
import type { TrainingCourseSummary } from '../data/trainingCourses'

interface TrainingCourseCardProps {
  course: TrainingCourseSummary
  featuredHref?: string
}

export default function TrainingCourseCard({ course, featuredHref }: TrainingCourseCardProps) {
  const isAvailable = course.status === 'available'
  const tags = [course.level, course.duration, course.format].filter(Boolean) as string[]

  return (
    <div className="glass-panel rounded-2xl p-6 h-full flex flex-col shadow-card">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-heading">{course.title}</h3>
        <span
          className={`shrink-0 text-xs font-semibold uppercase tracking-wide rounded-full px-2.5 py-1 border ${
            isAvailable ? 'text-accent border-accent-border bg-accent-soft' : 'text-text-muted border-border'
          }`}
        >
          {isAvailable ? 'Available' : 'Coming Soon'}
        </span>
      </div>

      <p className="text-sm text-text-muted mt-3 leading-relaxed grow">{course.description}</p>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span key={tag} className="text-xs font-medium text-text border border-border rounded-full px-2.5 py-1">
              {tag}
            </span>
          ))}
        </div>
      )}

      <ul className="flex flex-col gap-1.5 mt-4">
        {course.topics.map((topic) => (
          <li key={topic} className="flex items-center gap-2 text-xs text-text-muted">
            <Check className="size-3.5 text-accent shrink-0" aria-hidden="true" />
            {topic}
          </li>
        ))}
      </ul>

      <p className="text-xs text-text-muted mt-4">
        <span className="text-heading font-medium">Project outcome: </span>
        {course.projectOutcome}
      </p>

      <div className="mt-5 pt-5 border-t border-border flex items-center justify-between gap-3">
        {isAvailable ? (
          <span className="text-lg font-semibold text-gradient">{course.price}</span>
        ) : (
          <span className="text-xs text-text-muted">Price & schedule coming soon</span>
        )}

        {isAvailable && featuredHref && (
          <Button href={featuredHref} variant="secondary" size="md">
            View Course
          </Button>
        )}
      </div>
    </div>
  )
}
