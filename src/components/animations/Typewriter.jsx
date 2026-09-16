import { useEffect, useState } from 'react'

export function Typewriter({ words, className = '' }) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentWord.slice(0, text.length + 1)
        setText(nextText)

        if (nextText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1200)
        }
      } else {
        const nextText = currentWord.slice(0, text.length - 1)
        setText(nextText)

        if (nextText === '') {
          setIsDeleting(false)
          setWordIndex((index) => (index + 1) % words.length)
        }
      }
    }, isDeleting ? 55 : 110)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words])

  return <span className={className}>{text}<span className="ml-1 animate-pulse">|</span></span>
}
