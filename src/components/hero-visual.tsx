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
  return Math.round(value * 10) / 10
}

// Marching squares, then the cell segments chained into continuous lines, so a dash can travel along them.
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
    const segments: [string, string][] = []
    for (let row = 0; row < CELLS; row += 1) {
      for (let column = 0; column < CELLS; column += 1) {
        const tl = grid[row][column]
        const tr = grid[row][column + 1]
        const br = grid[row + 1][column + 1]
        const bl = grid[row + 1][column]
        const x = column * step
        const y = row * step
        const top = () => `${round(x + step * cross(tl, tr, level))},${round(y)}`
        const right = () => `${round(x + step)},${round(y + step * cross(tr, br, level))}`
        const bottom = () => `${round(x + step * cross(bl, br, level))},${round(y + step)}`
        const left = () => `${round(x)},${round(y + step * cross(tl, bl, level))}`
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
        for (const [from, to] of edges) segments.push([from(), to()])
      }
    }
    return { index, d: chain(segments) }
  })
}

// Joins segments end to end wherever two share a point, walking each line from a loose end or around a loop.
function chain(segments: [string, string][]) {
  const links = new Map<string, number[]>()
  segments.forEach(([a, b], i) => {
    links.set(a, [...(links.get(a) ?? []), i])
    links.set(b, [...(links.get(b) ?? []), i])
  })
  const used = new Set<number>()
  const lines: string[] = []
  const walk = (start: number) => {
    let [from, to] = segments[start]
    used.add(start)
    const points = [from, to]
    for (;;) {
      const next = (links.get(to) ?? []).find((i) => !used.has(i))
      if (next === undefined) break
      used.add(next)
      const [a, b] = segments[next]
      to = a === to ? b : a
      points.push(to)
    }
    return points
  }
  // Open lines first, from their loose ends, so a loop is only walked when nothing else can reach it.
  const all = segments.map((_, i) => i)
  const ends = all.filter((i) => segments[i].some((p) => links.get(p)?.length === 1))
  for (const start of [...ends, ...all]) {
    if (used.has(start)) continue
    const points = walk(start)
    lines.push(`M${points[0]} L${points.slice(1).join(' ')}`)
  }
  return lines.join(' ')
}

// The lines sit lightly on the page; the dots that travel them carry the ink.
const LINES = contours()

export function HeroVisual() {
  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      aria-hidden="true"
      data-nosnippet
      className="aspect-square w-full fade-edges"
    >
      {/* Each line's geometry once, then drawn twice: as the faint line, and as the dots that travel it. */}
      <defs>
        {LINES.map((line) => (
          <path key={line.index} id={`contour-${line.index}`} d={line.d} />
        ))}
      </defs>
      <g className="fill-none stroke-foreground/15" strokeWidth="1" strokeLinecap="round">
        {LINES.map((line) => (
          <use key={line.index} href={`#contour-${line.index}`} />
        ))}
      </g>
      <g className="fill-none stroke-foreground/70">
        {LINES.map((line) => (
          <use
            key={line.index}
            href={`#contour-${line.index}`}
            className="current motion-reduce:animate-none"
          />
        ))}
      </g>
    </svg>
  )
}
