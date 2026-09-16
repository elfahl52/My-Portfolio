import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App'
import profileImage from './assets/khaled.jpeg'
import './styles/index.css'

function AppWithAOS() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]') || document.createElement('link')
    favicon.rel = 'icon'
    favicon.href = profileImage
    document.head.appendChild(favicon)

    AOS.init({
      duration: 700,
      once: true,
      offset: 80,
      easing: 'ease-out-cubic',
    })

    const finishLoading = () => setIsLoading(false)
    window.addEventListener('load', finishLoading)
    const fallback = window.setTimeout(finishLoading, 900)

    return () => {
      window.removeEventListener('load', finishLoading)
      window.clearTimeout(fallback)
    }
  }, [])

  return (
    <>
      <div className={`site-loader ${isLoading ? 'site-loader--visible' : ''}`} aria-hidden={!isLoading}>
        <img src={profileImage} alt="" className="site-loader__image" />
        <p className="site-loader__text">Hello, I'm Khaled<span className="site-loader__dots" aria-hidden="true">...</span></p>
      </div>
      <div className={isLoading ? 'site-content--loading' : 'site-content'}>
        <App />
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWithAOS />
  </React.StrictMode>,
)
