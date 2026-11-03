import { ButtonLink } from '@/components/button-link'
import { PageHero } from '@/components/page-hero'
import { PageSection } from '@/components/page-section'
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
        eyebrow={services.discovery.eyebrow}
        title={services.discovery.title}
        description={services.discovery.description}
      >
        <ul className="grid gap-5 sm:grid-cols-2">
          {services.discovery.outputs.map((output) => (
            <li key={output.title} className="flex flex-col gap-1.5 rounded-2xl border bg-card p-6">
              <h3 className="font-heading font-semibold">{output.title}</h3>
              <p className="text-sm text-pretty text-muted-foreground">{output.body}</p>
            </li>
          ))}
        </ul>
        <p className="max-w-2xl text-pretty text-muted-foreground sm:text-lg">
          {services.discovery.closing}
        </p>
      </PageSection>

      <PageSection
        id="implementation"
        eyebrow={services.implementation.eyebrow}
        title={services.implementation.title}
        description={services.implementation.description}
      >
        <div className="flex max-w-2xl flex-col gap-4">
          {services.implementation.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-pretty text-muted-foreground sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </PageSection>

      <PageSection
        id="includes"
        eyebrow={services.includes.eyebrow}
        title={services.includes.title}
      >
        <ul className="grid gap-5 sm:grid-cols-2">
          {services.includes.items.map((item) => (
            <li key={item.title} className="flex flex-col gap-1.5 rounded-2xl border bg-card p-6">
              <h3 className="font-heading font-semibold">{item.title}</h3>
              <p className="text-sm text-pretty text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection
        id="refusals"
        eyebrow={services.refusals.eyebrow}
        title={services.refusals.title}
      >
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.refusals.items.map((item) => (
            <li key={item} className="rounded-2xl border bg-card p-6">
              <h3 className="font-heading font-semibold">{item}</h3>
            </li>
          ))}
        </ul>
        <p className="max-w-2xl text-pretty text-muted-foreground sm:text-lg">
          {services.refusals.closing}
        </p>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/how-we-work" size="lg">
            Read The Method
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary" size="lg">
            Start With A Conversation
          </ButtonLink>
        </div>
      </PageSection>
    </>
  )
}
