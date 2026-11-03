import { LayoutGridIcon, PhoneCallIcon, ScanSearchIcon } from 'lucide-react'

export const processContent = {
  eyebrow: 'How it works',
  title: 'Simple process. Fast wins first.',
  steps: [
    {
      icon: PhoneCallIcon,
      title: 'Discovery',
      body: 'We look at your goals, current workflows, and biggest operational bottlenecks.',
    },
    {
      icon: ScanSearchIcon,
      title: 'Prioritization',
      body: 'We identify the highest-value AI opportunities based on speed, impact, and ease of adoption.',
    },
    {
      icon: LayoutGridIcon,
      title: 'Implementation',
      body: 'We roll out practical systems your team can start using.',
    },
  ],
  action: { label: 'Start with a strategy call', href: '/#contact' },
}
