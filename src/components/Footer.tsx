import { Link } from 'react-router-dom'

const FOOTER_LINKS = [
  { label: 'Training', to: '/training' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/#about' },
  { label: 'Resources', to: '/#resources' },
  { label: 'Contact', to: '/#contact' },
]

const SOCIAL_LINKS = [
  { label: 'LinkedIn', short: 'in', href: '#' },
  { label: 'GitHub', short: 'gh', href: '#' },
  { label: 'Facebook', short: 'fb', href: '#' },
  { label: 'WhatsApp', short: 'wa', href: '#' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-elevated">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-base font-semibold text-heading">
              BHABOTOS <span className="text-text-muted font-medium">AI & TECHNOLOGY</span>
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mt-3">
              AI • AUTOMATION • NETWORK • DEVOPS
            </p>
            <p className="text-sm text-text-muted mt-4 max-w-xs leading-relaxed">
              Practical AI, automation and technology training and solutions.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-heading">Navigation</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-text-muted hover:text-heading transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-heading">Connect</p>
            <div className="mt-4 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="size-9 rounded-lg border border-border flex items-center justify-center text-xs font-semibold text-text-muted hover:text-accent hover:border-accent-border transition-colors duration-200"
                >
                  <span aria-hidden="true">{social.short}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-xs text-text-muted">© 2026 BHABOTOS AI & TECHNOLOGY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
