export const services = {
  hero: {
    eyebrow: 'What We Offer',
    title: 'Two offers, one process at a time.',
    lede: 'Consulting that answers whether a process can and should be built, and done-for-you implementation that builds it and hands it over.',
  },
  discovery: {
    eyebrow: 'Discovery',
    title: 'Fixed-Price Consulting',
    description:
      'Whether it can and should be built, answered before anyone commits to building it.',
    outputs: [
      {
        title: 'Signed Process Map',
        body: 'Every step sorted into what to delete, what is plain code, what the agent should do, and what stays a human decision, plus a written list of what the agent will never do on its own.',
      },
      {
        title: 'Content-Readiness Report',
        body: 'Who owns each item, whether it is approved, whether it is current.',
      },
      {
        title: 'Golden Set And Rubric',
        body: 'Real cases, with correct outputs and reasons, agreed with the person who grades them, plus a grading rubric.',
      },
      {
        title: 'Signed Baseline',
        body: 'How the work performs today, measured before anything is built, as the denominator for every measurement that follows.',
      },
      {
        title: 'Build Options And Memo',
        body: 'Costed build options and a go or no-go memo. A discovery that concludes the process should not be built counts as delivery, not failure.',
      },
    ],
    closing: 'Discovery is credited into the build when the build follows within an agreed window.',
  },
  implementation: {
    eyebrow: 'Implementation',
    title: 'Build Is Fixed-Price',
    description: 'Proved before it goes live, then handed over.',
    paragraphs: [
      'We build the control plane in your tenant: the agent, the deterministic steps, the retrieval that respects permissions, and the approval gates. Answers are grounded in approved evidence, quoted verbatim, and marked as a gap where evidence is missing. The agent never invents.',
      'We prove it before it goes live: measured against the golden set, then piloted with one internal team on real cases, against thresholds agreed in advance, with a rollback plan live. The evaluation report is signed by your grader, not by us.',
      'Then we hand it over, and prove the handover worked: your team runs the golden set unaided and passes. You keep the agents and flows in your tenant, the code in your repository, the ontology estate and shared spine, the evaluation harness, the documentation and runbooks, and a credential-transfer procedure so no access path depends on us. Thirty days of post-handover fixes are included.',
      'Tune is fixed-fee for the 90 days after handover: a weekly human sample of real cases, failed cases turned into regression tests, monthly reports against the baseline, and a written continue, expand, or stop decision at day 90. Tune guarantees measurement, regression coverage, and an honest decision, not improvement.',
    ],
  },
  includes: {
    eyebrow: 'Every Engagement Includes',
    title: 'Built In Your Estate, Yours To Keep',
    items: [
      {
        title: 'Built In Your Estate',
        body: 'Built in your own estate, against your governed sources only, no separate store of your data, no proprietary platform.',
      },
      {
        title: 'Human Approval',
        body: 'Human approval on every consequential decision, bound to the exact content reviewed. On a first engagement, the agent suggests; a human commits.',
      },
      {
        title: 'Full Audit Logging',
        body: 'Full audit logging: what the system did, what evidence it used, and who approved it.',
      },
      {
        title: 'The Ontology Layer',
        body: 'The ontology layer: your business modelled once per engagement, plus a thin shared spine that later engagements reuse and extend, owned by you, exportable in open standard formats.',
      },
    ],
  },
  refusals: {
    eyebrow: 'What We Do Not Do',
    title: 'The Lines We Hold',
    items: [
      'No auto-writes on a first engagement.',
      'No build without a signed baseline.',
      'No demo-ware: a pilot runs on real cases, not a script.',
      'No outcome warranty. We warrant the system against its agreed specification and acceptance criteria, not business results.',
      'No vague compliance claims.',
      'No platform lock-in, no hourly billing, no per-case cost promise.',
    ],
    closing:
      'Scope is confirmed in writing before work starts. Changes go through written change orders, repriced before work, never by conversation. Pricing itself is set at scoping, once the process is mapped.',
  },
}
