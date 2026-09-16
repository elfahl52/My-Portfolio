import { motion } from 'framer-motion'
import { FiArrowDown, FiArrowUpRight, FiMapPin } from 'react-icons/fi'
import { Button } from '../ui/Button'
import { Container } from '../layout/Container'
import { Typewriter } from '../animations/Typewriter'

export function HeroSection({ roles, profileImage }) {
  return (
    <section
      id="home"
      data-aos="fade-up"
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-28 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[10%] h-[420px] w-[420px] rounded-full bg-blue-500/[0.07] blur-[120px] dark:bg-[#7F77DD]/[0.05]" />
        <div className="absolute bottom-[-10%] right-[-5%] h-[380px] w-[380px] rounded-full bg-violet-500/[0.06] blur-[120px] dark:bg-[#534AB7]/[0.04]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.15] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-60 dark:bg-[#7F77DD]" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500 dark:bg-[#7F77DD]" />
              </span>
              Available for full-stack roles & freelance work on Khamsat and Mostaql
            </div>

            <h1 className="max-w-4xl font-display text-[clamp(3.5rem,7vw,7.5rem)] font-bold leading-[0.88] tracking-[-0.075em]">
              Hi, I'm
              <span className="mt-2 block bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 bg-[length:200%_auto] bg-clip-text text-transparent dark:from-[#7F77DD] dark:via-[#534AB7] dark:to-[#7F77DD]">
                Khaled Elfahl
              </span>

              <span className="mt-6 block text-[clamp(1.7rem,3vw,3rem)] font-medium leading-tight tracking-[-0.04em] text-[var(--muted)]">
                <Typewriter words={roles} />
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Full-stack developer with a strong focus on React interfaces and Laravel
              backends, building polished digital experiences that are useful, responsive,
              and reliable.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                as="a"
                href="#projects"
                variant="primary"
                className="group rounded-xl !px-6 !py-3 !text-black"
              >
                View Projects
                <FiArrowUpRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>

              <Button
                as="a"
                href="/Khaled_Elfahl_CV.pdf"
                download
                variant="secondary"
                className="rounded-xl !px-6 !py-3"
              >
                Download CV
              </Button>

              <Button
                as="a"
                href="#contact"
                variant="secondary"
                className="rounded-xl !px-6 !py-3"
              >
                Contact Me
              </Button>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[var(--muted)]">
              <div className="flex items-center gap-2">
                <FiMapPin className="text-blue-500" />
                Sharqia, Egypt
              </div>

              <a
                href="mailto:khaledelfahl56@gmail.com"
                className="transition hover:text-blue-500"
              >
                khaledelfahl56@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[470px]"
          >
            <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-blue-500/20 via-transparent to-violet-500/20 blur-3xl" />

            <div className="group relative overflow-hidden rounded-[36px] border border-[var(--border)] bg-[var(--card)] p-2 shadow-[0_30px_100px_var(--shadow)]">
              <div className="relative overflow-hidden rounded-[30px]">
                <img
                  src={profileImage}
                  alt="Khaled Elfahl"
                  className="h-[520px] w-full object-cover object-center grayscale-[15%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                <div className="absolute inset-x-5 bottom-5">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                          Currently
                        </p>
                        <p className="mt-1 font-semibold text-white">
                          Building for the web
                        </p>
                      </div>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-950">
                        <FiArrowUpRight />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-4 top-12 hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 shadow-xl sm:block"
            >
              <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--muted)]">Core</p>
              <p className="mt-1 font-bold text-blue-500">Full-Stack</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-[-30px] left-1/2 hidden -translate-x-1/2 flex-col items-center text-[var(--muted)] md:flex"
        >
          <span className="mb-2 text-[9px] uppercase tracking-[0.3em]">Scroll</span>
          <FiArrowDown />
        </motion.a>
      </Container>
    </section>
  )
}
