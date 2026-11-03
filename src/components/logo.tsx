import { HomeLink } from '@/components/home-link'
import { siteConfig } from '@/config/site'

// The wordmark is the site's serif, so the brand and the headings read as one voice.
export function Logo() {
  return (
    <span translate="no" className="flex items-center text-foreground">
      <span className="font-heading text-2xl leading-none font-medium tracking-tight">
        {siteConfig.name}
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
