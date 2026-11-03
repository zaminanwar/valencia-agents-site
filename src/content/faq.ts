export type Faq = { question: string; answer: string }

// Plain strings, so the section and its FAQPage JSON-LD read one source.
export const faq = {
  eyebrow: 'F.A.Q',
  title: 'Questions teams ask before getting started.',
  items: [
    {
      question: 'Do we need technical skills to use AI?',
      answer:
        'No. The systems should make work easier, not more technical. I build around how your team already operates.',
    },
    {
      question: 'How quickly can we see results?',
      answer:
        'Most businesses can identify quick wins early, especially in repetitive admin, internal workflows, and information handling.',
    },
    {
      question: 'Is this only for larger companies?',
      answer:
        'No. Smaller teams often benefit fastest because a few workflow improvements can save significant time every week.',
    },
    {
      question: 'What happens after the first call?',
      answer:
        'You leave with a clearer picture of where AI can help, what to prioritize first, and whether it makes sense to move forward.',
    },
    {
      question: 'Will this work for our type of business?',
      answer:
        'If your team relies on repeatable processes, shared information, and day-to-day coordination, there is usually a strong case for AI and automation.',
    },
  ] satisfies Faq[],
}
