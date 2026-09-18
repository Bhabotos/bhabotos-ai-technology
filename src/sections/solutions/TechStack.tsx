import SectionHeading from '../../components/SectionHeading'
import { techStack } from '../../data/techStack'

export default function TechStack() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <SectionHeading title="Technology We Work With" />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {techStack.map((group) => (
          <div key={group.id} className="rounded-2xl border border-border bg-surface/60 p-6 h-full">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">{group.category}</h3>
            <ul className="flex flex-wrap gap-2 mt-4">
              {group.items.map((item) => (
                <li key={item} className="text-xs font-medium text-text border border-border rounded-full px-2.5 py-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
