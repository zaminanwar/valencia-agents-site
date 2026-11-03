import type { ReactNode } from 'react'

import { Eyebrow, type EyebrowProps } from '@/components/eyebrow'
import { Section, SectionDescription, SectionTitle } from '@/components/section'

export function PageSection({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string
  eyebrow: EyebrowProps
  title: string
  description?: string
  children: ReactNode
}) {
  return (
    <Section id={id}>
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Eyebrow {...eyebrow} />
          <SectionTitle sectionId={id}>{title}</SectionTitle>
          {description ? <SectionDescription>{description}</SectionDescription> : null}
        </div>
        {children}
      </div>
    </Section>
  )
}
