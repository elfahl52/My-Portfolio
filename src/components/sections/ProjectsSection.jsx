import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { SiReact, SiTailwindcss, SiVite } from 'react-icons/si'
import { Container } from '../layout/Container'

const toolIcons = {
  React: SiReact,
  Tailwind: SiTailwindcss,
  Vite: SiVite,
}

export function ProjectsSection({ projects }) {
  return (
    <section id="projects" data-aos="fade-up" className="py-28">
      <Container>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500">
              Selected work
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.06em] md:text-6xl">
              Things I've
              <span className="text-[var(--muted)]"> built.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[var(--muted)]">
            A selection of frontend and backend work focused on clean UI, responsive layouts, and practical product experiences.
          </p>
        </div>

        <div className="mt-12 space-y-20">
          {[
            {
              title: 'Frontend Projects',
              projects: projects.filter((project) => project.category !== 'Backend'),
            },
            {
              title: 'Backend Projects',
              projects: projects.filter((project) => project.category === 'Backend'),
            },
          ].map((group) => (
            <div key={group.title}>
              <h3 className="mb-7 font-display text-3xl font-bold tracking-[-0.05em] md:text-4xl">
                {group.title}
              </h3>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {group.projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              whileHover={{
                y: index % 2 === 0 ? -8 : -4,
                rotate: index % 2 === 0 ? -0.4 : 0.4,
              }}
              className={`group overflow-hidden border border-[var(--border)] bg-[var(--card)] shadow-sm transition-shadow duration-300 hover:shadow-2xl ${
                index % 3 === 0
                  ? 'rounded-[2rem]'
                  : index % 3 === 1
                    ? 'rounded-xl'
                    : 'rounded-[2.75rem]'
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface-strong)]">
                {project.previewUrl ? (
                  <iframe
                    src={project.previewUrl}
                    title={`${project.title} live preview`}
                    loading="eager"
                    allow="autoplay; fullscreen"
                    scrolling="no"
                    className="live-preview h-full w-full border-0 bg-white"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />
                <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-white backdrop-blur-md">
                  {project.previewUrl ? 'Live preview' : project.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold tracking-[-0.04em]">{project.title}</h3>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)] transition group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:text-white">
                    <FiArrowUpRight />
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[var(--surface)] px-3 py-1.5 text-[10px] font-semibold text-[var(--muted)]"
                    >
                      {toolIcons[item] && (() => {
                        const ToolIcon = toolIcons[item]
                        return <ToolIcon aria-hidden="true" className="text-sm" />
                      })()}
                      {item}
                    </span>
                  ))}
                </div>

                {(project.links.live || project.links.code) && (
                  <div className="mt-6 flex gap-5">
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noreferrer" className="text-sm font-semibold text-blue-500 hover:text-violet-500">
                        Live demo →
                      </a>
                    )}
                    {project.links.code && (
                      <a href={project.links.code} target="_blank" rel="noreferrer" className="text-sm font-semibold text-blue-500 hover:text-violet-500">
                        Source code →
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
