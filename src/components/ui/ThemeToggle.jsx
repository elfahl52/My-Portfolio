import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'

export function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <motion.button
      type="button"
      aria-label="Toggle color theme"
      onClick={onToggle}
      whileTap={{ scale: 0.96 }}
      className="relative flex h-11 w-20 items-center rounded-full border border-[var(--border)] bg-[var(--surface)] p-1 shadow-inner backdrop-blur-xl focus-ring"
    >
      <motion.span
        className="absolute inset-y-1 left-1 w-9 rounded-full bg-[linear-gradient(135deg,var(--primary),var(--accent))]"
        animate={{ x: isDark ? 0 : 36 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      />
      <span className="relative z-10 flex w-full justify-between px-2 text-xs text-[var(--muted)]">
        <FiSun className="h-4 w-4" />
        <FiMoon className="h-4 w-4" />
      </span>
    </motion.button>
  )
}
