import { useEffect } from 'react'

export const SITE_URL = 'https://bhabotos.com'

function upsert(selector: string, create: () => HTMLElement, attr: string, value: string) {
  let el = document.head.querySelector<HTMLElement>(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

const metaByName = (name: string, content: string) =>
  upsert(`meta[name="${name}"]`, () => Object.assign(document.createElement('meta'), { name }), 'content', content)

const metaByProperty = (property: string, content: string) =>
  upsert(
    `meta[property="${property}"]`,
    () => {
      const m = document.createElement('meta')
      m.setAttribute('property', property)
      return m
    },
    'content',
    content,
  )

const remove = (selector: string) => document.head.querySelectorAll(selector).forEach((el) => el.remove())

interface PageMetaOptions {
  /** Unknown or non-content pages: add robots noindex and publish no canonical / og:url. */
  noindex?: boolean
}

export function usePageMeta(title: string, description: string, path?: string, options: PageMetaOptions = {}) {
  const noindex = options.noindex ?? false

  useEffect(() => {
    document.title = title
    metaByName('description', description)
    metaByProperty('og:title', title)
    metaByProperty('og:description', description)
    metaByName('twitter:title', title)
    metaByName('twitter:description', description)

    if (noindex) {
      metaByName('robots', 'noindex')
      remove('link[rel="canonical"]')
      remove('meta[property="og:url"]')
      return
    }

    // Indexable page: make sure a noindex left by a previous (not-found) page is gone.
    remove('meta[name="robots"]')
    const url = SITE_URL + (path ?? window.location.pathname)
    metaByProperty('og:url', url)
    upsert('link[rel="canonical"]', () => Object.assign(document.createElement('link'), { rel: 'canonical' }), 'href', url)
  }, [title, description, path, noindex])
}
