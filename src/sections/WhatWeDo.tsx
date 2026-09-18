import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'

interface Track {
  emoji: string
  eyebrow: string
  title: string
  description: string
  tags: string[]
  cta: string
  to: string
}

const TRACKS: Track[] = [
  {
    emoji: '🎓',
    eyebrow: 'Training',
    title: 'Learn Practical Technology',
    description:
      'Build practical skills in AI, automation, network engineering and DevOps through live, project-based training.',
    tags: ['AI & ChatGPT', 'Claude', 'AI Automation', 'n8n', 'Network Automation', 'DevOps'],
    cta: 'Explore Training',
    to: '/training',
  },
  {
    emoji: '🛠',
    eyebrow: 'Solutions',
    title: 'Build & Automate',
    description:
      'We design practical AI, automation and technology solutions that help businesses reduce repetitive work and improve operational workflows.',
    tags: ['AI Chatbots', 'Business Automation', 'AI Agents', 'n8n Automation', 'Network Automation', 'Dashboards & Reporting'],
    cta: 'Explore Solutions',
    to: '/#solutions',
  },
]

export default function WhatWeDo() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <SectionHeading title="What We Do" subtitle="Learn practical technology. Build useful solutions." />

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {TRACKS.map((track) => (
          <div key={track.title} className="glass-panel rounded-2xl p-7 sm:p-9 flex flex-col shadow-card">
            <span className="text-3xl" aria-hidden="true">
              {track.emoji}
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mt-4">{track.eyebrow}</span>
            <h3 className="text-2xl font-semibold text-heading mt-2">{track.title}</h3>
            <p className="text-text-muted mt-3 leading-relaxed">{track.description}</p>

            <ul className="flex flex-wrap gap-2 mt-6">
              {track.tags.map((tag) => (
                <li
                  key={tag}
                  className="text-xs font-medium text-text border border-border rounded-full px-3 py-1.5"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button to={track.to} variant="secondary">
                {track.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
