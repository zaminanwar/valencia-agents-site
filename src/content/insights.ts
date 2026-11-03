import { BookOpenIcon, MailIcon } from 'lucide-react'

export const insights = {
  hero: {
    eyebrow: { icon: BookOpenIcon, lead: 'Notes From', emphasis: 'The Work' },
    title: 'Notes from the work.',
    lede: 'Notes on the method, and on what real engagements teach once there are real engagements to learn from.',
  },
  willBe: {
    eyebrow: { icon: BookOpenIcon, lead: '01', emphasis: 'What This Will Be' },
    title: 'Short, Practical Notes, Written From The Work',
    paragraphs: [
      'How a process was mapped, where an evaluation caught something a demo would have missed, what a handover actually required. Written from the work, not from opinions about the industry.',
      'The method itself is already public on the How We Work page. That is the first thing worth reading, and it does not require signing up for anything.',
    ],
    primaryAction: { label: 'Read The Method', href: '/how-we-work' },
  },
  notLive: {
    eyebrow: { icon: MailIcon, lead: '02', emphasis: 'The Newsletter Is Not Live Yet' },
    title: 'Plainly Stated, There Is No Signup Form Here',
    note: 'There is no signup form on this page, because there is no newsletter service behind it yet. A form that collected your address and dropped it nowhere would be worse than no form at all.',
    paragraphs: [
      'The publishing service has not been chosen. When it is, this page will carry a real signup, and the first notes will go to the people who asked for them.',
      'Until then, if you want to hear when it opens, or if you have a process you want to talk about, contact us and say so. We will keep your note. No promised turnaround; we reply on our own timeline.',
    ],
    primaryAction: { label: 'Contact Us', href: '/contact' },
  },
}
