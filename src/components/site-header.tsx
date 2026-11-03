import Link from 'next/link'

import { ButtonLink } from '@/components/button-link'
import { LogoLink } from '@/components/logo'
import { MobileNav } from '@/components/mobile-nav'
import { headerAction, headerNav, mobileNav } from '@/content/navigation'

function HeaderAction({ size }: { size?: 'lg' }) {
  return (
    <ButtonLink href={headerAction.href} variant="outline" size={size}>
      {headerAction.label}
    </ButtonLink>
  )
}

// A plain bar under a rule, which stays at the top of the page.
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 px-4 backdrop-blur-sm sm:px-6">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6">
        <LogoLink />

        <nav aria-label="Main" className="hidden items-center gap-1 xl:flex">
          {headerNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="max-sm:hidden">
            <HeaderAction />
          </span>
          <span className="xl:hidden">
            <MobileNav links={mobileNav}>
              <HeaderAction size="lg" />
            </MobileNav>
          </span>
        </div>
      </div>
    </header>
  )
}
