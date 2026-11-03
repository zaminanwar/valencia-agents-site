import { Section, SectionHeading } from '@/components/section'
import { aboutContent } from '@/content/about'

export function About() {
  return (
    <Section id="about" tone="muted">
      <div className="flex flex-col items-center gap-14">
        <SectionHeading
          sectionId="about"
          align="center"
          tone="muted"
          eyebrow={aboutContent.eyebrow}
          title={aboutContent.title}
        />
        <div className="flex w-full max-w-3xl reveal flex-col gap-6 rounded-2xl bg-background p-8 sm:p-10">
          <h3 className="max-w-xl font-heading text-3xl leading-none tracking-tight text-balance sm:text-4xl">
            {aboutContent.card.title}
          </h3>
          <p className="max-w-2xl text-base tracking-tight text-pretty text-muted-foreground">
            {aboutContent.card.body}
          </p>
          <p className="text-base tracking-tight text-muted-foreground">{aboutContent.card.role}</p>
        </div>
        <p className="max-w-2xl text-center font-heading text-2xl leading-tight tracking-tight text-balance text-muted-foreground sm:text-3xl">
          {aboutContent.note}
        </p>
      </div>
    </Section>
  )
}
