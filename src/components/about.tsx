import { Section, SectionHeading } from '@/components/section'
import { aboutContent } from '@/content/about'

export function About() {
  return (
    <Section id="about">
      <div className="flex flex-col items-center gap-14">
        <SectionHeading
          sectionId="about"
          align="center"
          eyebrow={aboutContent.eyebrow}
          title={aboutContent.title}
        />
        <div className="flex w-full max-w-3xl reveal flex-col gap-6 rounded-2xl bg-muted p-8 sm:p-10">
          <h3 className="max-w-xl font-heading text-3xl leading-none tracking-tight text-balance sm:text-4xl">
            {aboutContent.card.title}
          </h3>
          {aboutContent.card.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-2xl text-base tracking-tight text-pretty text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
          <p className="text-base tracking-tight text-muted-foreground">{aboutContent.card.role}</p>
        </div>
        <dl className="grid w-full max-w-3xl gap-8 sm:grid-cols-3">
          {aboutContent.facts.map((fact) => (
            <div key={fact.figure} className="flex reveal flex-col gap-2 border-t pt-4">
              <dt className="order-2 text-sm tracking-tight text-pretty text-muted-foreground">
                {fact.label}
              </dt>
              <dd className="order-1 font-heading text-4xl leading-none tracking-tight">
                {fact.figure}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
