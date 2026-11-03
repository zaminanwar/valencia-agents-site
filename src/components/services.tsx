import { IconTile } from '@/components/icon-tile'
import { Section, SectionHeading } from '@/components/section'
import { servicesContent } from '@/content/services'

export function Services() {
  const { note } = servicesContent
  return (
    <Section id="services" tone="muted">
      <div className="flex flex-col gap-14">
        <SectionHeading
          sectionId="services"
          tone="muted"
          eyebrow={servicesContent.eyebrow}
          title={servicesContent.title}
          description={servicesContent.description}
        />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicesContent.items.map((item, index) => (
            <li
              key={item.title}
              className="flex reveal flex-col gap-6 rounded-2xl bg-background p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <IconTile icon={item.icon} />
                <span className="text-sm tracking-tight text-muted-foreground">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-2xl leading-none tracking-tight">{item.title}</h3>
                <p className="text-base tracking-tight text-pretty text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* No new tools: the ecosystems as a plain list, set in text rather than logos. */}
        <div className="flex reveal flex-col gap-5 border-t pt-10">
          <p className="max-w-2xl font-heading text-2xl leading-tight tracking-tight text-balance sm:text-3xl">
            {note.title}
          </p>
          <p className="max-w-2xl text-base tracking-tight text-pretty text-muted-foreground">
            {note.body}
          </p>
          <ul className="flex flex-wrap items-baseline gap-x-5 gap-y-2 text-base tracking-tight">
            {note.ecosystems.map((name) => (
              <li key={name}>{name}</li>
            ))}
            <li className="text-muted-foreground">{note.more}</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
