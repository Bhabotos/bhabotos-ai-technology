import type { ReactNode } from 'react'

interface CTASectionProps {
  id?: string
  heading: string
  description: string
  children: ReactNode
}

export default function CTASection({ id, heading, description, children }: CTASectionProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="glass-panel bg-grid relative overflow-hidden rounded-3xl px-6 py-14 sm:px-12 sm:py-16 text-center">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-accent-soft),_transparent_70%)]"
          aria-hidden="true"
        />
        <div className="relative flex flex-col items-center gap-4">
          <h2 className="text-3xl sm:text-4xl font-semibold text-heading max-w-2xl">{heading}</h2>
          <p className="text-text-muted text-base sm:text-lg max-w-xl">{description}</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full sm:w-auto">{children}</div>
        </div>
      </div>
    </section>
  )
}
