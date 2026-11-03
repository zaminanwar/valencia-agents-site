import { ButtonLink } from '@/components/button-link'
import { PageHero } from '@/components/page-hero'
import { PageSection } from '@/components/page-section'
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

      <PageSection id="what-we-do" eyebrow={about.whatWeDo.eyebrow} title={about.whatWeDo.title}>
        <div className="flex max-w-2xl flex-col gap-4">
          {about.whatWeDo.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-pretty text-muted-foreground sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </PageSection>

      <PageSection id="what-we-are-not" eyebrow={about.notList.eyebrow} title={about.notList.title}>
        <ul className="grid gap-5 sm:grid-cols-2">
          {about.notList.items.map((item) => (
            <li key={item.title} className="flex flex-col gap-1.5 rounded-2xl border bg-card p-6">
              <h3 className="font-heading font-semibold">{item.title}</h3>
              <p className="text-sm text-pretty text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection id="honestly" eyebrow={about.honestly.eyebrow} title={about.honestly.title}>
        <div className="flex max-w-2xl flex-col gap-4">
          {about.honestly.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-pretty text-muted-foreground sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={about.honestly.primaryAction.href} size="lg">
            {about.honestly.primaryAction.label}
          </ButtonLink>
          <ButtonLink href={about.honestly.secondaryAction.href} variant="secondary" size="lg">
            {about.honestly.secondaryAction.label}
          </ButtonLink>
        </div>
      </PageSection>
    </>
  )
}
