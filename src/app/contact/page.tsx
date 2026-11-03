import { ContactForm } from '@/components/contact-form'
import { PageHero } from '@/components/page-hero'
import { PageSection } from '@/components/page-section'
import { contact } from '@/content/contact'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Contact',
  description:
    'Tell Valencia Agents about a process. The form composes a draft in your mail app and sends nothing itself.',
  path: '/contact',
})

export default function Contact() {
  return (
    <>
      <PageHero
        id="top"
        eyebrow={contact.hero.eyebrow}
        title={contact.hero.title}
        ledes={contact.hero.ledes}
      />
      <PageSection id="write" eyebrow={contact.form.eyebrow} title={contact.form.title}>
        <ContactForm />
      </PageSection>
    </>
  )
}
