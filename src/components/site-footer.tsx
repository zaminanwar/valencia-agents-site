import { ArrowUpRightIcon } from 'lucide-react'

import { LogoLink } from '@/components/logo'
import { SiteLink } from '@/components/site-link'
import { footerColumns, footerNote } from '@/content/navigation'

const LINK_CLASS =
  'inline-flex items-center gap-1 text-base tracking-tight text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none'

export function SiteFooter() {
  return (
    <footer className="bg-muted px-6">
      <div className="mx-auto grid w-full max-w-6xl gap-12 pt-16 pb-10 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-3">
          <LogoLink />
          <p className="text-base tracking-tight text-muted-foreground">{footerNote.tagline}</p>
        </div>

        <div className="grid grid-cols-2 gap-10">
          {footerColumns.map((column) => {
            const titleId = `footer-${column.title.toLowerCase().replaceAll(' ', '-')}`
            return (
              <nav key={column.title} aria-labelledby={titleId} className="flex flex-col gap-5">
                <h2 id={titleId} className="font-heading text-2xl leading-none tracking-tight">
                  {column.title}
                </h2>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <SiteLink href={link.href} className={LINK_CLASS}>
                        {link.label}
                        {link.external && (
                          <ArrowUpRightIcon aria-hidden="true" className="size-3.5" />
                        )}
                      </SiteLink>
                    </li>
                  ))}
                </ul>
              </nav>
            )
          })}
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-2 border-t py-6 text-sm tracking-tight text-muted-foreground sm:flex-row sm:items-center">
          <p>{footerNote.line}</p>
          <SiteLink
            href={footerNote.legal.href}
            className="rounded-md transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            {footerNote.legal.label}
          </SiteLink>
        </div>
      </div>
    </footer>
  )
}
