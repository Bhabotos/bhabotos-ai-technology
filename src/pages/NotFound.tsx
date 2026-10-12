import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta('Page not found | BHABOTOS AI & TECHNOLOGY', 'The page you requested does not exist.', undefined, { noindex: true })
  return (
    <main className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="text-3xl font-semibold text-heading">Page not found</h1>
      <p className="mt-4 text-text-muted">That page does not exist or has moved.</p>
      <div className="mt-8 flex justify-center gap-4 text-sm font-medium">
        <Link to="/projects" className="text-accent hover:underline">
          Browse all projects
        </Link>
        <Link to="/" className="text-text hover:text-heading">
          Home
        </Link>
      </div>
    </main>
  )
}
