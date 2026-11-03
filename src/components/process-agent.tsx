import { RuledList, Section, SectionHeading } from '@/components/section'
import { processAgent } from '@/content/process-agent'

export function ProcessAgent() {
  return (
    <Section id="process-agent" number="02" label={processAgent.eyebrow}>
      <SectionHeading
        sectionId="process-agent"
        title={processAgent.title}
        description={processAgent.description}
      />
      <RuledList items={processAgent.items} />
    </Section>
  )
}
