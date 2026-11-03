import type { MetadataRoute } from 'next'

import { siteConfig } from '@/config/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'Valencia',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    icons: [{ src: '/icon.svg', type: 'image/svg+xml', sizes: 'any' }],
  }
}
