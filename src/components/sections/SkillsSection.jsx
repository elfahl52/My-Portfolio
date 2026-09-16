import { motion } from 'framer-motion'
import { Container } from '../layout/Container'

export function SkillsSection({ skillGroups }) {
  return (
    <section id="skills" data-aos="fade-up" className="bg-[var(--surface)] py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500">Skills</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.06em] md:text-6xl">
            Tools I use to
            <span className="block text-[var(--muted)]">build products.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_0.95fr_0.8fr] lg:items-start">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              data-aos="fade-up"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: index === 0 ? -8 : index === 1 ? 5 : -4,
                rotate: index === 1 ? 0.5 : -0.35,
                scale: 1.015,
              }}
              whileTap={{ scale: 0.99 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 220, damping: 18 }}
              className={`group border border-[var(--border)] bg-[var(--card)] transition-all duration-300 hover:border-blue-500/30 hover:shadow-2xl ${
                index === 0
                  ? 'rounded-[2rem] p-8 hover:-translate-y-2'
                  : index === 1
                    ? 'mt-8 rounded-xl p-6 hover:translate-x-1'
                    : 'rounded-none border-x-0 border-b-0 p-6 pt-8 hover:translate-y-1'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-mono text-blue-500">{group.number}</span>
                <span className="h-px w-16 bg-[var(--border)] transition-all group-hover:w-24 group-hover:bg-blue-500" />
              </div>

              <h3 className="mt-8 text-2xl font-bold tracking-tight">{group.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{group.description}</p>

              <div className="mt-7 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-xs font-medium text-[var(--muted)] transition hover:border-blue-500/30 hover:text-blue-500 ${index === 0 ? 'rounded-md' : 'rounded-full'}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
