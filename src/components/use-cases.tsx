import { CtaLink } from '@/components/cta-link'
import { IconTile } from '@/components/icon-tile'
import { Section, SectionHeading } from '@/components/section'
import { useCasesContent } from '@/content/use-cases'

export function UseCases() {
  return (
    <Section id="use-cases">
      <div className="flex flex-col items-center gap-14">
        <SectionHeading
          sectionId="use-cases"
          align="center"
          eyebrow={useCasesContent.eyebrow}
          title={useCasesContent.title}
          description={useCasesContent.description}
        />
        <ul className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {useCasesContent.items.map((item) => (
            <li
              key={item.title}
              className="flex reveal flex-col gap-6 rounded-2xl bg-muted p-6 transition-colors hover:bg-accent"
            >
              <IconTile icon={item.icon} />
              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-2xl leading-none tracking-tight text-balance">
                  {item.title}
                </h3>
                <p className="text-base tracking-tight text-pretty text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <CtaLink href={useCasesContent.action.href}>{useCasesContent.action.label}</CtaLink>
      </div>
    </Section>
  )
}
