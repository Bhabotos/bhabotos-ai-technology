import { Check } from 'lucide-react'
import SectionHeading from '../../components/SectionHeading'

const INCLUDED = [
  'Live practical sessions',
  'Real-world projects',
  'Hands-on exercises',
  'Project guidance',
  'Course resources',
  'Automation workflows',
  'Practical documentation',
  'Completion certificate',
]

export default function WhatYouGet() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
      <SectionHeading title="What You Get" />
      <div className="mt-12 glass-panel rounded-2xl p-6 sm:p-10 max-w-4xl mx-auto">
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {INCLUDED.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm sm:text-base text-text">
              <span className="size-6 rounded-full bg-accent-soft border border-accent-border flex items-center justify-center shrink-0">
                <Check className="size-3.5 text-accent" aria-hidden="true" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
