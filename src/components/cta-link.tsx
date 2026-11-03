import { SiteLink, type SiteLinkProps } from '@/components/site-link'
import { cn } from '@/lib/utils'

// The dark pill button the template uses for every call to action, and its quiet text twin.
export function CtaLink({
  variant = 'solid',
  size = 'md',
  className,
  ...props
}: SiteLinkProps & { variant?: 'solid' | 'text'; size?: 'sm' | 'md' }) {
  return (
    <SiteLink
      data-slot="button"
      className={cn(
        'inline-flex items-center justify-center rounded-2xl text-base font-medium tracking-tight whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none',
        variant === 'solid' && 'bg-primary text-primary-foreground hover:bg-primary/85',
        variant === 'text' && 'text-muted-foreground hover:text-foreground',
        size === 'md' && 'h-10 px-6',
        size === 'sm' && 'h-8 rounded-xl px-3 text-sm',
        className,
      )}
      {...props}
    />
  )
}
