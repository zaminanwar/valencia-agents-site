import busywork from '@/content/images/benefit-busywork.webp'
import decisions from '@/content/images/benefit-decisions.webp'
import scale from '@/content/images/benefit-scale.webp'
import time from '@/content/images/benefit-time.webp'

export const benefitsContent = {
  eyebrow: 'Benefits',
  title: 'What better systems actually give you.',
  description:
    'The goal is not to use AI for the sake of it. The goal is to remove friction, protect team time, and make the business easier to run.',
  items: [
    {
      title: 'Save time',
      body: 'Reduce manual admin so your team can focus on sales, and client work.',
      image: { src: time, alt: 'A clock face' },
    },
    {
      title: 'Less busywork',
      body: 'Automate the steps that keep slowing people down every week.',
      image: { src: busywork, alt: 'The curved facade of a modern building' },
    },
    {
      title: 'Clearer decisions',
      body: 'Turn scattered information into cleaner workflows and more actions.',
      image: { src: decisions, alt: 'Two chess knights facing each other' },
    },
    {
      title: 'Scalable operations',
      body: 'Build systems that support growth without adding complexity.',
      image: { src: scale, alt: 'Coins in the air' },
    },
  ],
}
