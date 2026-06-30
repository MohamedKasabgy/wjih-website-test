import { useEffect, useState, type CSSProperties } from 'react'
import { Outlet, useLocation } from 'react-router'

import { getRouteByPath } from '../../config/routes'
import { pageThemes } from '../../config/pageThemes'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import Logo from '../../assets/images/LogoWijih.png'
import bgImage from '../../assets/images/BG.jpg'

type ThemeStyle = CSSProperties & {
  '--page-color': string
  '--page-color-soft': string
  '--color-bg': string
  '--color-text': string
  '--color-heading': string
  '--color-muted': string
  '--color-surface': string
  '--color-border': string
}

export function PageLayout() {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [location.pathname])

  const route = getRouteByPath(location.pathname)
  const theme = pageThemes[route.key]

  const themeStyle: ThemeStyle = {
    '--page-color': theme.color,
    '--page-color-soft': `${theme.color}33`,
    '--color-bg': theme.bg,
    '--color-text': theme.text,
    '--color-heading': theme.heading,
    '--color-muted': theme.muted,
    '--color-surface': theme.surface,
    '--color-border': theme.border,
  }

  return (
    <div className="min-h-svh bg-white text-[var(--color-text)] transition-colors duration-500 relative z-0" style={themeStyle}>
      {/* Global Background Layer */}
      <div 
        className="absolute inset-0 z-[-1] pointer-events-none" 
        style={{ 
          backgroundImage: `url(${bgImage})`, 
          backgroundSize: '100% auto', 
          backgroundRepeat: 'repeat', 
          backgroundPosition: 'top center',
          opacity: 0.06
        }} 
      />

      {/* Loading Overlay */}
      <div
        className={`fixed inset-0 z-[60] flex items-center justify-center bg-white/40 backdrop-blur-md backdrop-saturate-150 transition-all duration-500 ${isLoading ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <div className="flex flex-col items-center justify-center">
          <img
            src={Logo}
            alt="Wijih Logo"
            className="w-60 h-auto animate-logo-pulse"
          />
        </div>
        </div>

        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
      )
}
