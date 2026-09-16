import { Container } from '../layout/Container'

export function FooterSection({ navItems }) {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <Container className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">Khaled Elfahl</p>
          <p className="mt-1 text-xs text-[var(--muted)]">Full-Stack Developer</p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-[var(--muted)]">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-blue-500">
              {item.label}
            </a>
          ))}
        </div>

        <p className="text-xs text-[var(--muted-soft)]">© 2026</p>
      </Container>
    </footer>
  )
}
