// A process running on its own: nodes on dotted paper, one path lit from intake to approval. Static and decorative.
const NODES = [
  { x: 72, y: 96 },
  { x: 216, y: 96 },
  { x: 360, y: 96 },
  { x: 144, y: 240 },
  { x: 288, y: 240 },
  { x: 72, y: 384 },
  { x: 216, y: 384 },
  { x: 360, y: 384 },
]

// The lit route, by node index.
const ROUTE = [0, 3, 4, 7]

const SIZE = 56

function center(index: number) {
  const node = NODES[index]
  return { x: node.x + SIZE / 2, y: node.y + SIZE / 2 }
}

const QUIET_LINKS: [number, number][] = [
  [0, 1],
  [1, 2],
  [1, 4],
  [2, 4],
  [3, 5],
  [3, 6],
  [4, 6],
  [6, 7],
]

export function HeroVisual() {
  const route = ROUTE.map(center)
  return (
    <svg
      viewBox="0 0 504 504"
      aria-hidden="true"
      data-nosnippet
      className="aspect-square w-full rounded-3xl bg-muted"
    >
      <defs>
        <pattern id="hero-dots" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r="1" className="fill-foreground/15" />
        </pattern>
      </defs>
      <rect width="504" height="504" fill="url(#hero-dots)" />

      {QUIET_LINKS.map(([from, to]) => {
        const a = center(from)
        const b = center(to)
        return (
          <line
            key={`${from}-${to}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            className="stroke-foreground/15"
            strokeWidth="2"
          />
        )
      })}

      <polyline
        points={route.map((point) => `${point.x},${point.y}`).join(' ')}
        className="fill-none stroke-foreground"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {NODES.map((node, index) => {
        const lit = ROUTE.includes(index)
        const last = index === ROUTE.at(-1)
        return (
          <g key={`${node.x}-${node.y}`}>
            <rect
              x={node.x}
              y={node.y}
              width={SIZE}
              height={SIZE}
              rx="14"
              className={lit ? 'fill-foreground' : 'fill-background stroke-border'}
              strokeWidth="2"
            />
            {last ? (
              // The approval at the end of the route: a person's mark.
              <g className="fill-background">
                <circle cx={node.x + SIZE / 2} cy={node.y + 21} r="6" />
                <path d={`M${node.x + SIZE / 2 - 12} ${node.y + 42} a12 11 0 0 1 24 0 z`} />
              </g>
            ) : lit ? (
              <path
                d={`M${node.x + 19} ${node.y + 29} l7 7 l12 -14`}
                className="fill-none stroke-background"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <rect
                x={node.x + 18}
                y={node.y + 26}
                width="20"
                height="4"
                rx="2"
                className="fill-foreground/25"
              />
            )}
          </g>
        )
      })}
    </svg>
  )
}
