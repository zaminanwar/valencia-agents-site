import { SectionLabel } from '@/components/section'

// The opening of an inner page: its label in the margin and a serif title at a reading measure.
export function PageHero({
  id,
  eyebrow,
  title,
  ledes,
}: {
  id: string
  eyebrow: string
  title: string
  ledes: readonly string[]
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="px-4 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-6 pt-14 pb-14 sm:pt-20 sm:pb-20 lg:grid-cols-12 lg:gap-10 lg:pt-28 lg:pb-24">
        <SectionLabel>{eyebrow}</SectionLabel>
        <div className="flex flex-col gap-6 lg:col-span-9">
          <h1
            id={`${id}-title`}
            className="max-w-3xl animate-rise font-heading text-4xl leading-tight font-medium tracking-tight text-balance motion-reduce:animate-none sm:text-5xl lg:text-6xl"
          >
            {title}
          </h1>
          <div className="flex max-w-2xl animate-rise-fade flex-col gap-4 delay-100 motion-reduce:animate-none">
            {ledes.map((lede) => (
              <p key={lede} className="text-lg text-pretty text-muted-foreground sm:text-xl">
                {lede}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
