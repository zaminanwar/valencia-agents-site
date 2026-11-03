export const siteConfig = {
  name: 'Valencia Agents',
  // The search result title and snippet, kept near 60 and 155 characters so neither truncates.
  title: 'AI consulting for modern businesses',
  description:
    'Valencia Agents helps small service teams turn repetitive work, scattered information, and slow workflows into simple AI-powered systems they will actually use.',
  // The share image's line under the headline.
  tagline: 'Practical AI systems for service teams, from audit to rollout.',
  keywords: [
    'Valencia Agents',
    'AI consulting',
    'AI consultant',
    'AI workflow audit',
    'automation setup',
    'team enablement',
  ],
  // Bump when the page copy changes; the sitemap reports it as lastmod.
  lastUpdated: '2026-11-03',
  author: { name: 'Valencia Agents' },
  // Placeholder until the real address is decided, in the reserved .example domain so it cannot receive mail.
  email: 'hello@valencia-agents.example',
  links: {
    email: 'mailto:hello@valencia-agents.example',
    home: '/',
    legal: '/legal-notice',
    linkedin: 'https://www.linkedin.com/',
    x: 'https://x.com/',
  },
} as const
