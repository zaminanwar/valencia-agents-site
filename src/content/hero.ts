import { BlocksIcon, MapPinIcon } from 'lucide-react'

export const heroContent = {
  eyebrow: 'In person in the Sacramento area',
  title: 'AI consulting for engineering departments in the Sacramento area.',
  description:
    'We help mechanical, electrical, and civil engineering teams bring AI into their document-heavy processes.',
  primaryAction: { label: 'Book a strategy call', href: '/#contact' },
  secondaryAction: { label: 'See the use cases', href: '/#use-cases' },
  // The two chips that float over the illustration.
  chips: [
    {
      icon: BlocksIcon,
      title: 'On the tools you already have',
      detail: 'Microsoft, Google, OpenAI and more',
    },
    { icon: MapPinIcon, title: 'Boots on the ground', detail: 'Local and in person in Sacramento' },
  ],
}
