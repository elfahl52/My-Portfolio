import { motion } from 'framer-motion'

export function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  offset = 24,
  staggerChildren = false,
  staggerDelay = 0.1,
  blur = false,
  spring = false,
  amount = 0.2,
}) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: offset }
      case 'down':
        return { y: -offset }
      case 'left':
        return { x: offset }
      case 'right':
        return { x: -offset }
      case 'none':
        return {}
      default:
        return { y: offset }
    }
  }

  const initialPos = getInitialPosition()

  const transition = spring
    ? { type: 'spring', stiffness: 100, damping: 20, mass: 0.5 }
    : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: true,
        delayChildren: delay,
        ...transition,
      },
    },
  }

  const childVariants = {
    hidden: {
      opacity: 0,
      y: offset,
      filter: blur ? 'blur(10px)' : 'blur(0px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        ...transition,
        delay: 0,
      },
    },
  }

  if (staggerChildren) {
    return (
      <motion.div
        className={className}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount }}
      >
        {Array.isArray(children)
          ? children.map((child, i) => (
              <motion.div key={i} variants={childVariants}>
                {child}
              </motion.div>
            ))
          : children}
      </motion.div>
    )
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...initialPos, filter: blur ? 'blur(10px)' : 'blur(0px)' }}
      whileInView={{ opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount }}
      transition={{ ...transition, delay }}
    >
      {children}
    </motion.div>
  )
}