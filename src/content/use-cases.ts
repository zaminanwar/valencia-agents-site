import {
  BookOpenIcon,
  ClipboardCheckIcon,
  FileSearchIcon,
  FileStackIcon,
  HistoryIcon,
  NetworkIcon,
} from 'lucide-react'

export const useCasesContent = {
  eyebrow: 'Use cases',
  title: 'Use cases our consultants have implemented.',
  description:
    'Six places where AI already does real work in engineering departments, all of them document-heavy.',
  items: [
    {
      icon: FileSearchIcon,
      title: 'Spec and RFP review',
      body: 'Turn hundreds of pages of bid packages and owner specs into a clear compliance matrix of requirements, deliverables, and risky clauses.',
    },
    {
      icon: BookOpenIcon,
      title: 'Codes and standards lookup',
      body: 'Get cited answers from ASCE, NEC, IEEE, AREMA, ASME, and your internal standards in seconds, without digging through PDFs.',
    },
    {
      icon: ClipboardCheckIcon,
      title: 'Submittal and drawing checks',
      body: 'Screen shop drawings, submittals, and calc packages against project specs before they reach a reviewer’s desk.',
    },
    {
      icon: NetworkIcon,
      title: 'Engineering change impact analysis',
      body: 'For any proposed change, find every affected drawing, BOM, spec, and procedure.',
    },
    {
      icon: HistoryIcon,
      title: 'Nonconformance and root-cause search',
      body: 'Search years of NCRs, 8Ds, and failure reports to find similar issues and the fixes that worked.',
    },
    {
      icon: FileStackIcon,
      title: 'Any process that buries your engineers in documents',
      body: 'If your team spends hours reading, cross-checking, or rewriting documents instead of engineering, we can find where AI fits.',
    },
  ],
  action: { label: 'Tell us about a process', href: '/#contact' },
}
