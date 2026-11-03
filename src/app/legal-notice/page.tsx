import { legalNotice } from '@/content/legal-notice'
import { withInlineCode } from '@/lib/inline-code'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: legalNotice.title,
  description: 'Who operates this website, who hosts it, and how personal data is handled.',
  path: '/legal-notice',
})

export default function LegalNotice() {
  return (
    <article className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-16 sm:py-24">
      <h1 className="font-heading text-5xl leading-none tracking-tight sm:text-6xl">
        {legalNotice.title}
      </h1>
      {legalNotice.sections.map((section) => (
        <section key={section.title} className="flex flex-col gap-3">
          <h2 className="font-heading text-2xl leading-none tracking-tight">{section.title}</h2>
          {section.lines.map((line) => (
            <p key={line} className="text-base tracking-tight text-pretty text-muted-foreground">
              {withInlineCode(line)}
            </p>
          ))}
        </section>
      ))}
    </article>
  )
}
