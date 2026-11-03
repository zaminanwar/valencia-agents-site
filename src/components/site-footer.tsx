import { ArrowUpRightIcon } from 'lucide-react'

import { LogoLink } from '@/components/logo'
import { SiteLink } from '@/components/site-link'
import { FooterThemeToggle } from '@/components/theme-toggle'
import { siteConfig } from '@/config/site'
import { footerColumns, footerNote } from '@/content/navigation'

const LINK_CLASS =
  'inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none'

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 pt-16 pb-12 sm:px-6 lg:grid-cols-12">
        <div className="flex flex-col items-start gap-5 lg:col-span-5">
          <LogoLink />
          <p className="max-w-sm text-sm text-pretty text-muted-foreground">
            {siteConfig.description}
          </p>
          <SiteLink href={siteConfig.links.email} className={LINK_CLASS}>
            {siteConfig.email}
          </SiteLink>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
          {footerColumns.map((column) => {
            const titleId = `footer-${column.title.toLowerCase().replaceAll(' ', '-')}`
            return (
              <nav key={column.title} aria-labelledby={titleId} className="flex flex-col gap-4">
                <h2
                  id={titleId}
                  className="text-xs font-medium tracking-widest text-muted-foreground uppercase"
                >
                  {column.title}
                </h2>
                <ul className="flex flex-col gap-1 sm:gap-2">
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

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col-reverse items-start justify-between gap-4 border-t py-6 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">{footerNote.line}</p>
          <FooterThemeToggle />
        </div>
      </div>
    </footer>
  )
}
