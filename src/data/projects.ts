// Card shape for the Solutions page concepts. Real, verified projects live in catalog.ts.
export interface Project {
  id: string
  name: string
  description: string
  stack: string[]
  /** Slug of the verified project in catalog.ts that this concept maps to, if one exists. */
  projectSlug?: string
}
