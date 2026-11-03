import { MailIcon } from 'lucide-react'

// Placeholder until the real contact address is decided. Deliberately in
// the reserved .example domain so it cannot receive mail, and flagged on
// the page as a placeholder.
export const CONTACT_EMAIL = 'hello@valencia-agents.example'

export const contact = {
  hero: {
    eyebrow: { icon: MailIcon, lead: 'Get In', emphasis: 'Touch' },
    title: 'Tell us about a process.',
    ledes: [
      'One process, one owner, one number, and an honest walkthrough of how the work runs today, is where every engagement starts.',
      'No bookings framing, no promised turnaround. We reply on our own timeline.',
    ],
  },
  form: {
    eyebrow: { icon: MailIcon, lead: 'The', emphasis: 'Form' },
    title: 'Write To Us',
  },
  formNote:
    'This form sends nothing itself. It composes a draft you can open in your mail app, or copy as text. No backend, no database, no tracking.',
  placeholderNote:
    'Placeholder address: hello@valencia-agents.example. The real contact address has not been decided yet, so please do not expect a reply at this address. The draft below is yours to send wherever you reach us.',
}
