const escapeMarkdown = (value) =>
  String(value).replace(/([_\*\[\]()~`>#+\-=|{}.!])/g, '\\$1')

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed.' })
  }

  const { name, email, message } = request.body || {}
  const normalizedName = typeof name === 'string' ? name.trim() : ''
  const normalizedEmail = typeof email === 'string' ? email.trim() : ''
  const normalizedMessage = typeof message === 'string' ? message.trim() : ''

  if (!normalizedName || !normalizedEmail || !normalizedMessage) {
    return response.status(400).json({ error: 'Name, email, and message are required.' })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    return response.status(400).json({ error: 'Please provide a valid email address.' })
  }

  if (normalizedName.length > 120 || normalizedEmail.length > 254 || normalizedMessage.length > 4000) {
    return response.status(400).json({ error: 'One or more fields are too long.' })
  }

  const { TELEGRAM_TOKEN, TELEGRAM_CHAT_ID } = process.env

  if (!TELEGRAM_TOKEN || !TELEGRAM_CHAT_ID) {
    return response.status(500).json({ error: 'Telegram integration is not configured.' })
  }

  const telegramMessage = [
    '*📬 رسالة جديدة من البورتفوليو*',
    `👤 *الاسم:* ${escapeMarkdown(normalizedName)}`,
    `📧 *الإيميل:* ${escapeMarkdown(normalizedEmail)}`,
    `💬 *الرسالة:* ${escapeMarkdown(normalizedMessage)}`,
  ].join('\n')

  try {
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${encodeURIComponent(TELEGRAM_TOKEN)}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramMessage,
          parse_mode: 'Markdown',
        }),
      },
    )

    const telegramResult = await telegramResponse.json().catch(() => ({}))

    if (!telegramResponse.ok || !telegramResult.ok) {
      return response.status(500).json({ error: 'Telegram could not receive the message.' })
    }

    return response.status(200).json({ success: true })
  } catch {
    return response.status(500).json({ error: 'Unable to connect to Telegram.' })
  }
}
