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

export function usePageMeta(title: string, description: string, path?: string) {
  useEffect(() => {
    document.title = title
    metaByName('description', description)
    metaByProperty('og:title', title)
    metaByProperty('og:description', description)
    metaByName('twitter:title', title)
    metaByName('twitter:description', description)

    const url = SITE_URL + (path ?? window.location.pathname)
    metaByProperty('og:url', url)
    upsert('link[rel="canonical"]', () => Object.assign(document.createElement('link'), { rel: 'canonical' }), 'href', url)
  }, [title, description, path])
}
