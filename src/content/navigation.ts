export type NavLink = { label: string; href: string; external?: boolean }

// The one action the header offers, beside the menu on phones.
export const headerAction = { label: 'Book a strategy call', href: '/#contact' }

export const headerNav: NavLink[] = [
  { label: 'Use cases', href: '/#use-cases' },
  { label: 'Services', href: '/#services' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'About', href: '/#about' },
  { label: 'F.A.Q', href: '/#faq' },
]

// The menu adds Home, which the logo covers on wider screens, and Contact.
export const mobileNav: NavLink[] = [
  { label: 'Home', href: '/' },
  ...headerNav,
  { label: 'Contact', href: '/#contact' },
]

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: 'Navigation',
    links: [...headerNav, { label: 'Contact', href: '/#contact' }],
  },
  {
    title: 'Social',
    links: [
      { label: 'hello@natomas-ai.example', href: 'mailto:hello@natomas-ai.example' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/', external: true },
      { label: 'X / Twitter', href: 'https://x.com/', external: true },
    ],
  },
]

export const footerNote = {
  tagline: 'AI consulting for engineering departments in the Sacramento area.',
  line: '2026 Natomas AI. All rights reserved.',
  legal: { label: 'Legal Notice', href: '/legal-notice' },
}
