import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

import { ImageResponse } from 'next/og'

import { getSiteUrl } from '@/lib/site-url'
import { readRootTokens, toHex } from '@/lib/theme-tokens'

export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = 'image/png'

// The card's typefaces, the pair src/app/layout.tsx loads: Space Grotesk for the headline and the wordmark, Instrument Sans for the rest.
const FONT = 'Instrument Sans'
const HEADING_FONT = 'Space Grotesk'

// The light theme's values, for a token that is missing or cannot be converted.
const FALLBACK = {
  background: '#ffffff',
  foreground: '#1a1a1a',
  'muted-foreground': '#666666',
  border: '#e6e5e2',
  primary: '#1a1a1a',
  'primary-foreground': '#ffffff',
}

type Palette = {
  background: string
  foreground: string
  muted: string
  border: string
  primary: string
  primaryForeground: string
}

// Satori resolves no CSS variables, so the card reads the light theme from globals.css and follows a preset like the page.
let palettePromise: Promise<Palette> | null = null

function getPalette(): Promise<Palette> {
  palettePromise ??= readFile(join(process.cwd(), 'src', 'app', 'globals.css'), 'utf8').then(
    (css) => {
      const tokens = readRootTokens(css)
      const colour = (name: keyof typeof FALLBACK) => toHex(tokens[name] ?? '') ?? FALLBACK[name]

      return {
        background: colour('background'),
        foreground: colour('foreground'),
        muted: colour('muted-foreground'),
        border: colour('border'),
        primary: colour('primary'),
        primaryForeground: colour('primary-foreground'),
      }
    },
  )
  return palettePromise
}

// An error page is not a font, so a failed response throws and the fonts fall back.
async function fetchOk(url: string, init?: RequestInit): Promise<Response> {
  const response = await fetch(url, init)
  if (!response.ok) throw new Error(`${response.status} from ${url}`)
  return response
}

async function loadGoogleFont(family: string, weight: number): Promise<ArrayBuffer> {
  const css = await fetchOk(
    `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}`,
    // An old user agent gets a TTF, which Satori reads; newer ones get WOFF2, which it does not.
    {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)' },
    },
  ).then((response) => response.text())
  const src = css.match(/src:\s*url\((https:[^)]+)\)/)?.[1]
  if (!src) throw new Error(`Font not found: ${family} ${weight}`)
  return fetchOk(src).then((response) => response.arrayBuffer())
}

type LoadedFont = { name: string; data: ArrayBuffer; weight: 400 | 500; style: 'normal' }

let fontsPromise: Promise<LoadedFont[]> | null = null

function getFonts(): Promise<LoadedFont[]> {
  fontsPromise ??= (async () => {
    try {
      const [heading, regular] = await Promise.all([
        loadGoogleFont(HEADING_FONT, 500),
        loadGoogleFont(FONT, 400),
      ])
      return [
        { name: HEADING_FONT, data: heading, weight: 500, style: 'normal' },
        { name: FONT, data: regular, weight: 400, style: 'normal' },
      ] satisfies LoadedFont[]
    } catch {
      // A failed font fetch must fall back to the default face, not break the build.
      return []
    }
  })()
  return fontsPromise
}

// The card is drawn at build time, before the site serves anything, so the mark is read off disk.
let markPromise: Promise<string> | null = null

function getMark(): Promise<string> {
  markPromise ??= readFile(join(process.cwd(), 'public', 'brand', 'valencia-mark.svg')).then(
    (svg) => `data:image/svg+xml;base64,${svg.toString('base64')}`,
  )
  return markPromise
}

export type OgImageOptions = {
  title: string
  eyebrow?: string
  description?: string
  cta: string
}

export async function createOgImage({ title, eyebrow, description, cta }: OgImageOptions) {
  const [fonts, mark, palette] = await Promise.all([getFonts(), getMark(), getPalette()])
  const domain = getSiteUrl().replace(/^https?:\/\//, '')

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: palette.background,
        padding: 72,
        fontFamily: FONT,
        color: palette.foreground,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <img src={mark} width={40} height={40} alt="" />
        <span style={{ fontFamily: HEADING_FONT, fontWeight: 500, fontSize: 36 }}>
          Valencia Agents
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {eyebrow ? (
          <span style={{ fontWeight: 400, fontSize: 20, letterSpacing: 3, color: palette.muted }}>
            {eyebrow.slice(0, 40).toUpperCase()}
          </span>
        ) : null}
        <span
          style={{
            fontFamily: HEADING_FONT,
            fontWeight: 500,
            fontSize: 66,
            lineHeight: 1.05,
            letterSpacing: -4,
            maxWidth: 1000,
          }}
        >
          {title}
        </span>
        {description ? (
          <span
            style={{
              fontWeight: 400,
              fontSize: 26,
              lineHeight: 1.45,
              color: palette.muted,
              maxWidth: 900,
            }}
          >
            {description.slice(0, 120)}
          </span>
        ) : null}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: `2px solid ${palette.border}`,
          paddingTop: 28,
          fontSize: 24,
        }}
      >
        <span style={{ color: palette.primary }}>{cta.slice(0, 36)}</span>
        <span style={{ color: palette.muted }}>{domain}</span>
      </div>
    </div>,
    { ...OG_SIZE, ...(fonts.length ? { fonts } : {}) },
  )
}
