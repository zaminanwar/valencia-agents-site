export type Faq = { question: string; answer: string }

// Plain strings, so the section and its FAQPage JSON-LD read one source.
export const faq = {
  eyebrow: 'F.A.Q',
  title: 'Questions engineering teams ask before getting started.',
  items: [
    {
      question: 'Do we need to buy new AI tools?',
      answer:
        'No. We work inside the AI tools and platforms you already have, across Microsoft, Google, Amazon, OpenAI, Anthropic, Snowflake, Databricks, SAP, Salesforce, and other ecosystems. We are not selling a tool.',
    },
    {
      question: 'Do our engineers need technical skills to use AI?',
      answer:
        'No. The systems should make work easier, not more technical. We build around how your team already operates, and we train the people who will run them.',
    },
    {
      question: 'How quickly can we see results?',
      answer:
        'Most departments can identify quick wins early, especially in spec review, standards lookup, and the checks that happen before a document reaches a reviewer.',
    },
    {
      question: 'Do you work on site?',
      answer:
        'Yes. We operate locally and in person in the Sacramento area, because a successful engagement needs boots on the ground where the work is actually getting done.',
    },
    {
      question: 'What happens after the first call?',
      answer:
        'You leave with a clearer picture of where AI can help, what to prioritize first, and whether it makes sense to move forward.',
    },
    {
      question: 'Will this work for our engineering department?',
      answer:
        'If your team spends hours reading, cross-checking, or rewriting documents instead of engineering, there is usually a strong case for AI. The audit is where we find out.',
    },
  ] satisfies Faq[],
}
