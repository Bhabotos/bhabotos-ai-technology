import { Database, LayoutDashboard, Router, Terminal, Waypoints } from 'lucide-react'
import SectionHeading from '../../components/SectionHeading'
import WorkflowVisual from '../../components/WorkflowVisual'

const ARCHITECTURE_NODES = [
  { icon: Router, label: 'Nokia NSP' },
  { icon: Waypoints, label: 'Kafka' },
  { icon: Terminal, label: 'Python' },
  { icon: Database, label: 'PostgreSQL' },
  { icon: LayoutDashboard, label: 'Operational Dashboard' },
]

export default function FeaturedProject() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <SectionHeading eyebrow="Featured Project" title="Network Alarm Automation" />

      <div className="mt-12 grid lg:grid-cols-2 gap-10 items-center">
        <WorkflowVisual
          nodes={ARCHITECTURE_NODES}
          ariaLabel="Architecture: Nokia NSP leads to Kafka, which leads to Python, which leads to PostgreSQL, which leads to an operational dashboard"
        />

        <div className="flex flex-col items-start text-left">
          <p className="text-text leading-relaxed">
            Network alarms are streamed from Nokia NSP through Kafka, which decouples alarm ingestion from
            processing. A Python consumer processes and stores alarm data in PostgreSQL, giving an operational
            dashboard structured, queryable data to report on.
          </p>
          <p className="text-text-muted leading-relaxed mt-4">
            This separation of ingestion, processing and storage keeps the pipeline reliable and makes it easier to
            extend reporting or add new consumers without disrupting alarm collection.
          </p>
        </div>
      </div>
    </section>
  )
}
