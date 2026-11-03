import { PlusIcon } from 'lucide-react'

import { JsonLd } from '@/components/json-ld'
import { Section, SectionHeading } from '@/components/section'
import { faq } from '@/content/faq'
import { faqPageSchema } from '@/lib/structured-data'

// Native disclosures, so every answer is in the HTML and opens without JavaScript.
export function Faq() {
  return (
    <Section id="faq">
      {/* The FAQPage markup lives with the questions it describes, so dropping the section drops both. */}
      <JsonLd data={faqPageSchema(faq.items)} />
      <div className="flex flex-col items-center gap-12">
        <SectionHeading sectionId="faq" align="center" eyebrow={faq.eyebrow} title={faq.title} />
        <div className="flex w-full max-w-xl flex-col gap-3">
          {faq.items.map((item) => (
            <details key={item.question} className="group reveal rounded-xl bg-muted">
              <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-xl px-4 py-3 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none">
                <h3 className="text-base font-normal tracking-tight">{item.question}</h3>
                <PlusIcon
                  aria-hidden="true"
                  className="size-5 shrink-0 transition-transform group-open:rotate-45"
                />
              </summary>
              <p className="px-4 pb-4 text-base tracking-tight text-pretty text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  )
}
