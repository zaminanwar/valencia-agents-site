import type { MetadataRoute } from 'next'

import { siteConfig } from '@/config/site'
import { getSiteUrl } from '@/lib/site-url'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const pages = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/legal-notice', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  return pages.map((page) => ({
    url: `${base}${page.path}`,
    lastModified: siteConfig.lastUpdated,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
