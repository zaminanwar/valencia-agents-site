import { Prose, Section, SectionTitle } from '@/components/section'
import { fit } from '@/content/fit'

export function Fit() {
  return (
    <Section id="fit" number="03" label={fit.eyebrow}>
      <div className="flex reveal flex-col gap-6">
        <SectionTitle sectionId="fit">{fit.title}</SectionTitle>
        <Prose paragraphs={fit.paragraphs} />
      </div>
      <div className="grid gap-10 lg:grid-cols-12">
        <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:col-span-7">
          {fit.traits.map((trait) => (
            <li key={trait.title} className="flex reveal flex-col gap-1 border-t pt-4">
              <h3 className="font-medium">{trait.title}</h3>
              <p className="text-sm text-pretty text-muted-foreground">{trait.body}</p>
            </li>
          ))}
        </ul>
        <aside
          aria-label={fit.example.label}
          className="flex reveal flex-col gap-3 bg-card p-6 lg:col-span-5"
        >
          <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            {fit.example.label}
          </p>
          <p className="font-heading text-xl leading-snug text-pretty">{fit.example.body}</p>
        </aside>
      </div>
    </Section>
  )
}
