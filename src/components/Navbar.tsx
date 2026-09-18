import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Training', to: '/training' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Projects', to: '/#projects' },
  { label: 'About', to: '/#about' },
  { label: 'Resources', to: '/#resources' },
  { label: 'Contact', to: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-bg/85 backdrop-blur-md border-b border-border shadow-[0_1px_0_0_var(--color-border)]' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300 h-16 ${
          scrolled ? 'lg:h-16' : 'lg:h-20'
        }`}
      >
        <Link to="/" className="text-sm sm:text-base font-semibold tracking-tight text-heading shrink-0">
          BHABOTOS <span className="text-text-muted font-medium">AI & TECHNOLOGY</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="text-sm text-text hover:text-heading transition-colors duration-200">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Button to="/training" variant="secondary" size="md">
            Explore Training
          </Button>
          <Button to="/solutions" variant="primary" size="md">
            Get a Solution
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="lg:hidden inline-flex items-center justify-center size-10 rounded-lg border border-border text-heading"
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-bg/98 backdrop-blur-md border-t border-border overflow-y-auto">
          <ul className="flex flex-col px-6 py-6 gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base text-text hover:text-heading border-b border-border/60"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 px-6 pb-8">
            <Button to="/training" variant="secondary" size="lg" onClick={() => setOpen(false)}>
              Explore Training
            </Button>
            <Button to="/solutions" variant="primary" size="lg" onClick={() => setOpen(false)}>
              Get a Solution
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
