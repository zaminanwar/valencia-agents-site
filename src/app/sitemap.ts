import type { MetadataRoute } from 'next'

import { siteConfig } from '@/config/site'
import { getSiteUrl } from '@/lib/site-url'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const pages = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/how-we-work', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/insights', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  return pages.map((page) => ({
    url: `${base}${page.path}`,
    lastModified: siteConfig.lastUpdated,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
