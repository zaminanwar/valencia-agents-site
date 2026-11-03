import portrait from '@/content/images/portrait.webp'
import signature from '@/content/images/signature.png'

export const aboutContent = {
  eyebrow: 'About me',
  title: 'Practical AI guidance for growing teams.',
  portrait: { src: portrait, alt: 'Portrait of the consultant' },
  card: {
    title: 'I help teams adopt AI without making the work more complicated.',
    body: 'My focus is simple: solve operational problems with tools your team will actually use. That means less wasted time, fewer vague experiments, and more practical systems that fit the way your business already works.',
    signature: { src: signature, alt: 'Christian Doe' },
    role: 'Freelance AI Operations Consultant',
  },
  // A plain quote, never review markup: reviews a site publishes about itself do not qualify.
  quote: {
    text: 'Thanks to Christian, what used to take days now takes minutes, and our team finally works with the speed we needed to scale.',
    name: 'Ambroise V.',
    role: 'Head of Strategy at BaroqueCorp',
  },
}
