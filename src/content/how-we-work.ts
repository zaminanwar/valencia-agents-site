import {
  BanknoteIcon,
  KeyRoundIcon,
  ListChecksIcon,
  NetworkIcon,
  SearchIcon,
  ShieldCheckIcon,
  ShieldIcon,
} from 'lucide-react'

export const howWeWork = {
  hero: {
    eyebrow: { icon: ListChecksIcon, lead: 'The', emphasis: 'Method' },
    title: 'How we work.',
    lede: 'One process at a time. Seven stages. Each stage ends with something you can check.',
  },
  problem: {
    eyebrow: { icon: SearchIcon, lead: '01', emphasis: 'The Problem' },
    title: 'The Gap Is Not The Model',
    paragraphs: [
      'AI capability is no longer the hard part. The models are good. What is hard is turning a real business process into something an agent can run safely.',
      'That gap is where most efforts stall. It is not one problem, it is several: mapping the process as it actually runs, including the exceptions; deciding who approves what; making sure the agent sees only what each user is allowed to see; grounding every answer in approved records; proving the system works before it touches real cases; and being able to say who is accountable when it runs.',
      'We work that gap. We do not sell a model, a demo, or advice. We build a working process, in your systems, and hand it over to you.',
      'We focus on back-office knowledge work: reading, synthesizing, judging, and deciding from documents and systems. RFP response is the kind of work we start with, because its quality can be checked exactly: did it cover every requirement, and did it claim anything the evidence does not support?',
    ],
  },
  principle: {
    eyebrow: { icon: ShieldCheckIcon, lead: '02', emphasis: 'The Principle' },
    title: 'The Model Does Not Run The Process',
    description:
      'A deterministic control plane does. The model works inside it. A human owns the consequences.',
    owners: [
      {
        title: 'Code Owns The Transaction',
        body: 'The same step runs the same way every time.',
      },
      {
        title: 'The Model Owns Judgment Inside Bounded Steps',
        body: 'It drafts, checks, and triages, never on its own authority.',
      },
      {
        title: 'The Human Owns The Consequences',
        body: 'Nothing consequential happens without a person deciding on the exact content in front of them.',
      },
    ],
    paragraphs: [
      'Prompts are not controls. An instruction telling the model to behave is not a control. A control is something the system enforces: a gate the workflow runs, a permission the retrieval respects, an approval bound to the exact text reviewed. If the model can bypass it by wording, it is not a control, and we do not count it as one.',
      'We also fit first. We build the agent to match how your office already works. We do not redesign your process as a precondition. Improvement comes later, from what the running system shows, not from a redesign workshop before anything exists.',
    ],
  },
  stages: {
    eyebrow: { icon: ListChecksIcon, lead: '03', emphasis: 'The Seven Stages' },
    title: 'Each Stage Ends With Something You Can Check',
    items: [
      {
        name: 'Qualify',
        body: 'We check whether the work can be built at all. The process must have a system of record we can reach. Its content must already live in a governed store. Four roles must exist on your side: someone who owns the number, someone who grades the work, someone who owns the content, and someone from IT and security. And your team must be willing to pilot before anything goes live.',
        get: 'A straight answer on whether to proceed. If any of those are missing, we say so, and we do not start.',
        owe: 'The four roles, named, and an honest walkthrough of how the work runs today.',
      },
      {
        name: 'Discover',
        body: 'We map the process with the people who do it, not from a sales call. We sort every step into what should be deleted, what is plain code, what the agent should do, and what stays a human decision. We agree in writing what the agent will never do on its own. We check the content: who owns each item, whether it is approved, whether it is current. And we build a golden set, real cases, with correct outputs and reasons, agreed with the person who grades them.',
        get: 'A signed process map, a content-readiness report, and a golden set with a grading rubric.',
        owe: 'Time with the people who do the work, access to the content, and grading time from your subject expert.',
      },
      {
        name: 'Baseline',
        body: 'Before anything is built, we measure how the work performs today: volume, wait times, time per item, error rate on a held-back sample, exception rate, and review time per case. Every number has its source written down. You sign the baseline.',
        get: 'A signed baseline report. It is the denominator for every measurement that follows.',
        owe: 'The numbers, and a signature from the person who owns them.',
      },
      {
        name: 'Build',
        body: 'We build the control plane in your tenant: the agent, the deterministic steps, the retrieval that respects permissions, and the approval gates. Answers are grounded in approved evidence, quoted verbatim, and marked as a gap where evidence is missing. The agent never invents.',
        get: 'A working system in your systems, not ours.',
        owe: 'Security-review cooperation from the start, the review is the critical path, not the build, and approval time. Each approval means reading the exact content and deciding, not rubber-stamping.',
      },
      {
        name: 'Prove',
        body: 'We measure the system against the golden set, then pilot it with one internal team on real cases, with a rollback plan live. We measure requirement coverage, unsupported claims (target: zero), late-found gaps, reviewer acceptance, and revision cycles. Writing speed is not a metric. The evaluation report is signed by your grader, not by us.',
        get: 'An evaluation report and a pilot report, measured against the baseline you signed.',
        owe: 'A pilot team, and a go or no-go decision against thresholds agreed before the pilot, not invented during it.',
      },
      {
        name: 'Hand Over',
        body: 'We hand the system over, and we prove the handover worked: your team runs the golden set unaided and passes. Everything in the handover promise below is delivered in your tenant and accounts.',
        get: 'A system your team can run, check, and change.',
        owe: 'The people who will own it afterward, in the room for training.',
      },
      {
        name: 'Tune',
        body: 'For 90 days after handover, we keep it honest. A weekly human sample of real cases. Failed cases become regression tests. A monthly report against the baseline. At day 90, a written continue, expand, or stop decision.',
        get: 'Monthly reports and a day-90 decision memo.',
        owe: 'A decision at day 90. Tune guarantees measurement, regression coverage, and an honest decision, not improvement.',
      },
    ],
  },
  guarantees: {
    eyebrow: { icon: ShieldIcon, lead: '04', emphasis: 'Guarantees And Refusals' },
    title: 'A Firm That Never Says No Is A Vendor, Not A Consultant',
    description:
      'These are the lines we hold, and they are the reason to believe the rest of this page.',
    items: [
      {
        title: 'No Auto-Writes On The First Engagement',
        body: 'The agent suggests. A human commits. On the first engagement, the agent never writes a committed transaction into a system of record on its own.',
      },
      {
        title: 'No Build Without A Signed Baseline',
        body: 'If today is not measured, we cannot prove tomorrow is better. We do not build first and measure later.',
      },
      {
        title: 'No Demo-Ware',
        body: 'We do not build a demo and call it a system. A pilot is not a demo: it runs on real cases, against thresholds agreed in advance. And a discovery that concludes the process should not be built counts as delivery, not failure.',
      },
      {
        title: 'No Outcome Warranty',
        body: 'We warrant the system against its agreed specification and acceptance criteria. We do not warrant business results, accuracy percentages, or hours saved. None measured means none promised.',
      },
      {
        title: 'No Vague Compliance Claims',
        body: 'We do not claim compliance or certification readiness. What we say is precise: what your estate already provides, what we design in (permission-respecting retrieval, approval bound to exact content, full audit logging, evaluation gates), and what we do not claim. If you require a certification we do not hold, that is a scoping conversation, not a claim to paper over.',
      },
      {
        title: 'No Platform Lock-In',
        body: 'We build no proprietary platform and run no vendor knowledge store. There is nothing to subscribe to after we leave, and no licence fee to us after exit.',
      },
    ],
  },
  handover: {
    eyebrow: { icon: KeyRoundIcon, lead: '05', emphasis: 'The Handover Promise' },
    title: 'When We Hand Over, You Keep Everything',
    description: 'Not access to it. Ownership of it.',
    items: [
      'The agents and flows, in your tenant.',
      'The code, in your repository.',
      'The ontology estate and shared spine, with its governance documents.',
      'The evaluation harness: golden sets, rubric, and run records. You can re-run the evaluations unaided.',
      'Plain-English documentation and runbooks: operations, failure modes, rollback, secret rotation, and the model-change procedure.',
      'A credential-transfer procedure, so no access path depends on us.',
      'Training for all four client roles, as part of delivery, not an add-on.',
      '30 days of post-handover fixes.',
      'An exit export: every artefact, plus logs and decision traces, accessible to you after termination.',
    ],
    closing:
      'On exit, we remove our access. You keep the system. Revocable access is not a handover.',
  },
  commercial: {
    eyebrow: { icon: BanknoteIcon, lead: '06', emphasis: 'The Commercial Shape' },
    title: 'Fixed-Price Throughout',
    description: 'Set at scoping, once the process is mapped.',
    offers: [
      {
        title: 'Discovery',
        body: 'Fixed-price. It answers whether the process can and should be built, and produces the map, the baseline, the golden set, and costed build options.',
      },
      {
        title: 'Build',
        body: 'Fixed-price. Discovery is credited into the build when the build follows within an agreed window.',
      },
      {
        title: 'Tune',
        body: 'Fixed-fee for the 90-day window.',
      },
    ],
    paragraphs: [
      'Scope is confirmed in writing before work starts. Changes go through written change orders, repriced before work, never by conversation. Acceptance is against the criteria named in the scope, not against a feeling that the work is done.',
      'Our fee does not vary with outcomes. Accountability lives in the acceptance criteria and the handover, not in the invoice. We make no per-case cost promise, and we do not bill by the hour.',
      'Platform and usage costs run on your accounts at cost. We do not mark them up. Pricing itself is set at scoping, once the process is mapped.',
    ],
  },
  ontology: {
    eyebrow: { icon: NetworkIcon, lead: '07', emphasis: 'The Ontology Layer' },
    title: 'Your Business, Modelled Once',
    description: 'A spine later engagements reuse.',
    paragraphs: [
      'Every business has the same quiet problem: its meaning is scattered. What a customer, an order, a requirement, or a machine means lives in prompts, notebooks, report definitions, and memory. Every new agent re-interprets the same data independently, and drifts.',
      'For each engagement, we model the business once: the entities, how they relate, the rules that govern them, and the trusted calculations that measure them. The model is bound to your live data. It does not copy your data into a new store. People, dashboards, and agents then use the same vocabulary, in your words, not in table names.',
      'Alongside the model for each engagement, we build a thin shared spine: stable identities for the things every part of the business shares, one definition per term, mappings where two domains meet, and a register of every model built. The spine is designed on day one, even though models are built one at a time.',
      'The spine compounds. A later engagement in your company reuses and extends it instead of starting over. That is a legitimate return path, not lock-in: you own the models, the spine, and the governance documents. Nothing from your estate is shared with another client, except the method itself.',
      'The ontology layer is built in your own estate, against your governed sources only. Changes are proposed, reviewed by your people, and versioned, never applied silently. And the model is exportable in open standard formats, so you own it even if you ever leave the platform.',
    ],
  },
}
