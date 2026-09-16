import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'

export function Button({ children, variant = 'primary', className = '', as = 'button', ...props }) {
  const common = cn(
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-ring',
    variant === 'primary'
      ? 'bg-[var(--primary)] text-white shadow-[0_18px_40px_rgba(37,71,210,0.28)] hover:scale-[1.01] hover:bg-[var(--primary-strong)]'
      : variant === 'secondary'
        ? 'border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--primary)]/40 hover:bg-[var(--surface-strong)]'
        : 'border border-[var(--border)] bg-transparent text-[var(--text)] hover:border-[var(--primary)]/40',
    className,
  )

  if (as === 'a') {
    return (
      <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={common} {...props}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={common} {...props}>
      {children}
    </motion.button>
  )
}
