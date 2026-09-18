import { Database, GitBranch, TrendingUp, Workflow } from 'lucide-react'
import Button from '../../components/Button'
import WorkflowVisual from '../../components/WorkflowVisual'

const FLOW_NODES = [
  { icon: Workflow, label: 'Automation' },
  { icon: GitBranch, label: 'Integration' },
  { icon: Database, label: 'Real-Time Data' },
  { icon: TrendingUp, label: 'Better Workflow' },
]

export default function SolutionsHero() {
  return (
    <section className="relative overflow-hidden scroll-mt-16">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          <div className="flex flex-col items-start text-left animate-fade-up">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              AI • AUTOMATION • NETWORK • DEVOPS
            </span>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold text-heading leading-[1.08] tracking-tight">
              Build & Automate
              <br />
              <span className="text-gradient">Real Work</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-text max-w-xl leading-relaxed">
              We design practical AI, automation, network and DevOps solutions that connect systems, automate
              repetitive processes and improve operational workflows.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button to="/#contact" variant="primary" size="lg">
                Discuss Your Requirement
              </Button>
              <Button to="/projects" variant="secondary" size="lg">
                View Projects
              </Button>
            </div>
          </div>

          <WorkflowVisual
            nodes={FLOW_NODES}
            ariaLabel="Workflow: Automation leads to Integration, which leads to Real-Time Data, which leads to Better Workflow"
          />
        </div>
      </div>
    </section>
  )
}
