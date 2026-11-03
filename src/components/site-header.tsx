import Link from 'next/link'

import { CtaLink } from '@/components/cta-link'
import { LogoLink } from '@/components/logo'
import { MobileNav } from '@/components/mobile-nav'
import { headerAction, headerNav, mobileNav } from '@/content/navigation'

function HeaderAction({ size }: { size?: 'sm' | 'md' }) {
  return (
    <CtaLink href={headerAction.href} size={size}>
      {headerAction.label}
    </CtaLink>
  )
}

// A plain bar on the page's own background: the wordmark, the links beside it and one action at the end.
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-background/95 px-6 backdrop-blur-sm">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-6">
        <div className="flex items-center gap-10 lg:gap-16">
          <LogoLink />
          <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
            {headerNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md text-base tracking-tight whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <span className="max-sm:hidden">
            <HeaderAction size="sm" />
          </span>
          <span className="lg:hidden">
            <MobileNav links={mobileNav}>
              <HeaderAction />
            </MobileNav>
          </span>
        </div>
      </div>
    </header>
  )
}
