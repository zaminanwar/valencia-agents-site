import { ChartNoAxesCombinedIcon, ZapIcon } from 'lucide-react'

import hero from '@/content/images/hero.webp'

export const heroContent = {
  eyebrow: 'Freelance AI Consultant',
  title: 'AI consulting for modern businesses.',
  description:
    'I help small service teams turn repetitive work, scattered information, and slow workflows into simple AI-powered systems they will actually use.',
  primaryAction: { label: 'Book a strategy call', href: '/#contact' },
  secondaryAction: { label: 'Explore services', href: '/#services' },
  image: { src: hero, alt: 'A consultant in conversation with a client' },
  // The two chips that float over the photo.
  chips: [
    {
      icon: ChartNoAxesCombinedIcon,
      title: 'Reduce admin overload',
      detail: 'With practical AI systems',
    },
    { icon: ZapIcon, title: 'Move faster', detail: 'AI consulting for service teams' },
  ],
}
