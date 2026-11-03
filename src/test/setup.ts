import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

// next/font only runs inside the Next compiler, so tests get a stand-in with the same shape.
vi.mock('next/font/google', () => ({
  Newsreader: () => ({ className: 'font-newsreader', variable: '--font-serif' }),
  IBM_Plex_Sans: () => ({ className: 'font-plex', variable: '--font-sans' }),
  IBM_Plex_Mono: () => ({ className: 'font-plex-mono', variable: '--font-mono' }),
}))

function noop() {}

// jsdom lacks these browser APIs, which next-themes and Base UI reach for.
vi.stubGlobal(
  'ResizeObserver',
  class {
    observe() {}
    unobserve() {}
    disconnect() {}
  },
)
vi.stubGlobal('matchMedia', (query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addEventListener: noop,
  removeEventListener: noop,
  addListener: noop,
  removeListener: noop,
  dispatchEvent: () => false,
}))

afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
})
