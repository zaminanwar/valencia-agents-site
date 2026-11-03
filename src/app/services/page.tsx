import { ButtonLink } from '@/components/button-link'
import { PageHero } from '@/components/page-hero'
import { PageSection } from '@/components/page-section'
import { Prose, RuledList } from '@/components/section'
import { services } from '@/content/services'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Services',
  description:
    'Two offers: fixed-price discovery that answers whether a process can and should be built, and done-for-you implementation that builds it and hands it over.',
  path: '/services',
})

export default function Services() {
  return (
    <>
      <PageHero
        id="top"
        eyebrow={services.hero.eyebrow}
        title={services.hero.title}
        ledes={[services.hero.lede]}
      />

      <PageSection
        id="discovery"
        number="01"
        eyebrow={services.discovery.eyebrow}
        title={services.discovery.title}
        description={services.discovery.description}
      >
        <RuledList items={services.discovery.outputs} />
        <Prose paragraphs={[services.discovery.closing]} />
      </PageSection>

      <PageSection
        id="implementation"
        number="02"
        eyebrow={services.implementation.eyebrow}
        title={services.implementation.title}
        description={services.implementation.description}
      >
        <Prose paragraphs={services.implementation.paragraphs} />
      </PageSection>

      <PageSection
        id="includes"
        number="03"
        eyebrow={services.includes.eyebrow}
        title={services.includes.title}
      >
        <RuledList items={services.includes.items} />
      </PageSection>

      <PageSection
        id="refusals"
        number="04"
        eyebrow={services.refusals.eyebrow}
        title={services.refusals.title}
      >
        <ul className="grid gap-x-8 sm:grid-cols-2">
          {services.refusals.items.map((item) => (
            <li key={item} className="reveal border-t py-4">
              <h3 className="font-heading text-xl font-medium text-pretty">{item}</h3>
            </li>
          ))}
        </ul>
        <Prose paragraphs={[services.refusals.closing]} />
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact" size="lg">
            Tell Us About A Process
          </ButtonLink>
          <ButtonLink href="/how-we-work" variant="outline" size="lg">
            Read The Method
          </ButtonLink>
        </div>
      </PageSection>
    </>
  )
}
