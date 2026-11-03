import Image from 'next/image'

import { Section, SectionHeading } from '@/components/section'
import { aboutContent } from '@/content/about'

export function About() {
  return (
    <Section id="about" tone="muted">
      <div className="flex flex-col items-center gap-14">
        <SectionHeading
          sectionId="about"
          align="center"
          tone="muted"
          eyebrow={aboutContent.eyebrow}
          title={aboutContent.title}
        />
        <div className="grid w-full max-w-4xl gap-8 md:grid-cols-12">
          <Image
            src={aboutContent.portrait.src}
            alt={aboutContent.portrait.alt}
            sizes="(min-width: 768px) 336px, 100vw"
            className="aspect-square w-full rounded-xl object-cover md:col-span-5"
          />
          <div className="flex reveal flex-col gap-6 rounded-2xl bg-background p-8 md:col-span-7">
            <h3 className="font-heading text-3xl leading-9 font-medium tracking-tighter text-balance">
              {aboutContent.card.title}
            </h3>
            <p className="text-base tracking-tight text-pretty text-muted-foreground">
              {aboutContent.card.body}
            </p>
            <div className="mt-auto flex flex-col gap-2">
              <Image
                src={aboutContent.card.signature.src}
                alt={aboutContent.card.signature.alt}
                className="h-11 w-auto"
              />
              <p className="text-base tracking-tight text-muted-foreground">
                {aboutContent.card.role}
              </p>
            </div>
          </div>
        </div>
        <figure className="flex max-w-2xl reveal flex-col items-center gap-6 text-center">
          <blockquote className="font-heading text-3xl leading-10 font-medium tracking-tighter text-balance">
            &ldquo;{aboutContent.quote.text}&rdquo;
          </blockquote>
          <figcaption className="flex flex-col gap-1">
            <span className="text-base tracking-tight">{aboutContent.quote.name}</span>
            <span className="text-sm tracking-tight text-muted-foreground">
              {aboutContent.quote.role}
            </span>
          </figcaption>
        </figure>
      </div>
    </Section>
  )
}
