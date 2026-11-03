import { cn } from '@/lib/utils'

function titleIdFor(sectionId: string) {
  return `${sectionId}-title`
}

// Every section shares one rhythm and is labelled by its h2; a muted section sits on the dotted paper.
export function Section({
  id,
  tone = 'default',
  className,
  children,
}: {
  id: string
  tone?: 'default' | 'muted'
  className?: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={titleIdFor(id)}
      className={cn(
        'px-6 py-20 sm:py-24 lg:py-28',
        tone === 'muted' && 'bg-muted paper-dots',
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
}

// The small label above a heading, a pill on the page's other tint.
export function Eyebrow({
  tone = 'default',
  children,
}: {
  tone?: 'default' | 'muted'
  children: string
}) {
  return (
    <p
      className={cn(
        'inline-flex w-fit rounded-md px-2 py-1 text-sm tracking-tight',
        tone === 'muted' ? 'bg-background' : 'bg-muted',
      )}
    >
      {children}
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
  children: string
}) {
  return (
    <h2
      id={titleIdFor(sectionId)}
      className={cn(
        'font-heading text-4xl leading-none tracking-tight text-balance sm:text-5xl',
        className,
      )}
    >
      {children}
    </h2>
  )
}

export function SectionDescription({ children }: { children: string }) {
  return <p className="text-pretty text-muted-foreground">{children}</p>
}

// Eyebrow, title and description together, centred or at the start.
export function SectionHeading({
  sectionId,
  eyebrow,
  title,
  description,
  align = 'start',
  tone = 'default',
}: {
  sectionId: string
  eyebrow: string
  title: string
  description?: string
  align?: 'start' | 'center'
  tone?: 'default' | 'muted'
}) {
  return (
    <div
      className={cn(
        'flex reveal flex-col gap-4',
        align === 'center' ? 'mx-auto max-w-xl items-center text-center' : 'max-w-lg items-start',
      )}
    >
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <SectionTitle sectionId={sectionId}>{title}</SectionTitle>
      {description ? <SectionDescription>{description}</SectionDescription> : null}
    </div>
  )
}
