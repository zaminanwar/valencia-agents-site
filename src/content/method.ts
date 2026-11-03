import { howWeWork } from '@/content/how-we-work'

// The stages come from the method page, so the summary can never drift from it.
export const method = {
  eyebrow: 'How We Work',
  title: 'Seven Stages, Each Ending With Something You Can Check',
  description:
    'One process at a time. Each stage ends with something you can check, and each one can end the engagement if the answer is no.',
  stages: howWeWork.stages.items.map((stage) => ({ name: stage.name, get: stage.get })),
  action: { label: 'Read The Method', href: '/how-we-work' },
}
