import { CheckIcon } from 'lucide-react'

import { CtaLink } from '@/components/cta-link'
import { IconTile } from '@/components/icon-tile'
import { Section, SectionHeading } from '@/components/section'
import { ServicesVisual } from '@/components/services-visual'
import { servicesContent } from '@/content/services'
import { cn } from '@/lib/utils'

// Each chip floats at its own spot on the photo.
const CHIP_PLACEMENTS = ['top-20 left-10', 'top-1/2 right-8', 'bottom-16 left-16']

// Native disclosures: the open one turns dark, the others wait as light rows.
export function Services() {
  return (
    <Section id="services">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-10">
          <SectionHeading
            sectionId="services"
            eyebrow={servicesContent.eyebrow}
            title={servicesContent.title}
          />
          <div className="flex flex-col gap-3">
            {servicesContent.items.map((item, index) => (
              <details
                key={item.title}
                name="services"
                open={index === 0}
                className="group rounded-2xl bg-muted transition-colors open:bg-secondary open:text-secondary-foreground hover:bg-accent open:hover:bg-secondary"
              >
                <summary className="flex cursor-pointer items-center gap-4 rounded-2xl p-4 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none">
                  <IconTile
                    icon={item.icon}
                    tone="faint"
                    className="group-open:bg-primary-foreground/25"
                  />
                  <h3 className="font-heading text-2xl leading-none tracking-tight">
                    {item.title}
                  </h3>
                </summary>
                <p className="px-4 pb-5 text-base tracking-tight text-pretty text-secondary-foreground/90">
                  {item.body}
                </p>
              </details>
            ))}
          </div>
          <div>
            <CtaLink href={servicesContent.action.href}>{servicesContent.action.label}</CtaLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <ServicesVisual />
          {servicesContent.chips.map((chip, index) => (
            <span
              key={chip}
              aria-hidden="true"
              data-nosnippet
              className={cn(
                'absolute flex items-center gap-2 rounded-lg bg-foreground/60 py-2 pr-3 pl-2 text-base tracking-tight text-primary-foreground backdrop-blur-md',
                CHIP_PLACEMENTS[index],
              )}
            >
              <span className="grid size-5 place-items-center rounded-sm bg-primary-foreground/30">
                <CheckIcon className="size-3" strokeWidth={3} />
              </span>
              {chip}
            </span>
          ))}
        </div>
      </div>
    </Section>
  )
}
