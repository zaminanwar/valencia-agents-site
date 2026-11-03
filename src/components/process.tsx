import { CtaLink } from '@/components/cta-link'
import { IconTile } from '@/components/icon-tile'
import { Section, SectionHeading } from '@/components/section'
import { processContent } from '@/content/process'

export function Process() {
  return (
    <Section id="how-it-works">
      <div className="flex flex-col items-center gap-14">
        <SectionHeading
          sectionId="how-it-works"
          align="center"
          eyebrow={processContent.eyebrow}
          title={processContent.title}
        />
        <ol className="relative grid w-full max-w-4xl gap-12 md:grid-cols-3 md:gap-8">
          {/* The line the three dots sit on, from the first step to the last. */}
          <span
            aria-hidden="true"
            className="absolute top-2 right-1/6 left-1/6 hidden h-0.5 bg-foreground/60 md:block"
          />
          {processContent.steps.map((step) => (
            <li key={step.title} className="flex reveal flex-col items-center gap-5 text-center">
              <span
                aria-hidden="true"
                className="relative hidden size-4 rounded-full bg-foreground/70 md:block"
              />
              <IconTile icon={step.icon} size="lg" className="md:mt-6" />
              <h3 className="font-heading text-3xl leading-9 font-medium tracking-tighter">
                {step.title}
              </h3>
              <p className="max-w-xs text-base tracking-tight text-pretty text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
        <CtaLink href={processContent.action.href}>{processContent.action.label}</CtaLink>
      </div>
    </Section>
  )
}
