import type { ProjectStatus } from '../data/catalog'

// Status is always conveyed by the text label; colour is only a secondary cue.
const STYLES: Record<ProjectStatus, string> = {
  Completed: 'text-emerald-300 border-emerald-400/30 bg-emerald-400/10',
  Tested: 'text-sky-300 border-sky-400/30 bg-sky-400/10',
  'In Progress': 'text-amber-300 border-amber-400/30 bg-amber-400/10',
  'Proof of Concept': 'text-violet-300 border-violet-400/30 bg-violet-400/10',
  'Lab / Not Deployed': 'text-orange-300 border-orange-400/30 bg-orange-400/10',
  Archived: 'text-slate-300 border-slate-400/30 bg-slate-400/10',
}

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${STYLES[status]}`}
    >
      {status}
    </span>
  )
}
