import { categoryLabel, type CategoryId, type Project, type ProjectStatus } from '../data/catalog.ts'

const tokens = (text: string) => text.split(/[^A-Za-z0-9]+/).filter(Boolean)

// Words to index for a text: each whole word plus its camelCase parts, all lowercase.
// "localStorage" -> local, storage, localstorage;  "DevOps" -> dev, ops, devops.
export function words(text: string): string[] {
  return tokens(text).flatMap((t) => {
    const parts = t.replace(/([a-z0-9])([A-Z])/g, '$1 $2').toLowerCase().split(' ')
    return parts.length > 1 ? [...parts, t.toLowerCase()] : parts
  })
}

// Query words stay whole: typing "devops" must match the word "DevOps", not its parts.
const queryWords = (query: string) => tokens(query).map((t) => t.toLowerCase())

function haystack(p: Project): string[] {
  return words([p.title, p.summary, categoryLabel(p.category), ...p.tags, ...p.stack].join(' '))
}

/**
 * A query matches when every query word is the start of some word in the project's title,
 * description, category name, tags or stack. Prefix matching keeps partial typing useful
 * ("kube" finds Kubernetes) without matching arbitrary letters inside a word ("rag" no longer
 * matches "localStorage").
 */
export function matchesQuery(project: Project, query: string): boolean {
  const qs = queryWords(query)
  if (qs.length === 0) return true
  const hay = haystack(project)
  return qs.every((q) => hay.some((w) => w.startsWith(q)))
}

export interface ProjectFilters {
  category?: CategoryId | ''
  status?: ProjectStatus | ''
  tech?: string
  q?: string
}

export function filterProjects(list: Project[], f: ProjectFilters): Project[] {
  return list.filter((p) => {
    if (f.category && p.category !== f.category) return false
    if (f.status && p.status !== f.status) return false
    if (f.tech && !p.tags.includes(f.tech)) return false
    return matchesQuery(p, f.q ?? '')
  })
}
