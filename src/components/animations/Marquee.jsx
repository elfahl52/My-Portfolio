import { cn } from '../../lib/utils'

interface MarqueeItem {
  label: string
  icon?: React.ReactNode
}

interface MarqueeProps {
  items: MarqueeItem[]
  direction?: 'left' | 'right'
  speed?: number
  pauseOnHover?: boolean
  className?: string
}


export function Marquee({
  items,
  direction = 'left',
  speed = 30,
  pauseOnHover = true,
  className = '',
}: MarqueeProps) {
  const renderItems = [...items, ...items]

  return (
    <div className={cn('relative flex w-full overflow-hidden', className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[var(--bg)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[var(--bg)] to-transparent" />

      <div
        className="flex min-w-full shrink-0 items-center gap-4 py-2 will-change-transform"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
          animationPlayState: 'running',
        }}
        onMouseEnter={(e) => {
          if (pauseOnHover) e.currentTarget.style.animationPlayState = 'paused'
        }}
        onMouseLeave={(e) => {
          if (pauseOnHover) e.currentTarget.style.animationPlayState = 'running'
        }}
      >
        {renderItems.map((item, index) => {
          const isDuplicate = index >= items.length
          return (
            <div
              key={`${item.label}-${index}`}
              aria-hidden={isDuplicate}
              className="group flex shrink-0 items-center gap-3 rounded-full border border-[var(--border)]/50 bg-[var(--surface)]/50 px-4 py-2 text-sm font-medium text-[var(--muted)] transition-colors hover:border-[var(--primary)]/30 hover:bg-[var(--surface)] hover:text-[var(--text)]"
            >
              {item.icon && (
                <span className="text-lg opacity-70 transition-opacity group-hover:opacity-100">
                  {item.icon}
                </span>
              )}
              <span>{item.label}</span>
            </div>
          )
        })}
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}