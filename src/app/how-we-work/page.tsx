import { ButtonLink } from '@/components/button-link'
import { PageHero } from '@/components/page-hero'
import { PageSection } from '@/components/page-section'
import { Prose, RuledList } from '@/components/section'
import { howWeWork } from '@/content/how-we-work'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'How We Work',
  description:
    'The Valencia Agents method: one process at a time, seven stages, each ending with something you can check, and a handover at the end.',
  path: '/how-we-work',
})

export default function HowWeWork() {
  return (
    <>
      <PageHero
        id="top"
        eyebrow={howWeWork.hero.eyebrow}
        title={howWeWork.hero.title}
        ledes={[howWeWork.hero.lede]}
      />

      <PageSection
        id="problem"
        number="01"
        eyebrow={howWeWork.problem.eyebrow}
        title={howWeWork.problem.title}
      >
        <Prose paragraphs={howWeWork.problem.paragraphs} />
      </PageSection>

      <PageSection
        id="principle"
        number="02"
        eyebrow={howWeWork.principle.eyebrow}
        title={howWeWork.principle.title}
        description={howWeWork.principle.description}
      >
        <RuledList items={howWeWork.principle.owners} columns={3} />
        <Prose paragraphs={howWeWork.principle.paragraphs} />
      </PageSection>

      <PageSection
        id="seven-stages"
        number="03"
        eyebrow={howWeWork.stages.eyebrow}
        title={howWeWork.stages.title}
      >
        <ol className="flex flex-col">
          {howWeWork.stages.items.map((stage, index) => (
            <li
              key={stage.name}
              className="grid reveal gap-4 border-t py-8 sm:grid-cols-12 sm:gap-8"
            >
              <div className="flex items-baseline gap-4 sm:col-span-4">
                <span className="font-mono text-sm text-muted-foreground">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-heading text-2xl font-medium sm:text-3xl">{stage.name}</h3>
              </div>
              <div className="flex flex-col gap-5 sm:col-span-8">
                <p className="text-pretty text-muted-foreground">{stage.body}</p>
                <dl className="grid gap-4 border-t pt-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1">
                    <dt className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                      What You Get
                    </dt>
                    <dd className="text-sm text-pretty">{stage.get}</dd>
                  </div>
                  <div className="flex flex-col gap-1">
                    <dt className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                      What We Need From You
                    </dt>
                    <dd className="text-sm text-pretty">{stage.owe}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ol>
      </PageSection>

      <PageSection
        id="guarantees"
        number="04"
        eyebrow={howWeWork.guarantees.eyebrow}
        title={howWeWork.guarantees.title}
        description={howWeWork.guarantees.description}
      >
        <RuledList items={howWeWork.guarantees.items} />
      </PageSection>

      <PageSection
        id="handover"
        number="05"
        eyebrow={howWeWork.handover.eyebrow}
        title={howWeWork.handover.title}
        description={howWeWork.handover.description}
      >
        <ul className="grid gap-x-8 sm:grid-cols-2">
          {howWeWork.handover.items.map((item) => (
            <li key={item} className="reveal border-t py-3 text-pretty text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
        <p className="max-w-2xl font-heading text-xl leading-snug text-pretty sm:text-2xl">
          {howWeWork.handover.closing}
        </p>
      </PageSection>

      <PageSection
        id="commercial"
        number="06"
        eyebrow={howWeWork.commercial.eyebrow}
        title={howWeWork.commercial.title}
        description={howWeWork.commercial.description}
      >
        <RuledList items={howWeWork.commercial.offers} columns={3} />
        <Prose paragraphs={howWeWork.commercial.paragraphs} />
      </PageSection>

      <PageSection
        id="ontology"
        number="07"
        eyebrow={howWeWork.ontology.eyebrow}
        title={howWeWork.ontology.title}
        description={howWeWork.ontology.description}
      >
        <Prose paragraphs={howWeWork.ontology.paragraphs} />
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact" size="lg">
            Tell Us About A Process
          </ButtonLink>
          <ButtonLink href="/services" variant="outline" size="lg">
            See The Services
          </ButtonLink>
        </div>
      </PageSection>
    </>
  )
}
