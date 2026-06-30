import { useEffect, useState, type CSSProperties } from 'react'
import { Outlet, useLocation } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'

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
    // Scroll to the top of the page on route change
    window.scrollTo(0, 0)
    
    // If navigating to home page, skip the loading animation entirely
    if (location.pathname === '/') {
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1400)

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
          opacity: 0.15
        }}
      />

      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <>
            {/* White Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-[60] bg-white"
            />
            
            {/* Centered Logo */}
            <div className="fixed inset-0 z-[80] flex items-center justify-center pointer-events-none">
              <motion.img
                layoutId="wjih-logo"
                src={Logo}
                alt="Wijih Logo"
                className="w-48 md:w-60 h-auto"
                initial={{ scaleY: 0.8 }}
                animate={{ scaleY: [0.8, 1.2, 1, 0.9, 1] }}
                exit={{ scaleY: [1, 1.2, 0.8] }}
                transition={{ 
                  layout: { type: "spring", damping: 18, stiffness: 110 },
                  scaleY: { duration: 0.6, ease: "easeInOut" }
                }}
              />
            </div>
          </>
        )}
      </AnimatePresence>

      <Navbar isLoading={isLoading} />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
