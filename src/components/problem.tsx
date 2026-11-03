import { CheckIcon, XIcon } from 'lucide-react'
import Image from 'next/image'

import { IconTile } from '@/components/icon-tile'
import { Eyebrow, Section, SectionHeading } from '@/components/section'
import { problemContent } from '@/content/problem'

function Column({
  label,
  items,
  kind,
}: {
  label: string
  items: readonly string[]
  kind: 'before' | 'after'
}) {
  return (
    <div className="flex flex-col gap-4">
      <Eyebrow>{label}</Eyebrow>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex reveal flex-col gap-6 rounded-2xl bg-muted p-4">
            <IconTile
              icon={kind === 'before' ? XIcon : CheckIcon}
              size="sm"
              tone={kind === 'before' ? 'faint' : 'solid'}
            />
            <p className="text-base tracking-tight text-pretty text-muted-foreground">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Problem() {
  return (
    <Section id="problem">
      <div className="flex flex-col gap-14">
        <SectionHeading
          sectionId="problem"
          align="center"
          eyebrow={problemContent.eyebrow}
          title={problemContent.title}
          description={problemContent.description}
        />
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Image
            src={problemContent.image.src}
            alt={problemContent.image.alt}
            sizes="(min-width: 1024px) 504px, 100vw"
            className="aspect-square w-full rounded-3xl object-cover"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Column
              label={problemContent.before.label}
              items={problemContent.before.items}
              kind="before"
            />
            <Column
              label={problemContent.after.label}
              items={problemContent.after.items}
              kind="after"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
