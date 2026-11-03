import { ButtonLink } from '@/components/button-link'
import { Prose, Section, SectionTitle } from '@/components/section'
import { newFirm } from '@/content/new-firm'

export function NewFirm() {
  return (
    <Section id="about" number="06" label={newFirm.eyebrow}>
      <div className="flex reveal flex-col gap-6">
        <SectionTitle sectionId="about">{newFirm.title}</SectionTitle>
        <Prose paragraphs={newFirm.paragraphs} />
      </div>
      <div>
        <ButtonLink href={newFirm.action.href} variant="outline" size="lg">
          {newFirm.action.label}
        </ButtonLink>
      </div>
    </Section>
  )
}
