import { CtaLink } from '@/components/cta-link'
import { notFound } from '@/content/not-found'
import { createMetadata } from '@/lib/metadata'

// Its own title and description; Next already sends noindex for a 404, so the robots tag is left to it.
export const metadata = {
  ...createMetadata({
    title: notFound.title,
    description: notFound.description,
    noIndex: true,
  }),
  robots: null,
}

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-start gap-5 px-6 py-24 sm:py-32">
      <h1 className="font-heading text-5xl leading-none font-medium tracking-tighter">
        {notFound.title}
      </h1>
      <p className="max-w-xl text-base tracking-tight text-pretty text-muted-foreground">
        {notFound.description}
      </p>
      <CtaLink href={notFound.action.href}>{notFound.action.label}</CtaLink>
    </section>
  )
}
