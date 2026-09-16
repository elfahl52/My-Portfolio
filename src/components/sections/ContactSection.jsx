import { useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { Button } from '../ui/Button'
import { Container } from '../layout/Container'

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSending, setIsSending] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    setStatus({ type: '', message: '' })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ type: '', message: '' })

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please complete all fields.' })
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' })
      return
    }

    setIsSending(true)

    try {
      const response = await fetch('/api/send-telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Contact API is unavailable. Run this project with Vercel or deploy it to Vercel.')
        }

        throw new Error(result.error || 'Unable to send your message.')
      }

      setFormData({ name: '', email: '', message: '' })
      setStatus({ type: 'success', message: 'Message sent successfully.' })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof TypeError
          ? 'Network error. Make sure the Vercel API is running and try again.'
          : error.message || 'A network error occurred. Please try again.',
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="pb-28 pt-10">
      <Container>
        <div className="relative overflow-hidden rounded-[36px] border border-[var(--border)] bg-[var(--card)] p-7 shadow-[0_30px_100px_var(--shadow)] md:p-12">
          <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[100px]" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-500">
                Contact
              </p>

              <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold tracking-[-0.06em] md:text-6xl">
                Have an idea?
                <span className="block text-[var(--muted)]">Let's talk.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)] md:text-lg">
                I'm open to frontend projects, interface improvements, and opportunities where I can create useful digital experiences.
              </p>

              <a
                href="mailto:khaledelfahl56@gmail.com"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-500 transition hover:text-violet-500"
              >
                khaledelfahl56@gmail.com
                <FiArrowUpRight />
              </a>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--muted)]">
                  Name
                </label>

                <input
                  className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3.5 text-sm text-black outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--muted)]">
                  Email
                </label>

                <input
                  type="email"
                  className="w-full rounded-2xl border border-[var(--border)] bg-white px-4 py-3.5 text-sm text-black outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--muted)]">
                  Message
                </label>

                <textarea
                  rows="5"
                  className="w-full resize-none rounded-2xl border border-[var(--border)] bg-white px-4 py-3.5 text-sm text-black outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project"
                />
              </div>

              <Button type="submit" variant="primary" disabled={isSending} className="w-full rounded-2xl !py-3.5 !text-black disabled:cursor-not-allowed disabled:opacity-70">
                {isSending ? 'Sending...' : 'Send Message'}
                <FiArrowUpRight className="ml-2" />
              </Button>

              {status.message && (
                <p role="status" className={`text-sm ${status.type === 'success' ? 'text-emerald-600' : 'text-red-600'}`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
