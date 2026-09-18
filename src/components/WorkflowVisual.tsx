import type { LucideIcon } from 'lucide-react'

export interface WorkflowNode {
  icon: LucideIcon
  label: string
}

interface WorkflowVisualProps {
  nodes: WorkflowNode[]
  ariaLabel: string
}

export default function WorkflowVisual({ nodes, ariaLabel }: WorkflowVisualProps) {
  return (
    <div
      className="glass-panel rounded-2xl p-6 sm:p-8 w-full max-w-sm mx-auto animate-fade-in"
      style={{ animationDelay: '150ms' }}
      role="img"
      aria-label={ariaLabel}
    >
      <div className="flex flex-col items-stretch">
        {nodes.map((node, index) => (
          <div key={node.label} className="flex flex-col items-center">
            <div className="flex items-center gap-3 w-full rounded-xl border border-border-strong bg-surface px-4 py-3.5 shadow-card">
              <div className="size-9 rounded-lg bg-accent-soft border border-accent-border flex items-center justify-center shrink-0">
                <node.icon className="size-4.5 text-accent" aria-hidden="true" />
              </div>
              <span className="text-sm font-medium text-heading">{node.label}</span>
            </div>

            {index < nodes.length - 1 && (
              <div className="relative h-8 w-px overflow-hidden bg-border">
                <span className="absolute inset-x-0 top-0 block h-3 w-px bg-gradient-to-b from-accent to-accent-2 animate-flow" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
