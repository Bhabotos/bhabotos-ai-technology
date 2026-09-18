import { BookOpen, Hammer, Rocket, Workflow } from 'lucide-react'
import Button from '../../components/Button'
import WorkflowVisual from '../../components/WorkflowVisual'

const FLOW_NODES = [
  { icon: BookOpen, label: 'Learn' },
  { icon: Hammer, label: 'Build' },
  { icon: Workflow, label: 'Automate' },
  { icon: Rocket, label: 'Deploy' },
]

export default function TrainingHero() {
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
              Learn Practical AI,
              <br />
              <span className="text-gradient">Automation & DevOps</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-text max-w-xl leading-relaxed">
              Build practical skills through hands-on training, real projects and industry-focused technology
              workflows.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button href="#available-training" variant="primary" size="lg">
                Explore Courses
              </Button>
              <Button to="/#contact" variant="secondary" size="lg">
                Talk to Us
              </Button>
            </div>
          </div>

          <WorkflowVisual
            nodes={FLOW_NODES}
            ariaLabel="Learning path: Learn leads to Build, which leads to Automate, which leads to Deploy"
          />
        </div>
      </div>
    </section>
  )
}
