import { Eyebrow, type EyebrowProps } from '@/components/eyebrow'
import { Section } from '@/components/section'

export function PageHero({
  id,
  eyebrow,
  title,
  ledes,
}: {
  id: string
  eyebrow: EyebrowProps
  title: string
  ledes: string[]
}) {
  return (
    <Section id={id}>
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <Eyebrow {...eyebrow} />
        <h1
          id={`${id}-title`}
          className="font-heading text-4xl font-bold tracking-tighter text-balance sm:text-5xl"
        >
          {title}
        </h1>
        {ledes.map((lede) => (
          <p key={lede} className="text-lg text-pretty text-muted-foreground">
            {lede}
          </p>
        ))}
      </div>
    </Section>
  )
}
