import { Clock, Database, EyeOff, GitBranch, Repeat, TrendingUp, Unlink, Workflow } from 'lucide-react'
import SectionHeading from '../../components/SectionHeading'
import WorkflowVisual from '../../components/WorkflowVisual'

const BEFORE_NODES = [
  { icon: Repeat, label: 'Manual repetitive tasks' },
  { icon: Unlink, label: 'Disconnected systems' },
  { icon: Clock, label: 'Slow reporting' },
  { icon: EyeOff, label: 'Limited visibility' },
]

const AFTER_NODES = [
  { icon: Workflow, label: 'Automation' },
  { icon: GitBranch, label: 'Integration' },
  { icon: Database, label: 'Real-time information' },
  { icon: TrendingUp, label: 'Better operational workflow' },
]

export default function BusinessProblems() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <SectionHeading title="From Manual Work to Automated Work" />

      <div className="mt-12 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-text-muted mb-4">Before</p>
          <WorkflowVisual nodes={BEFORE_NODES} ariaLabel="Before: manual repetitive tasks lead to disconnected systems, slow reporting and limited visibility" />
        </div>
        <div>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">After</p>
          <WorkflowVisual nodes={AFTER_NODES} ariaLabel="After: automation leads to integration, real-time information and better operational workflow" />
        </div>
      </div>
    </section>
  )
}
