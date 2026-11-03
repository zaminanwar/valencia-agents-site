import { Syne } from 'next/font/google'

import { HomeLink } from '@/components/home-link'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

// Syne is loaded here for the wordmark alone, so a preset's font change leaves the brand as it is.
const wordmark = Syne({ subsets: ['latin'], weight: '700' })

export function Logo() {
  return (
    <span translate="no" className="flex items-center gap-2 text-foreground">
      <span className={cn(wordmark.className, 'text-2xl leading-none tracking-tight')}>
        Valencia Agents
      </span>
    </span>
  )
}

// The logo as the way home, in the header and the footer alike.
export function LogoLink() {
  return (
    <HomeLink
      aria-label={siteConfig.name}
      className="rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
    >
      <Logo />
    </HomeLink>
  )
}

// The wordmark as one SVG, so it scales with its container instead of a font size.
export function Wordmark() {
  return (
    <svg viewBox="0 0 476 120" aria-hidden="true" className="w-full fill-current">
      <text x="8" y="84" fontSize="44" className={wordmark.className}>
        Valencia Agents
      </text>
    </svg>
  )
}
