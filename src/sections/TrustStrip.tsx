const SKILLS = ['Network Engineering', 'AI Automation', 'Python', 'n8n', 'DevOps', 'Cloud & Infrastructure']

export default function TrustStrip() {
  return (
    <section aria-label="Practical experience" className="border-y border-border bg-bg-elevated/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <p className="text-xs sm:text-sm text-text-muted whitespace-nowrap shrink-0">
          Built around practical experience in:
        </p>
        <ul className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2">
          {SKILLS.map((skill) => (
            <li key={skill} className="text-sm font-medium text-text">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
