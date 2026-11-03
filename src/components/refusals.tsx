import { ButtonLink } from '@/components/button-link'
import { Section, SectionHeading } from '@/components/section'
import { refusals } from '@/content/refusals'

export function Refusals() {
  return (
    <Section id="refusals" number="05" label={refusals.eyebrow}>
      <SectionHeading
        sectionId="refusals"
        title={refusals.title}
        description={refusals.description}
      />
      <ul className="grid gap-x-8 sm:grid-cols-2">
        {refusals.items.map((item) => (
          <li key={item} className="flex reveal items-baseline gap-4 border-t py-4">
            <span aria-hidden="true" className="font-mono text-sm text-muted-foreground">
              No
            </span>
            <h3 className="font-heading text-xl font-medium">{item.replace(/^No /, '')}</h3>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-6">
        <p className="max-w-2xl text-pretty text-muted-foreground">{refusals.closing}</p>
        <div>
          <ButtonLink href={refusals.action.href} variant="outline" size="lg">
            {refusals.action.label}
          </ButtonLink>
        </div>
      </div>
    </Section>
  )
}
