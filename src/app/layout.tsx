import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

import type { Viewport } from 'next'
import { Instrument_Sans, Instrument_Serif } from 'next/font/google'

import './globals.css'
import { JsonLd } from '@/components/json-ld'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { createMetadata } from '@/lib/metadata'
import { siteSchemas } from '@/lib/structured-data'
import { readRootTokens, toHex } from '@/lib/theme-tokens'
import { cn } from '@/lib/utils'

// Instrument Serif carries the headings and the wordmark; its sibling Instrument Sans carries everything else.
const heading = Instrument_Serif({ subsets: ['latin'], weight: '400', variable: '--font-heading' })

const sans = Instrument_Sans({ subsets: ['latin'], variable: '--font-sans' })

// Site-wide defaults with no canonical, so a page that forgets its own metadata never claims to be the home page.
export const metadata = createMetadata({})

export async function generateViewport(): Promise<Viewport> {
  const css = await readFile(join(process.cwd(), 'src/app/globals.css'), 'utf8')
  const background = readRootTokens(css).background
  return { viewportFit: 'cover', themeColor: toHex(background) ?? background }
}

// Every route prerenders; a Request-time API anywhere fails the build instead of the crawl.
export const dynamic = 'error'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn('antialiased', 'font-sans', heading.variable, sans.variable)}>
      <body>
        <JsonLd data={siteSchemas()} />
        <a
          href="#main"
          className="sr-only rounded-md bg-background text-sm font-medium shadow-md ring-2 ring-ring focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
