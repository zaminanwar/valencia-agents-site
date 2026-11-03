import { ButtonLink } from '@/components/button-link'
import { PageHero } from '@/components/page-hero'
import { PageSection } from '@/components/page-section'
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

      <PageSection id="problem" eyebrow={howWeWork.problem.eyebrow} title={howWeWork.problem.title}>
        <div className="flex max-w-2xl flex-col gap-4">
          {howWeWork.problem.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-pretty text-muted-foreground sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </PageSection>

      <PageSection
        id="principle"
        eyebrow={howWeWork.principle.eyebrow}
        title={howWeWork.principle.title}
        description={howWeWork.principle.description}
      >
        <p className="text-pretty text-muted-foreground sm:text-lg">Three owners, kept separate:</p>
        <ul className="grid gap-5 sm:grid-cols-3">
          {howWeWork.principle.owners.map((owner) => (
            <li key={owner.title} className="flex flex-col gap-1.5 rounded-2xl border bg-card p-6">
              <h3 className="font-heading font-semibold">{owner.title}</h3>
              <p className="text-sm text-pretty text-muted-foreground">{owner.body}</p>
            </li>
          ))}
        </ul>
        <div className="flex max-w-2xl flex-col gap-4">
          {howWeWork.principle.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-pretty text-muted-foreground sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </PageSection>

      <PageSection
        id="seven-stages"
        eyebrow={howWeWork.stages.eyebrow}
        title={howWeWork.stages.title}
      >
        <ol className="flex flex-col">
          {howWeWork.stages.items.map((stage, index) => (
            <li key={stage.name} className="flex gap-6 border-t py-8 last:border-b">
              <span className="w-12 shrink-0 pt-1 font-mono text-sm text-muted-foreground">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-col gap-4">
                <h3 className="font-heading font-semibold">{stage.name}</h3>
                <p className="max-w-2xl text-pretty text-muted-foreground sm:text-lg">
                  {stage.body}
                </p>
                <p className="max-w-2xl text-pretty text-muted-foreground">
                  <strong className="text-foreground">What you get:</strong> {stage.get}
                </p>
                <p className="max-w-2xl text-pretty text-muted-foreground">
                  <strong className="text-foreground">What you owe:</strong> {stage.owe}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </PageSection>

      <PageSection
        id="guarantees"
        eyebrow={howWeWork.guarantees.eyebrow}
        title={howWeWork.guarantees.title}
        description={howWeWork.guarantees.description}
      >
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {howWeWork.guarantees.items.map((item) => (
            <li key={item.title} className="flex flex-col gap-1.5 rounded-2xl border bg-card p-6">
              <h3 className="font-heading font-semibold">{item.title}</h3>
              <p className="text-sm text-pretty text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection
        id="handover"
        eyebrow={howWeWork.handover.eyebrow}
        title={howWeWork.handover.title}
        description={howWeWork.handover.description}
      >
        <ul className="flex max-w-2xl list-disc flex-col gap-2 pl-6">
          {howWeWork.handover.items.map((item) => (
            <li key={item} className="text-pretty text-muted-foreground sm:text-lg">
              {item}
            </li>
          ))}
        </ul>
        <p className="max-w-2xl text-pretty text-muted-foreground sm:text-lg">
          {howWeWork.handover.closing}
        </p>
      </PageSection>

      <PageSection
        id="commercial"
        eyebrow={howWeWork.commercial.eyebrow}
        title={howWeWork.commercial.title}
        description={howWeWork.commercial.description}
      >
        <ul className="grid gap-5 sm:grid-cols-3">
          {howWeWork.commercial.offers.map((offer) => (
            <li key={offer.title} className="flex flex-col gap-1.5 rounded-2xl border bg-card p-6">
              <h3 className="font-heading font-semibold">{offer.title}</h3>
              <p className="text-sm text-pretty text-muted-foreground">{offer.body}</p>
            </li>
          ))}
        </ul>
        <div className="flex max-w-2xl flex-col gap-4">
          {howWeWork.commercial.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-pretty text-muted-foreground sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </PageSection>

      <PageSection
        id="ontology"
        eyebrow={howWeWork.ontology.eyebrow}
        title={howWeWork.ontology.title}
        description={howWeWork.ontology.description}
      >
        <div className="flex max-w-2xl flex-col gap-4">
          {howWeWork.ontology.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-pretty text-muted-foreground sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact" size="lg">
            Tell Us About A Process
          </ButtonLink>
          <ButtonLink href="/services" variant="secondary" size="lg">
            Services
          </ButtonLink>
        </div>
      </PageSection>
    </>
  )
}
