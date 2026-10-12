import SectionHeading from '../components/SectionHeading'

const STEPS = [
  {
    title: 'Network engineering',
    body: 'Professional background in telecom and network operations: routing, alarms, inventory and NOC workflows.',
  },
  {
    title: 'Network automation',
    body: 'Python and Netmiko scripts, inventory APIs and log analysis that replace repetitive CLI work.',
  },
  {
    title: 'DevOps & cloud',
    body: 'Docker, CI/CD, Terraform and Ansible, applying the same discipline to servers and infrastructure.',
  },
  {
    title: 'AI agent automation',
    body: 'n8n workflows, RAG and voice agents that automate business processes with human checkpoints.',
  },
]

export default function CareerPath() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <SectionHeading
        eyebrow="How the work connects"
        title="From the network to automation and AI"
        subtitle="Network operations experience is the base. The projects below extend it into infrastructure automation, DevOps and AI agents. Professional experience and personal lab projects are labelled separately."
      />
      <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none p-0">
        {STEPS.map((s, i) => (
          <li key={s.title} className="glass-panel rounded-2xl p-5">
            <span className="text-xs font-semibold text-accent">0{i + 1}</span>
            <h3 className="mt-2 text-base font-semibold text-heading">{s.title}</h3>
            <p className="mt-2 text-sm text-text-muted leading-relaxed">{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
