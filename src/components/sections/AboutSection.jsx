import { motion } from 'framer-motion'
import { Container } from '../layout/Container'

export function AboutSection({ workingStyle, whyHireMe }) {
  return (
    <section id="about" data-aos="fade-up" className="border-t border-[var(--border)] py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-blue-500">
              About me
            </p>

            <h2 className="font-display text-4xl font-bold leading-tight tracking-[-0.06em] md:text-6xl">
              Turning ideas into
              <span className="hand-underline block w-fit text-[var(--muted)]">useful interfaces.</span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-[var(--muted)] md:text-lg">
              I'm Khaled Elfahl, a full-stack developer and React developer focused on
              building polished web experiences across the frontend and backend.
            </p>

            <p className="mt-4 max-w-xl leading-7 text-[var(--muted)]">
              I care about the details that make products feel professional: hierarchy,
              spacing, typography, interaction, and consistency.
            </p>
          </motion.div>

          <div className="lg:pt-16">
            <div className="relative border-l border-[var(--border)] pl-6 sm:pl-8">
              {workingStyle.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative pb-8 transition-transform duration-300 last:pb-2 ${index === 1 ? 'sm:translate-x-8' : ''} hover:translate-x-2`}
                >
                  <span className="absolute -left-[2.05rem] top-1 h-3 w-3 rounded-full border-2 border-[var(--bg)] bg-blue-500 transition-transform duration-300 group-hover:scale-150" />
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-blue-500">0{index + 1}</span>
                    <h3 className="font-display text-xl font-bold text-[var(--text)]">{item.title}</h3>
                  </div>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 border-t border-[var(--border)] pt-7">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500">
                What I bring
              </p>

              <h3 className="mt-4 max-w-2xl font-display text-2xl font-bold tracking-[-0.05em] text-[var(--text)] md:text-3xl">
                I bring a practical, polished full-stack mindset.
              </h3>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 sm:items-start">
                {whyHireMe.map((item, index) => (
                  <details
                    key={item.title}
                    className={`group border border-[var(--border)] bg-[var(--surface)] transition-all duration-300 ${
                      index === 0
                        ? 'rounded-[1.75rem] sm:row-span-2'
                        : index === 1
                          ? 'rounded-xl'
                          : index % 2 === 0
                            ? 'rounded-[2.25rem]'
                            : 'rounded-md'
                    }`}
                  >
                    <summary
                      aria-label={`Show details about ${item.title}`}
                      className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-[var(--text)] marker:hidden"
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-xs text-blue-500">0{index + 1}</span>
                        {item.title}
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-xl font-light text-[var(--accent)] transition-transform duration-300 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>

                    <div className="border-t border-[var(--border)] px-5 pb-5 pt-4">
                      <p className="text-sm leading-6 text-[var(--muted)]">{item.description}</p>
                    </div>
                  </details>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 border-l-2 border-blue-500/60 bg-blue-500/5 p-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-medium text-[var(--text)]">
                  Available for full-stack roles and freelance work on Khamsat and Mostaql.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full bg-blue-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-violet-500"
                >
                  Let’s talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
