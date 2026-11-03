import { siteConfig } from '@/config/site'
import type { Faq } from '@/content/faq'
import { stripInlineCode } from '@/lib/inline-code'
import { getSiteUrl } from '@/lib/site-url'

export function siteSchemas() {
  const url = getSiteUrl()
  const publisher = {
    '@type': 'Organization',
    name: siteConfig.author.name,
    url,
  }

  return [
    {
      '@context': 'https://schema.org',
      ...publisher,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteConfig.name,
      url,
      description: siteConfig.description,
      publisher,
    },
  ]
}

// Built from the same items the FAQ section renders, so the markup always matches the page.
export function faqPageSchema(items: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: stripInlineCode(item.answer) },
    })),
  }
}
