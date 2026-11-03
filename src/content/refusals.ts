import { howWeWork } from '@/content/how-we-work'

export const refusals = {
  eyebrow: 'The Lines We Hold',
  title: 'A Firm That Never Says No Is A Vendor, Not A Consultant',
  description:
    'These are the lines we hold, and they are the reason to believe the rest of this site.',
  // The guarantee titles, taken from the method page; the page itself carries the detail.
  items: howWeWork.guarantees.items.map((item) => item.title),
  closing:
    'Scope is confirmed in writing before work starts. Changes go through written change orders, repriced before work, never by conversation.',
  action: { label: 'Read The Guarantees', href: '/how-we-work#guarantees' },
}
