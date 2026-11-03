import { ButtonLink } from '@/components/button-link'
import { PageHero } from '@/components/page-hero'
import { PageSection } from '@/components/page-section'
import { Prose } from '@/components/section'
import { insights } from '@/content/insights'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Insights',
  description:
    'Notes on the method and on what real engagements teach. The newsletter is not live yet, and this page says so plainly instead of collecting addresses it cannot use.',
  path: '/insights',
})

export default function Insights() {
  return (
    <>
      <PageHero
        id="top"
        eyebrow={insights.hero.eyebrow}
        title={insights.hero.title}
        ledes={[insights.hero.lede]}
      />

      <PageSection
        id="what-this-will-be"
        number="01"
        eyebrow={insights.willBe.eyebrow}
        title={insights.willBe.title}
      >
        <Prose paragraphs={insights.willBe.paragraphs} />
        <div>
          <ButtonLink href={insights.willBe.primaryAction.href} variant="outline" size="lg">
            {insights.willBe.primaryAction.label}
          </ButtonLink>
        </div>
      </PageSection>

      <PageSection
        id="not-live"
        number="02"
        eyebrow={insights.notLive.eyebrow}
        title={insights.notLive.title}
      >
        <div className="max-w-2xl border-l-2 border-primary bg-card p-5">
          <p className="text-pretty text-muted-foreground">{insights.notLive.note}</p>
        </div>
        <Prose paragraphs={insights.notLive.paragraphs} />
        <div>
          <ButtonLink href={insights.notLive.primaryAction.href} size="lg">
            {insights.notLive.primaryAction.label}
          </ButtonLink>
        </div>
      </PageSection>
    </>
  )
}
