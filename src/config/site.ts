export const siteConfig = {
  name: 'Valencia Agents',
  // The search result title and snippet, kept near 60 and 155 characters so neither truncates.
  title: 'Agentic Workflows For Back-Office Processes',
  description:
    'Valencia Agents builds agentic workflows that run your back-office processes in your own estate, under human approval, then hands them over to you.',
  // The share image's line under the headline.
  tagline: 'Built in your estate, approved by your people, handed over to you.',
  keywords: [
    'Valencia Agents',
    'agentic workflows',
    'process agents',
    'back-office automation',
    'reasoning-heavy processes',
    'end-to-end workflows',
  ],
  // Bump when the page copy changes; the sitemap reports it as lastmod.
  lastUpdated: '2026-11-03',
  author: { name: 'Valencia Agents' },
  email: 'hello@valencia-agents.example',
  links: {
    email: 'mailto:hello@valencia-agents.example',
    home: '/',
    method: '/how-we-work',
    services: '/services',
    about: '/about',
    insights: '/insights',
    contact: '/contact',
  },
} as const
