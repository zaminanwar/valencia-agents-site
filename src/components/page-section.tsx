import type { ReactNode } from 'react'

import { Section, SectionHeading } from '@/components/section'

export function PageSection({
  id,
  number,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string
  number?: string
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
}) {
  return (
    <Section id={id} number={number} label={eyebrow}>
      <SectionHeading sectionId={id} title={title} description={description} />
      {children}
    </Section>
  )
}
