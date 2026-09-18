import type { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface/60 p-6 h-full">
      <div className="size-10 rounded-lg bg-accent-soft border border-accent-border flex items-center justify-center">
        <Icon className="size-5 text-accent" aria-hidden="true" />
      </div>
      <h3 className="text-base font-semibold text-heading mt-4">{title}</h3>
      <p className="text-sm text-text-muted mt-2 leading-relaxed">{description}</p>
    </div>
  )
}
