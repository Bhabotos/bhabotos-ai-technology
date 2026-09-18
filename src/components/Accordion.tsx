import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import type { ReactNode } from 'react'

interface AccordionItemProps {
  title: string
  defaultOpen?: boolean
  children: ReactNode
}

export function AccordionItem({ title, defaultOpen = false, children }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="glass-panel rounded-2xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left transition-colors duration-200 hover:bg-surface-hover"
      >
        <span className="text-base sm:text-lg font-semibold text-heading">{title}</span>
        <ChevronDown
          className={`size-5 text-accent shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      {open && <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 border-t border-border">{children}</div>}
    </div>
  )
}
