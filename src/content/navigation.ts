export type NavLink = { label: string; href: string; external?: boolean }

// The one action the header offers, beside the menu on phones.
export const headerAction = { label: 'Tell Us About A Process', href: '/contact' }

export const headerNav: NavLink[] = [
  { label: 'How We Work', href: '/how-we-work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

// The menu adds Home, which the logo covers on wider screens, and the FAQ anchor.
export const mobileNav: NavLink[] = [
  { label: 'Home', href: '/' },
  ...headerNav,
  { label: 'Questions & Answers', href: '/#faq' },
]

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: 'Site',
    links: [
      { label: 'Home', href: '/' },
      { label: 'How We Work', href: '/how-we-work' },
      { label: 'Services', href: '/services' },
      { label: 'About', href: '/about' },
      { label: 'Insights', href: '/insights' },
      { label: 'Contact', href: '/contact' },
      { label: 'Questions & Answers', href: '/#faq' },
    ],
  },
  {
    title: 'Method',
    links: [
      { label: 'The Problem', href: '/how-we-work#problem' },
      { label: 'The Principle', href: '/how-we-work#principle' },
      { label: 'The Seven Stages', href: '/how-we-work#seven-stages' },
      { label: 'Guarantees', href: '/how-we-work#guarantees' },
      { label: 'Handover', href: '/how-we-work#handover' },
      { label: 'Commercial', href: '/how-we-work#commercial' },
      { label: 'Ontology', href: '/how-we-work#ontology' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Email', href: 'mailto:hello@valencia-agents.example' },
      { label: 'Tell Us About A Process', href: '/contact' },
    ],
  },
]

export const footerNote = { line: 'Valencia Agents, a consultancy in formation.' }
