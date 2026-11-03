import { ButtonLink } from '@/components/button-link'
import { SectionLabel } from '@/components/section'
import { hero } from '@/content/hero'

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="px-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 pt-16 pb-14 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
        <div className="flex flex-col gap-6">
          <div className="animate-rise-fade motion-reduce:animate-none">
            <SectionLabel>{hero.eyebrow}</SectionLabel>
          </div>
          <h1
            id="hero-title"
            className="max-w-4xl animate-rise font-heading text-5xl leading-none font-medium tracking-tight text-balance delay-75 motion-reduce:animate-none sm:text-6xl lg:text-7xl"
          >
            {hero.title}
          </h1>
          <p className="max-w-2xl animate-rise-fade text-lg text-pretty text-muted-foreground delay-150 motion-reduce:animate-none sm:text-xl">
            {hero.description}
          </p>
          <div className="flex animate-rise-fade flex-wrap items-center gap-3 delay-200 motion-reduce:animate-none">
            <ButtonLink href={hero.primaryAction.href} size="lg">
              {hero.primaryAction.label}
            </ButtonLink>
            <ButtonLink href={hero.secondaryAction.href} variant="outline" size="lg">
              {hero.secondaryAction.label}
            </ButtonLink>
          </div>
        </div>

        {/* The terms of an engagement, under the headline like a masthead. */}
        <dl className="grid animate-rise-fade grid-cols-2 gap-x-8 gap-y-6 border-t pt-6 delay-300 motion-reduce:animate-none lg:grid-cols-4">
          {hero.facts.map((fact) => (
            <div key={fact.term} className="flex flex-col gap-1">
              <dt className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                {fact.term}
              </dt>
              <dd className="font-heading text-xl font-medium sm:text-2xl">{fact.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
