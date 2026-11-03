import problem from '@/content/images/problem.webp'

export const problemContent = {
  eyebrow: 'The real problem',
  title: 'Most teams do not need more AI tools, they need less friction in the workday.',
  description:
    'The problem is rarely a lack of software. It is time lost to manual admin, messy handoffs, scattered information, and processes that slow the team down.',
  image: { src: problem, alt: 'Office towers seen from the street' },
  before: {
    label: 'Before AI',
    items: [
      'Work gets stuck across inboxes and spreadsheets',
      'Teams chase updates instead of focusing on delivery',
      'Processes start breaking as the business and tools evolve',
    ],
  },
  after: {
    label: 'After AI',
    items: [
      'Clear workflows reduce friction and keep work moving',
      'AI handles repeatable tasks where it genuinely saves time',
      'Teams focus on delivery, decisions, and client work',
    ],
  },
}
