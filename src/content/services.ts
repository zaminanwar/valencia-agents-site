import { CogIcon, DumbbellIcon, FileTextIcon } from 'lucide-react'

export const servicesContent = {
  eyebrow: 'Services',
  title: 'Three ways we help businesses put AI to work.',
  items: [
    {
      icon: FileTextIcon,
      title: 'AI Workflow Audit',
      body: 'Review where time is being lost, where decisions slow down, and where AI can remove friction first.',
    },
    {
      icon: CogIcon,
      title: 'AI & Automation Setup',
      body: 'Set up the automations and AI systems that take over the repeatable steps, inside the tools your team already uses.',
    },
    {
      icon: DumbbellIcon,
      title: 'Team Enablement',
      body: 'Train the team to run, trust, and improve the new systems, so the gains last after the engagement ends.',
    },
  ],
  action: { label: 'Book a strategy call', href: '/#contact' },
  chips: ['Spot process bottlenecks', 'Prioritize quick-win actions', 'Review current workflows'],
}
