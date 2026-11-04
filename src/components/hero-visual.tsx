import { cn } from '@/lib/utils'

// A contour field: the level lines of a smooth surface, like a stress plot or a map's relief. Decorative; its motion lives in globals.css.
const SIZE = 504
const CELLS = 72
const LEVELS = 20

// Three rounded peaks and a gentle ripple, fixed, so every render draws the same field.
const PEAKS = [
  { x: 0.64, y: 0.36, amplitude: 1, spread: 0.2 },
  { x: 0.22, y: 0.72, amplitude: 0.72, spread: 0.19 },
  { x: 0.82, y: 0.88, amplitude: 0.5, spread: 0.16 },
]

function height(x: number, y: number) {
  let value = 0.14 * Math.sin(6.2 * x + 2.1) * Math.cos(5.3 * y - 0.8)
  for (const peak of PEAKS) {
    const dx = x - peak.x
    const dy = y - peak.y
    value += peak.amplitude * Math.exp(-(dx * dx + dy * dy) / (2 * peak.spread * peak.spread))
  }
  return value
}

// Where a level crosses the edge between two samples, by linear interpolation.
function cross(a: number, b: number, level: number) {
  return (level - a) / (b - a)
}

function round(value: number) {
  return Math.round(value)
}

// Marching squares: one path per level, made of the short segments that cross each cell.
function contours() {
  const step = SIZE / CELLS
  const grid: number[][] = []
  for (let row = 0; row <= CELLS; row += 1) {
    grid.push([])
    for (let column = 0; column <= CELLS; column += 1) {
      grid[row].push(height(column / CELLS, row / CELLS))
    }
  }
  const values = grid.flat()
  const low = Math.min(...values)
  const high = Math.max(...values)

  return Array.from({ length: LEVELS }, (_, index) => {
    const level = low + ((high - low) * (index + 1)) / (LEVELS + 1)
    const segments: string[] = []
    for (let row = 0; row < CELLS; row += 1) {
      for (let column = 0; column < CELLS; column += 1) {
        const tl = grid[row][column]
        const tr = grid[row][column + 1]
        const br = grid[row + 1][column + 1]
        const bl = grid[row + 1][column]
        const x = column * step
        const y = row * step
        const top = () => `${round(x + step * cross(tl, tr, level))} ${round(y)}`
        const right = () => `${round(x + step)} ${round(y + step * cross(tr, br, level))}`
        const bottom = () => `${round(x + step * cross(bl, br, level))} ${round(y + step)}`
        const left = () => `${round(x)} ${round(y + step * cross(tl, bl, level))}`
        const code =
          (tl > level ? 8 : 0) + (tr > level ? 4 : 0) + (br > level ? 2 : 0) + (bl > level ? 1 : 0)
        const edges: (() => string)[][] =
          {
            1: [[left, bottom]],
            2: [[bottom, right]],
            3: [[left, right]],
            4: [[top, right]],
            5: [
              [left, top],
              [bottom, right],
            ],
            6: [[top, bottom]],
            7: [[left, top]],
            8: [[left, top]],
            9: [[top, bottom]],
            10: [
              [left, bottom],
              [top, right],
            ],
            11: [[top, right]],
            12: [[left, right]],
            13: [[bottom, right]],
            14: [[left, bottom]],
          }[code] ?? []
        for (const [from, to] of edges) segments.push(`M${from()} L${to()}`)
      }
    }
    return { index, d: segments.join(' ') }
  })
}

// The lines darken toward the peaks, in four steps.
const STROKES = [
  'stroke-foreground/15',
  'stroke-foreground/25',
  'stroke-foreground/40',
  'stroke-foreground/60',
]

const LINES = contours()

export function HeroVisual() {
  return (
    <div className="aspect-square w-full parallax overflow-hidden rounded-3xl bg-muted">
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        aria-hidden="true"
        data-nosnippet
        className="size-full fade-edges"
      >
        {LINES.map((line) => (
          <path
            key={line.index}
            d={line.d}
            className={cn(
              'contour motion-reduce:animate-none',
              STROKES[Math.floor((line.index / LEVELS) * STROKES.length)],
            )}
            fill="none"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        ))}
      </svg>
    </div>
  )
}
