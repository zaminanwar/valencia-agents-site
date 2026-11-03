import {
  BotIcon,
  GraduationCapIcon,
  LayersIcon,
  MessageSquareTextIcon,
  SearchIcon,
  WorkflowIcon,
} from 'lucide-react'

export const servicesContent = {
  eyebrow: 'Services',
  title: 'From a first audit to a department that works differently.',
  description: 'Six ways we help, in the order an engagement usually runs.',
  items: [
    {
      icon: SearchIcon,
      title: 'AI workflow audit',
      body: 'Review where time is being lost, where decisions slow down, and where AI can remove friction first.',
    },
    {
      icon: MessageSquareTextIcon,
      title: 'Copilots',
      body: 'An assistant inside the tools your engineers already use. It drafts, summarises, and answers questions on demand, and a person decides what to do with the result.',
    },
    {
      icon: BotIcon,
      title: 'Agents',
      body: 'Software that takes on a bounded task end to end, such as screening a submittal against a spec, and hands back a finished result for review.',
    },
    {
      icon: WorkflowIcon,
      title: 'Agentic workflows',
      body: 'Several agents and deterministic steps chained into a process that runs itself, from the moment a document arrives to the moment a person signs off.',
    },
    {
      icon: LayersIcon,
      title: 'Transformations',
      body: 'The department working differently, with the processes above in place and the team running them. We believe transformations happen from the ground up, with the right strategy, not from the top down.',
    },
    {
      icon: GraduationCapIcon,
      title: 'Team enablement',
      body: 'Your engineers trained to run, trust, and improve what was built, so the gains last after the engagement ends.',
    },
  ],
  // The closing note: no new tools.
  note: {
    title: 'We meet you where you are, with the AI tools you already have.',
    body: 'The last thing you need is more tools, and we are not trying to sell you one.',
    ecosystems: [
      'Microsoft',
      'Google',
      'Amazon',
      'OpenAI',
      'Anthropic',
      'Snowflake',
      'Databricks',
      'SAP',
      'Salesforce',
    ],
    more: 'and other ecosystems',
  },
}
