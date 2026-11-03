import { ButtonLink } from '@/components/button-link'
import { FaqAccordion } from '@/components/faq-accordion'
import { JsonLd } from '@/components/json-ld'
import { Section, SectionHeading } from '@/components/section'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { faq } from '@/content/faq'
import { withInlineCode } from '@/lib/inline-code'
import { faqPageSchema } from '@/lib/structured-data'

export function Faq() {
  const items = faq.items.map((item) => ({
    ...item,
    id: `faq-${item.question
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/-$/, '')}`,
  }))

  return (
    <Section id="faq" number="07" label={faq.eyebrow}>
      {/* The FAQPage markup lives with the questions it describes, so dropping the section drops both. */}
      <JsonLd data={faqPageSchema(faq.items)} />
      <SectionHeading sectionId="faq" title={faq.title} description={faq.description} />

      <div className="max-w-3xl reveal">
        {/* hiddenUntilFound keeps closed answers in the HTML, for crawlers and find-in-page alike. */}
        <FaqAccordion ids={items.map((item) => item.id)}>
          {items.map((item) => (
            <AccordionItem key={item.id} id={item.id} value={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-pretty text-muted-foreground">{withInlineCode(item.answer)}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </FaqAccordion>
      </div>

      <div className="flex reveal flex-wrap items-center gap-4">
        <p className="text-sm font-medium">{faq.contact.title}</p>
        <ButtonLink href={faq.contact.action.href} variant="outline">
          {faq.contact.action.label}
        </ButtonLink>
      </div>
    </Section>
  )
}
