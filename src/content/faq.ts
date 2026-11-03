export type Faq = { question: string; answer: string }

// Plain strings, so the section and its FAQPage JSON-LD read one source. Backticks render as inline code.
export const faq = {
  eyebrow: 'Questions',
  title: 'Questions & Answers',
  description: 'What a process agent is, what you get, what it costs, and what we need from you.',
  contact: {
    title: 'Still have a question?',
    action: { label: 'Contact Us', href: '/contact' },
  },
  items: [
    {
      question: 'What is a process agent?',
      answer:
        'A process agent runs a whole back-office process, not one chat at a time. It starts on its own when something arrives, carries a case across days and across people, and works in your systems under a deterministic control plane, with a human approving anything consequential.',
    },
    {
      question: 'What do you actually deliver?',
      answer:
        'A working process in your own estate: the agent, the deterministic steps, permission-respecting retrieval, and approval gates, proved against a golden set, piloted with one team, and handed over with the code, the models, the evaluation harness, and the documentation.',
    },
    {
      question: 'How much does it cost?',
      answer:
        'Every engagement is fixed-price, set at scoping once the process is mapped. Discovery is credited into the build when the build follows within an agreed window. Platform and usage costs run on your accounts at cost, with no markup.',
    },
    {
      question: 'What do you need from us?',
      answer:
        'Four roles, named: someone who owns the number, someone who grades the work, someone who owns the content, and someone from IT and security. Plus time with the people who do the work, access to the content, and a pilot team before anything goes live.',
    },
    {
      question: 'What happens after handover?',
      answer:
        'Your team runs the golden set unaided and passes, and then the system is yours. Thirty days of post-handover fixes are included, and on exit we remove our access. Tune covers the 90 days after handover with weekly sampling, regression tests, and monthly reports.',
    },
    {
      question: 'Do you keep our data?',
      answer:
        'No. There is no separate store of your data and no proprietary platform. Retrieval respects permissions. The agent sees only what each user is allowed to see, and nothing from your estate is shared with another client, except the method itself.',
    },
  ] satisfies Faq[],
}
