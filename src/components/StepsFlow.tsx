export interface Step {
  number: string
  title: string
  description: string
}

interface StepsFlowProps {
  steps: Step[]
}

const COLS: Record<number, string> = {
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
}

export default function StepsFlow({ steps }: StepsFlowProps) {
  return (
    <div className={`mt-14 grid sm:grid-cols-2 ${COLS[steps.length] ?? 'lg:grid-cols-4'} gap-10 lg:gap-0`}>
      {steps.map((step, index) => (
        <div key={step.number} className="relative flex flex-col items-start lg:items-center lg:text-center lg:px-6">
          {index < steps.length - 1 && (
            <div className="hidden lg:block absolute top-7 left-1/2 w-full h-px bg-border" aria-hidden="true" />
          )}
          <div className="relative z-10 size-14 rounded-full bg-surface border border-border-strong flex items-center justify-center text-lg font-semibold text-gradient shrink-0">
            {step.number}
          </div>
          <h3 className="text-lg font-semibold text-heading mt-5">{step.title}</h3>
          <p className="text-sm text-text-muted mt-2 leading-relaxed max-w-[220px]">{step.description}</p>
        </div>
      ))}
    </div>
  )
}
