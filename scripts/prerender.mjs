// Post-build step: writes a static HTML file per route with its own title, description,
// canonical and Open Graph tags, so crawlers and link previews do not need to run JS.
// Also writes sitemap.xml and robots.txt. nginx serves dist/<route>/index.html directly.
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { projects } from '../src/data/catalog.ts'

const SITE = 'https://bhabotos.com'
const dist = new URL('../dist/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')
const template = await readFile(join(dist, 'index.html'), 'utf8')

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function page({ path, title, description, body }) {
  const url = SITE + path
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${esc(description)}$2`)
    .replace(/(<meta\s+property="og:title"\s+content=")[^"]*(")/, `$1${esc(title)}$2`)
    .replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/, `$1${esc(description)}$2`)
  const extra = `    <link rel="canonical" href="${url}" />\n    <meta property="og:url" content="${url}" />\n    <meta property="og:site_name" content="BHABOTOS AI &amp; TECHNOLOGY" />\n    <meta name="twitter:title" content="${esc(title)}" />\n    <meta name="twitter:description" content="${esc(description)}" />\n`
  html = html.replace('</head>', extra + '  </head>')
  // Crawler-visible fallback content; React replaces it on load.
  html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`)
  return html
}

const routes = [
  {
    path: '/projects',
    title: 'Projects | Network Automation, DevOps & AI Agents | BHABOTOS',
    description: 'Verified GitHub projects across network automation, DevOps and cloud, AI agents and RAG systems, each with an honest status label.',
    body: `<main><h1>All Projects</h1><ul>${projects.map((p) => `<li><a href="/projects/${p.slug}">${esc(p.title)}</a> - ${esc(p.status)}</li>`).join('')}</ul></main>`,
  },
  ...projects.map((p) => ({
    path: `/projects/${p.slug}`,
    title: `${p.title} | Projects | BHABOTOS`,
    description: p.summary,
    body: `<main><h1>${esc(p.title)}</h1><p>${esc(p.summary)}</p><p>Status: ${esc(p.status)}. ${esc(p.statusNote)}</p><p><a href="/projects">All Projects</a></p></main>`,
  })),
]

for (const r of routes) {
  const dir = join(dist, r.path)
  await mkdir(dir, { recursive: true })
  await writeFile(join(dir, 'index.html'), page(r))
}

const urls = ['/', '/training', '/solutions', '/projects', ...projects.map((p) => `/projects/${p.slug}`)]
await writeFile(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${SITE}${u}</loc></url>`).join('\n')}\n</urlset>\n`,
)
await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`)
console.log(`prerendered ${routes.length} routes, sitemap with ${urls.length} URLs`)
