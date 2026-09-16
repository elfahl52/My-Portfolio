import { cn } from '../../lib/cn'

export function Container({ children, className = '' }) {
  return <div className={cn('container-shell', className)}>{children}</div>
}
