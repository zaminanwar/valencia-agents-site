import Image from 'next/image'

import { CtaLink } from '@/components/cta-link'
import { Eyebrow } from '@/components/section'
import { heroContent } from '@/content/hero'
import { cn } from '@/lib/utils'

// One chip sits at the top right of the photo, the other at the bottom left.
const CHIP_PLACEMENTS = ['top-5 right-5', 'bottom-5 left-5']

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="px-6 pt-8 pb-20 sm:pt-16 sm:pb-24 lg:pt-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
          <div className="animate-rise-fade motion-reduce:animate-none">
            <Eyebrow>{heroContent.eyebrow}</Eyebrow>
          </div>
          <h1
            id="hero-title"
            className="animate-rise font-heading text-4xl leading-10 font-medium tracking-tighter text-pretty delay-75 motion-reduce:animate-none sm:text-6xl sm:leading-16"
          >
            {heroContent.title}
          </h1>
          <p className="max-w-lg animate-rise-fade text-base text-pretty text-muted-foreground delay-150 motion-reduce:animate-none">
            {heroContent.description}
          </p>
          <div className="flex w-full animate-rise-fade flex-col items-center gap-4 delay-200 motion-reduce:animate-none sm:w-auto sm:flex-row sm:gap-8">
            <CtaLink href={heroContent.primaryAction.href} className="w-full sm:w-auto">
              {heroContent.primaryAction.label}
            </CtaLink>
            <CtaLink href={heroContent.secondaryAction.href} variant="text">
              {heroContent.secondaryAction.label}
            </CtaLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg animate-rise-fade delay-300 motion-reduce:animate-none lg:max-w-none">
          <Image
            src={heroContent.image.src}
            alt={heroContent.image.alt}
            priority
            sizes="(min-width: 1024px) 504px, 100vw"
            className="aspect-square w-full rounded-3xl border-4 border-muted object-cover"
          />
          {heroContent.chips.map((chip, index) => (
            <div
              key={chip.title}
              aria-hidden="true"
              data-nosnippet
              className={cn(
                'absolute flex items-center gap-3 rounded-xl bg-foreground/60 p-2 pr-4 text-primary-foreground backdrop-blur-md',
                CHIP_PLACEMENTS[index],
              )}
            >
              <span className="grid size-10 place-items-center rounded-lg bg-primary-foreground/25">
                <chip.icon className="size-5" />
              </span>
              <span className="flex flex-col">
                <span className="text-base tracking-tight">{chip.title}</span>
                <span className="text-sm tracking-tight text-primary-foreground/80">
                  {chip.detail}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
