import {
  EyeIcon,
  LayersIcon,
  LockIcon,
  ShieldCheckIcon,
  WrenchIcon,
  type LucideIcon,
} from 'lucide-react'

export type FeatureVisual =
  | 'prerender'
  | 'metadata'
  | 'quality'
  | 'no-javascript'
  | 'content'
  | 'presets'

export const features = {
  eyebrow: { icon: LayersIcon, lead: 'Different Offices,', emphasis: 'Same Shape Of Work' },
  title: 'Different Offices, The Same Shape Of Work',
  description:
    'Companies with a back-office process that is document-heavy, repetitive, and approval-laden, where getting it wrong costs real money.',
  items: [
    {
      visual: 'content',
      title: 'Engineering Companies',
      description:
        'Back-office knowledge work in engineering offices, particular to each office, and worth fitting the agent to rather than redesigning the office around the agent.',
    },
    {
      visual: 'quality',
      title: 'Industrial Companies',
      description:
        'Document-heavy, approval-laden operations work where a missed requirement or an unsupported claim carries real cost.',
    },
    {
      visual: 'metadata',
      title: 'RFP Response Teams',
      description:
        'The kind of work we start with: high-volume documents in, a governed decision out, quality checkable requirement by requirement.',
    },
    {
      visual: 'prerender',
      title: 'Approval-Laden Processes',
      description:
        'Work that means reading, synthesizing, judging, and deciding from documents and systems, where a human must own the consequences.',
    },
    {
      visual: 'presets',
      title: 'Established Estates',
      description:
        'Companies already running on an established estate, where the process lives in documents and email today and the estate already provides the permissions, audit, and identity to build on.',
    },
    {
      visual: 'no-javascript',
      title: 'Teams Held Together By Key People',
      description:
        'Processes that depend on a few people to hold them together, and would break, or stall, if those people were away.',
    },
  ] satisfies { visual: FeatureVisual; title: string; description: string }[],
  extras: [
    {
      icon: ShieldCheckIcon,
      title: 'Approval-Bound',
      description:
        'Nothing consequential happens without a person deciding on the exact content in front of them.',
    },
    {
      icon: LockIcon,
      title: 'Permissions As The User',
      description:
        'Retrieval respects your permissions. The agent sees only what each user is allowed to see.',
    },
    {
      icon: EyeIcon,
      title: 'Auditable And Provable',
      description:
        'What it did, what evidence it used, and who approved it, logged and yours to inspect.',
    },
    {
      icon: WrenchIcon,
      title: 'Fit First',
      description:
        'Built to match how your office already works. Improvement comes later, from what the running system shows.',
    },
  ] satisfies { icon: LucideIcon; title: string; description: string }[],
}
