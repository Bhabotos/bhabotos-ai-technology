// Catalog guard (run manually or as a CI gate). Confirms every repo in src/data/catalog.ts is
// public, not archived and non-empty, and that slugs are unique. Uses the unauthenticated GitHub API.
//
// Result and exit code:
//   PASS        0  every repository was verified and no problem was found
//   FAIL        1  at least one genuine validation problem (takes priority over INCOMPLETE)
//   INCOMPLETE  2  no problem found, but some repositories could not be verified
//                  (rate limit, GitHub 5xx or network error). This is NOT a pass.
//
// GITHUB_API_BASE overrides the API host (used by tests against a local mock server).
import { projects } from '../src/data/catalog.ts'

const API = process.env.GITHUB_API_BASE ?? 'https://api.github.com'
const failures = []
const unverified = []
let verified = 0

const seen = new Set()
for (const p of projects) {
  if (seen.has(p.slug)) failures.push(`${p.slug}: duplicate slug`)
  seen.add(p.slug)
}

let rateLimited = false
for (const p of projects) {
  const name = p.repo.replace('https://github.com/', '')
  if (rateLimited) {
    unverified.push(`${name}: not checked (rate limit reached earlier)`)
    continue
  }
  let res
  try {
    res = await fetch(`${API}/repos/${name}`, { headers: { Accept: 'application/vnd.github+json' } })
  } catch (e) {
    unverified.push(`${name}: network error (${e.message})`)
    continue
  }
  if (res.status === 403 || res.status === 429) {
    rateLimited = true
    unverified.push(`${name}: GitHub API rate limit (HTTP ${res.status})`)
    continue
  }
  if (res.status === 404) {
    failures.push(`${name}: HTTP 404 (private, renamed or deleted)`)
    verified++
    continue
  }
  if (!res.ok) {
    unverified.push(`${name}: GitHub API error (HTTP ${res.status})`)
    continue
  }
  const repo = await res.json()
  verified++
  if (repo.private) failures.push(`${name}: repository is private`)
  if (repo.archived) failures.push(`${name}: repository is archived`)
  if (repo.size === 0) failures.push(`${name}: repository is empty`)
}

for (const f of failures) console.error(`FAIL        ${f}`)
for (const u of unverified) console.warn(`UNVERIFIED  ${u}`)

// Set exitCode instead of calling process.exit(): exiting while fetch keep-alive handles are
// still closing aborts with a libuv assertion on Windows (exit 127).
if (failures.length) {
  console.error(`RESULT: FAIL (${failures.length} problem(s); ${verified}/${projects.length} repositories verified, ${unverified.length} unverified)`)
  process.exitCode = 1
} else if (unverified.length) {
  console.warn(`RESULT: INCOMPLETE (${verified}/${projects.length} verified, ${unverified.length} could not be checked). Not a pass.`)
  process.exitCode = 2
} else {
  console.log(`RESULT: PASS (${verified}/${projects.length} repositories verified)`)
}
