// Run with: npm test   (Node's built-in test runner; no extra dependencies)
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import { CATEGORIES, STATUSES, projects } from '../src/data/catalog.ts'
import { filterProjects, matchesQuery, words } from '../src/lib/search.ts'

const slugs = (list) => list.map((p) => p.slug)
const search = (q, extra = {}) => slugs(filterProjects(projects, { q, ...extra }))

test('words() splits camelCase and punctuation', () => {
  assert.deepEqual(words('localStorage'), ['local', 'storage', 'localstorage'])
  assert.deepEqual(words('DevOps'), ['dev', 'ops', 'devops'])
  assert.deepEqual(words('CI/CD, n8n'), ['ci', 'cd', 'n8n'])
})

test('"rag" finds the RAG project and not Daily Work Tracker (localStorage)', () => {
  const hits = search('rag')
  assert.ok(hits.includes('rag-customer-email-support-agent'))
  assert.ok(!hits.includes('daily-work-tracker'))
})

test('"daily" finds Daily Work Tracker', () => {
  assert.ok(search('daily').includes('daily-work-tracker'))
})

test('meaningful partial matching still works', () => {
  assert.ok(search('kube').includes('k8s-production-platform'))
  assert.ok(search('terra').includes('terraform-hetzner-devops-platform'))
  assert.ok(search('storage').includes('daily-work-tracker')) // whole word inside camelCase
  assert.ok(search('auto').includes('netautoops')) // camelCase word start
  assert.ok(search('netauto').includes('netautoops')) // whole-word prefix
  assert.ok(search('ci/cd').includes('production-docker-app'))
})

test('multi-word queries require every word', () => {
  assert.ok(search('network automation').length > 0)
  assert.deepEqual(search('rag zzzz'), [])
})

test('category names are searchable', () => {
  assert.ok(search('devops').includes('terraform-hetzner-devops-platform'))
})

test('category filter returns only that category', () => {
  for (const c of CATEGORIES) {
    const res = filterProjects(projects, { category: c.id })
    assert.ok(res.every((p) => p.category === c.id))
    assert.equal(res.length, projects.filter((p) => p.category === c.id).length)
  }
})

test('status filter returns only that status', () => {
  for (const s of STATUSES) {
    assert.ok(filterProjects(projects, { status: s }).every((p) => p.status === s))
  }
  assert.deepEqual(filterProjects(projects, { status: 'Archived' }), [])
})

test('technology filter matches exact tags only', () => {
  const res = filterProjects(projects, { tech: 'n8n' })
  assert.ok(res.length > 0 && res.every((p) => p.tags.includes('n8n')))
  assert.deepEqual(filterProjects(projects, { tech: 'rag' }), []) // exact tag is "RAG", never a substring
})

test('filters combine', () => {
  const res = filterProjects(projects, { category: 'devops', tech: 'Ansible', q: 'docker' })
  assert.ok(res.length > 0)
  assert.ok(res.every((p) => p.category === 'devops' && p.tags.includes('Ansible')))
})

test('empty results, and clearing filters restores the full list', () => {
  assert.deepEqual(search('qqqqzzzz'), [])
  assert.equal(filterProjects(projects, {}).length, projects.length)
  assert.equal(filterProjects(projects, { category: '', status: '', tech: '', q: '' }).length, projects.length)
  assert.equal(matchesQuery(projects[0], '   '), true)
})

test('every catalog slug is unique and the removed dashboard stays out', () => {
  assert.equal(new Set(slugs(projects)).size, projects.length)
  assert.ok(!slugs(projects).includes('telecom-work-report-dashboard'))
})

test('built not-found page is noindex with no canonical (skipped before a build)', { skip: !existsDist() }, () => {
  const html = readFileSync(new URL('../dist/404.html', import.meta.url), 'utf8')
  assert.match(html, /<meta name="robots" content="noindex"/)
  assert.doesNotMatch(html, /rel="canonical"/)
  assert.doesNotMatch(html, /og:url/)
})

test('built project pages stay indexable with their canonical (skipped before a build)', { skip: !existsDist() }, () => {
  for (const p of projects) {
    const html = readFileSync(new URL(`../dist/projects/${p.slug}/index.html`, import.meta.url), 'utf8')
    assert.ok(html.includes(`rel="canonical" href="https://bhabotos.com/projects/${p.slug}"`), p.slug)
    assert.doesNotMatch(html, /name="robots"/, p.slug)
  }
})

function existsDist() {
  try {
    readFileSync(new URL('../dist/404.html', import.meta.url))
    return true
  } catch {
    return false
  }
}
