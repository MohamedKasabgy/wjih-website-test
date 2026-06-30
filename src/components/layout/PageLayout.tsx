import { useEffect, useState, type CSSProperties } from 'react'
import { Outlet, useLocation } from 'react-router'

import { getRouteByPath } from '../../config/routes'
import { pageThemes } from '../../config/pageThemes'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import Logo from '../../assets/images/LogoWijih.png'

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
  const [prevPath, setPrevPath] = useState(location.pathname)

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
    <div className="min-h-svh bg-transparent text-[var(--color-text)] transition-colors duration-500 relative" style={themeStyle}>

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
        <main className="">
          <Outlet />
        </main>
        <Footer />
      </div>
      )
}
