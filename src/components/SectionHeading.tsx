interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <div className={`flex flex-col gap-3 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</span>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold text-heading">{title}</h2>
      {subtitle && <p className="text-text-muted text-base sm:text-lg">{subtitle}</p>}
    </div>
  )
}
