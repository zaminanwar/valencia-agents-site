import { withInlineCode } from '@/lib/inline-code'
import { cn } from '@/lib/utils'

function titleIdFor(sectionId: string) {
  return `${sectionId}-title`
}

// A section opens with a rule and sets its label in the margin, with the content beside it from a laptop up.
export function Section({
  id,
  number,
  label,
  className,
  children,
}: {
  id: string
  number?: string
  label: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} aria-labelledby={titleIdFor(id)} className={cn('px-4 sm:px-6', className)}>
      <div className="mx-auto grid max-w-6xl gap-6 border-t py-14 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <SectionLabel number={number}>{label}</SectionLabel>
        <div className="flex flex-col gap-10 lg:col-span-9">{children}</div>
      </div>
    </section>
  )
}

export function SectionLabel({ number, children }: { number?: string; children: string }) {
  return (
    <p className="flex items-baseline gap-3 text-xs font-medium tracking-widest text-muted-foreground uppercase lg:col-span-3">
      {number ? <span className="font-mono text-foreground">{number}</span> : null}
      <span>{children}</span>
    </p>
  )
}

export function SectionTitle({
  sectionId,
  className,
  children,
}: {
  sectionId: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <h2
      id={titleIdFor(sectionId)}
      className={cn(
        'max-w-3xl font-heading text-3xl leading-tight font-medium tracking-tight text-balance sm:text-4xl',
        className,
      )}
    >
      {children}
    </h2>
  )
}

export function SectionDescription({ children }: { children: string }) {
  return (
    <p className="max-w-2xl text-lg text-pretty text-muted-foreground">
      {withInlineCode(children)}
    </p>
  )
}

// The title with its description, which most sections open with.
export function SectionHeading({
  sectionId,
  title,
  description,
}: {
  sectionId: string
  title: string
  description?: string
}) {
  return (
    <div className="flex reveal flex-col gap-4">
      <SectionTitle sectionId={sectionId}>{title}</SectionTitle>
      {description ? <SectionDescription>{description}</SectionDescription> : null}
    </div>
  )
}

// Running copy under a heading: paragraphs at a reading measure.
export function Prose({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <div className="flex max-w-2xl flex-col gap-5 text-pretty text-muted-foreground sm:text-lg">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{withInlineCode(paragraph)}</p>
      ))}
    </div>
  )
}

// Titled points set in columns, each under its own rule, in place of cards.
export function RuledList({
  items,
  columns = 2,
}: {
  items: readonly { title: string; body: string }[]
  columns?: 2 | 3
}) {
  return (
    <ul
      className={cn(
        'grid gap-x-8 gap-y-8 sm:grid-cols-2',
        columns === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2',
      )}
    >
      {items.map((item) => (
        <li key={item.title} className="flex reveal flex-col gap-2 border-t pt-4">
          <h3 className="font-medium">{item.title}</h3>
          <p className="text-sm text-pretty text-muted-foreground">{withInlineCode(item.body)}</p>
        </li>
      ))}
    </ul>
  )
}
