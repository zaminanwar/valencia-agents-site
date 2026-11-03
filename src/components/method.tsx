import { ButtonLink } from '@/components/button-link'
import { Section, SectionHeading } from '@/components/section'
import { method } from '@/content/method'

// The seven stages as a table: the number and name on the left, what you get on the right.
export function Method() {
  return (
    <Section id="method" number="04" label={method.eyebrow}>
      <SectionHeading sectionId="method" title={method.title} description={method.description} />
      <ol className="flex flex-col">
        {method.stages.map((stage, index) => (
          <li
            key={stage.name}
            className="grid reveal gap-2 border-t py-5 sm:grid-cols-12 sm:gap-8 sm:py-6"
          >
            <div className="flex items-baseline gap-4 sm:col-span-4">
              <span className="font-mono text-sm text-muted-foreground">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-heading text-2xl font-medium">{stage.name}</h3>
            </div>
            <p className="text-pretty text-muted-foreground sm:col-span-8">{stage.get}</p>
          </li>
        ))}
      </ol>
      <div>
        <ButtonLink href={method.action.href} variant="outline" size="lg">
          {method.action.label}
        </ButtonLink>
      </div>
    </Section>
  )
}
