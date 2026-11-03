import { CheckIcon } from 'lucide-react'

import { ContactForm } from '@/components/contact-form'
import { CtaLink } from '@/components/cta-link'
import { IconTile } from '@/components/icon-tile'
import { Section, SectionHeading } from '@/components/section'
import { contactContent } from '@/content/contact'

export function Contact() {
  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col gap-8 lg:col-span-5">
          <SectionHeading
            sectionId="contact"
            eyebrow={contactContent.eyebrow}
            title={contactContent.title}
            description={contactContent.description}
          />
          <ul className="flex flex-col gap-3">
            {contactContent.points.map((point) => (
              <li key={point} className="flex items-center gap-4">
                <IconTile icon={CheckIcon} size="sm" />
                <span className="text-base tracking-tight text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <div>
            <CtaLink href={contactContent.action.href}>{contactContent.action.label}</CtaLink>
          </div>
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </Section>
  )
}
