import { ChartNoAxesCombinedIcon, ZapIcon } from 'lucide-react'

export const heroContent = {
  eyebrow: 'AI consultancy',
  title: 'AI consulting for modern businesses.',
  description:
    'We help small service teams turn repetitive work, scattered information, and slow workflows into simple AI-powered systems they will actually use.',
  primaryAction: { label: 'Book a strategy call', href: '/#contact' },
  secondaryAction: { label: 'Explore services', href: '/#services' },
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
