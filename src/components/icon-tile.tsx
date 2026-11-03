import type { LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

// A grey tile with a white glyph: the template's mark for a point, a step or a card.
export function IconTile({
  icon: Icon,
  size = 'md',
  tone = 'solid',
  className,
}: {
  icon: LucideIcon
  size?: 'sm' | 'md' | 'lg'
  tone?: 'solid' | 'faint'
  className?: string
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'grid shrink-0 place-items-center text-secondary-foreground',
        tone === 'solid' ? 'bg-secondary' : 'bg-secondary/40',
        size === 'sm' && 'size-7 rounded-md [&_svg]:size-3.5',
        size === 'md' && 'size-10 rounded-lg [&_svg]:size-5',
        size === 'lg' && 'size-20 rounded-2xl [&_svg]:size-9',
        className,
      )}
    >
      <Icon strokeWidth={2.5} />
    </span>
  )
}
