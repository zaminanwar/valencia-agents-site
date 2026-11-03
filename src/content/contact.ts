export const contactContent = {
  eyebrow: 'Contact',
  title: 'Let’s find the fastest way AI can reduce friction in your engineering department.',
  description:
    'Book a first call and we will help you identify where AI can save time, simplify operations, and create the biggest immediate gains. We are local to the Sacramento area and happy to meet in person. You’ll receive:',
  points: [
    'The best AI opportunities for your department',
    'Clear priorities instead of vague ideas',
    'A practical roadmap for next steps',
  ],
  action: { label: 'Book your strategy call', href: 'mailto:hello@valencia-agents.example' },
  form: {
    name: { label: 'Name', placeholder: 'Jane Dupont' },
    email: { label: 'Email', placeholder: 'janedupont@example.com' },
    job: { label: 'Job', placeholder: 'Engineering manager' },
    company: { label: 'Company', placeholder: 'Dupont Engineering' },
    message: { label: 'Message', placeholder: 'Your message' },
    submit: 'Submit',
    subject: 'A strategy call with Valencia Agents',
    // The form has no backend: Submit opens the message as a draft in the visitor's mail app.
    note: 'Submit opens this message as a draft in your mail app. Nothing is stored here.',
  },
}
