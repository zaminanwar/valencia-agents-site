import { Section, SectionHeading } from '@/components/section'
import { gap } from '@/content/gap'

export function Gap() {
  return (
    <Section id="gap">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <SectionHeading
          sectionId="gap"
          eyebrow={gap.eyebrow}
          title={gap.title}
          description={gap.description}
        />
        <div className="mx-auto flex max-w-2xl flex-col gap-4">
          {gap.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-pretty text-muted-foreground sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  )
}
