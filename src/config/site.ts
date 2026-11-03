export const siteConfig = {
  name: 'Natomas AI',
  // The search result title and snippet, kept near 60 and 155 characters so neither truncates.
  title: 'AI consulting for engineering departments in Sacramento',
  description:
    'Natomas AI helps mechanical, electrical, and civil engineering teams in the Sacramento area bring AI into their document-heavy processes, in person.',
  // The share image's line under the headline.
  tagline: 'In person, on the tools you already have, for engineering teams.',
  keywords: [
    'Natomas AI',
    'AI consulting',
    'engineering AI consulting',
    'Sacramento',
    'spec and RFP review',
    'agentic workflows',
  ],
  // Bump when the page copy changes; the sitemap reports it as lastmod.
  lastUpdated: '2026-11-03',
  author: { name: 'Natomas AI' },
  // Where the firm works from, for the structured data.
  area: 'Sacramento, California',
  // Placeholder until the real address is decided, in the reserved .example domain so it cannot receive mail.
  email: 'hello@natomas-ai.example',
  links: {
    email: 'mailto:hello@natomas-ai.example',
    home: '/',
    legal: '/legal-notice',
    linkedin: 'https://www.linkedin.com/',
    x: 'https://x.com/',
  },
} as const
