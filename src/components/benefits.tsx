import Image from 'next/image'

import { Section, SectionHeading } from '@/components/section'
import { benefitsContent } from '@/content/benefits'

export function Benefits() {
  return (
    <Section id="benefits" tone="muted">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            sectionId="benefits"
            tone="muted"
            eyebrow={benefitsContent.eyebrow}
            title={benefitsContent.title}
            description={benefitsContent.description}
          />
        </div>
        <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-7">
          {benefitsContent.items.map((item) => (
            <li key={item.title} className="flex reveal flex-col gap-3">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                sizes="(min-width: 1024px) 274px, (min-width: 640px) 50vw, 100vw"
                className="h-36 w-full rounded-2xl object-cover"
              />
              <h3 className="mt-2 font-heading text-3xl leading-9 font-medium tracking-tighter">
                {item.title}
              </h3>
              <p className="text-base tracking-tight text-pretty text-muted-foreground">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
