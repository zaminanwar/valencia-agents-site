import { ButtonLink } from '@/components/button-link'
import { SiteLink } from '@/components/site-link'
import { closing } from '@/content/closing'

// The last word on every visit: a band in the primary colour with one thing to do.
export function Closing() {
  return (
    <section
      id="get-started"
      aria-labelledby="get-started-title"
      className="bg-primary px-4 text-primary-foreground sm:px-6"
    >
      <div className="mx-auto grid max-w-6xl gap-8 py-16 sm:py-24 lg:grid-cols-12 lg:gap-10">
        <p className="text-xs font-medium tracking-widest text-primary-foreground/70 uppercase lg:col-span-3">
          {closing.eyebrow}
        </p>
        <div className="flex flex-col gap-6 lg:col-span-9">
          <h2
            id="get-started-title"
            className="max-w-3xl font-heading text-4xl leading-tight font-medium tracking-tight text-balance sm:text-5xl"
          >
            {closing.title}
          </h2>
          <p className="max-w-2xl text-lg text-pretty text-primary-foreground/80">
            {closing.description}
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <ButtonLink href={closing.primaryAction.href} variant="secondary" size="lg">
              {closing.primaryAction.label}
            </ButtonLink>
            <SiteLink
              href={closing.secondaryAction.href}
              className="text-sm font-medium underline underline-offset-4 hover:no-underline focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:outline-none"
            >
              {closing.secondaryAction.label}
            </SiteLink>
          </div>
        </div>
      </div>
    </section>
  )
}
