import { motion } from 'framer-motion'
import { Container } from '../layout/Container'

function ExperienceTimeline({ title, items, accent }) {
  return (
    <div className="rounded-[30px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_20px_60px_var(--shadow)] md:p-7">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-3 w-3 rounded-full" style={{ backgroundColor: accent }} />
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--muted)]">{title}</p>
      </div>

      <div className="mt-6 space-y-6">
        {(items || []).map((item, index) => (
          <motion.div
            key={`${title}-${item.title}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="relative pl-6"
          >
            <span className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full border-2 border-[var(--card)]" style={{ backgroundColor: accent }} />

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-medium text-[var(--muted)]">{item.period}</p>
                  <h3 className="mt-1 font-display text-2xl font-bold tracking-[-0.05em] text-[var(--text)]">
                    {item.title}
                  </h3>
                </div>

                <span className="rounded-full border border-[var(--border)] bg-[var(--card)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted-soft)]">
                  {item.organization}
                </span>
              </div>

              <p className="mt-4 text-base leading-7 text-[var(--muted)]">{item.description}</p>

              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-500">
                    Skills learned
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {(item.skills || []).map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[var(--border)] bg-[var(--card)] px-2.5 py-1.5 text-[11px] font-medium text-[var(--muted)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-500">
                    Tools used
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {(item.tools || []).map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-[var(--border)] bg-[var(--card)] px-2.5 py-1.5 text-[11px] font-medium text-[var(--muted)]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-500">
                    Outcomes
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-[var(--muted)]">
                    {(item.outcomes || []).map((outcome) => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export function ExperienceSection({ educationItems, trainingItems, projectHighlights }) {
  return (
    <section id="experience" data-aos="fade-up" className="border-t border-[var(--border)] py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500">
            Experience & Training
          </p>

          <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.06em] md:text-6xl">
            Learning, building, and improving
              <span className="block text-[var(--muted)]">through real product work.</span>
          </h2>
        </div>

        <div className="mt-12 space-y-8">
          <ExperienceTimeline title="Education" items={educationItems} accent="#3b82f6" />
          <ExperienceTimeline title="Training" items={trainingItems} accent="#8b5cf6" />
          <ExperienceTimeline title="Projects" items={projectHighlights} accent="#22c55e" />
        </div>
      </Container>
    </section>
  )
}
