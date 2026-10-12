// Generic workflow diagram rendered from an ordered list of steps taken from a project's README.
export default function FlowDiagram({ title, steps }: { title: string; steps: string[] }) {
  return (
    <figure className="glass-panel rounded-2xl p-5 sm:p-6">
      <figcaption className="text-xs font-semibold uppercase tracking-wide text-text-muted mb-4">
        Workflow diagram · {title}
      </figcaption>
      <ol className="flex flex-col md:flex-row md:flex-wrap gap-3 md:gap-y-4 list-none p-0 m-0">
        {steps.map((step, i) => (
          <li key={step} className="flex items-center gap-3 md:contents">
            <span className="flex items-center gap-3">
              <span
                className="shrink-0 size-6 rounded-full border border-accent-border bg-accent-soft text-accent text-xs font-semibold flex items-center justify-center"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <span className="rounded-lg border border-border-strong bg-surface px-3 py-2 text-sm text-heading">{step}</span>
              {i < steps.length - 1 && (
                <span className="hidden md:inline text-text-muted" aria-hidden="true">
                  →
                </span>
              )}
            </span>
          </li>
        ))}
      </ol>
    </figure>
  )
}
