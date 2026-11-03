// A workflow read as a grid: steps that stay manual, steps an agent now runs, and the few a person still signs. Static and decorative.
const COLUMNS = 7
const CELL = 56
const GAP = 12
const INSET = (504 - COLUMNS * CELL - (COLUMNS - 1) * GAP) / 2

// 0 untouched, 1 automated, 2 approved by a person.
const STATES = [
  [0, 0, 1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 2, 1, 1, 1],
  [1, 1, 2, 2, 2, 1, 1],
  [1, 1, 1, 2, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 0, 0],
]

const FILL = ['fill-background stroke-border', 'fill-secondary/35', 'fill-foreground']

export function ServicesVisual() {
  return (
    <svg
      viewBox="0 0 504 504"
      aria-hidden="true"
      data-nosnippet
      className="aspect-square w-full rounded-3xl bg-muted"
    >
      {STATES.flatMap((row, rowIndex) =>
        row.map((state, columnIndex) => {
          const x = INSET + columnIndex * (CELL + GAP)
          const y = INSET + rowIndex * (CELL + GAP)
          return (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width={CELL}
              height={CELL}
              rx="12"
              className={FILL[state]}
              strokeWidth="2"
            />
          )
        }),
      )}
    </svg>
  )
}
