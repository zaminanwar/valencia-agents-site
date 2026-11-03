import { Prose, Section, SectionTitle } from '@/components/section'
import { gap } from '@/content/gap'

export function Gap() {
  return (
    <Section id="gap" number="01" label={gap.eyebrow}>
      <div className="flex reveal flex-col gap-6">
        <SectionTitle sectionId="gap">{gap.title}</SectionTitle>
        <p className="max-w-3xl font-heading text-2xl leading-snug text-pretty sm:text-3xl">
          {gap.statement}
        </p>
      </div>
      <Prose paragraphs={gap.paragraphs} />
    </Section>
  )
}
