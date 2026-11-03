import {
  BanknoteIcon,
  KeyRoundIcon,
  ListChecksIcon,
  RocketIcon,
  UnlockIcon,
  type LucideIcon,
} from 'lucide-react'

export const cta = {
  eyebrow: { icon: RocketIcon, lead: 'Start', emphasis: 'Here' },
  title: 'Learn The Method First, Or Tell Us About A Process',
  description:
    'The method is written out in full on the How We Work page. That is the first thing worth reading, and it does not require signing up for anything.',
  primaryAction: { label: 'Read The Method', href: '/how-we-work' },
  secondaryAction: { label: 'Tell Us About A Process', href: '/contact' },
  cards: [
    { icon: ListChecksIcon, title: 'Seven Stages', detail: 'Each ends with a check' },
    { icon: BanknoteIcon, title: 'Fixed Price', detail: 'Set at scoping, once mapped' },
    { icon: KeyRoundIcon, title: 'Handover', detail: 'Proved, not asserted' },
    { icon: UnlockIcon, title: 'No Lock-In', detail: 'Nothing to pay after exit' },
  ] satisfies { icon: LucideIcon; title: string; detail: string }[],
}
