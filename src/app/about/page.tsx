import { ButtonLink } from '@/components/button-link'
import { PageHero } from '@/components/page-hero'
import { PageSection } from '@/components/page-section'
import { Prose, RuledList } from '@/components/section'
import { about } from '@/content/about'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'About',
  description:
    'Valencia Agents is a consultancy in formation: a forward-deployed boutique that builds process agents inside your own estate and hands them over.',
  path: '/about',
})

export default function About() {
  return (
    <>
      <PageHero
        id="top"
        eyebrow={about.hero.eyebrow}
        title={about.hero.title}
        ledes={[about.hero.lede]}
      />

      <PageSection
        id="what-we-do"
        number="01"
        eyebrow={about.whatWeDo.eyebrow}
        title={about.whatWeDo.title}
      >
        <Prose paragraphs={about.whatWeDo.paragraphs} />
      </PageSection>

      <PageSection
        id="what-we-are-not"
        number="02"
        eyebrow={about.notList.eyebrow}
        title={about.notList.title}
      >
        <RuledList items={about.notList.items} />
      </PageSection>

      <PageSection
        id="honestly"
        number="03"
        eyebrow={about.honestly.eyebrow}
        title={about.honestly.title}
      >
        <Prose paragraphs={about.honestly.paragraphs} />
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={about.honestly.primaryAction.href} size="lg">
            {about.honestly.primaryAction.label}
          </ButtonLink>
          <ButtonLink href={about.honestly.secondaryAction.href} variant="outline" size="lg">
            {about.honestly.secondaryAction.label}
          </ButtonLink>
        </div>
      </PageSection>
    </>
  )
}
