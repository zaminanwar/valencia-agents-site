import { RouteIcon } from 'lucide-react'

export const steps = {
  eyebrow: { icon: RouteIcon, lead: 'What Actually', emphasis: 'Changes' },
  title: 'From A Tool Your Team Opens To A Process That Runs Itself',
  description: 'Process AI, not a better chatbot. Four things make it different.',
  primaryAction: { label: 'Read The Method', href: '/how-we-work' },
  secondaryAction: { label: 'Tell Us About A Process', href: '/contact' },
  items: [
    {
      title: 'It Runs Itself',
      description:
        'It starts on its own when something arrives, carries a case across days and across people, and works in your systems, in the language of your business. Not a tool someone opens, a process that moves on its own.',
    },
    {
      title: 'It Decides Safely',
      description:
        'The steps are fixed and run the same way every time. The model judges only inside those steps: it drafts, checks, and triages, never on its own authority. It acts under its own scoped permissions, not borrowed from a user.',
    },
    {
      title: 'It Can Be Checked',
      description:
        'Every step is logged, so you can see afterward exactly what it did and who signed off. Before it touches real cases, it is measured against real cases with correct outputs, agreed with your own grader, and against a baseline of how the work performs today.',
    },
    {
      title: 'It Ends Up Yours',
      description:
        'When we hand over, you keep everything: the agents and flows in your tenant, the code in your repository, the evaluation harness, the documentation. Revocable access is not a handover.',
    },
  ] satisfies { title: string; description: string }[],
}
