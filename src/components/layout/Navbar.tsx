import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router'
import { useTranslation } from 'react-i18next'
import { motion, useTransform } from 'framer-motion'

import { appRoutes } from '../../config/routes'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { useScrollProgress } from '../../hooks/useScrollProgress'
// Language switch temporarily disabled (Arabic-only for now); re-enable later.
// import { LanguageToggle } from './LanguageToggle'
import logoDarkRed from '../../assets/images/NewLogoDarkRed.svg'

const getNavLinkClassName = (isHome: boolean) => ({ isActive }: { isActive: boolean }) =>
  [
    'whitespace-nowrap text-sm font-semibold transition-colors flex items-center justify-center',
    isActive
      ? `border mask-wadi px-4 py-1.5 ${isHome ? 'border-[var(--color-text)] text-[var(--color-text)]' : 'border-[#390100] text-navbar-inactive'}`
      : `px-3 py-2 hover:opacity-70 ${isHome ? 'text-[var(--color-text)]' : 'text-navbar-inactive'}`,
  ].join(' ')

export function Navbar({ isLoading }: { isLoading?: boolean }) {
  const { t } = useTranslation()
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // On the home page the navbar starts hidden and is revealed by scrolling, in
  // sync with the morphing hero logo (see HeroLogo). On every other page it is
  // always visible.
  const isHome = location.pathname === '/'
  const progress = useScrollProgress()
  const headerOpacity = useTransform(progress, [0.2, 0.85], [0, 1])
  const headerY = useTransform(progress, [0, 1], [-24, 0])
  const headerStyle = isHome ? { opacity: headerOpacity, y: headerY } : undefined

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 8)
    }

    updateScrollState()
    window.addEventListener('scroll', updateScrollState)

    return () => {
      window.removeEventListener('scroll', updateScrollState)
    }
  }, [])

  const rightRoutes = appRoutes.slice(0, 3)
  const leftRoutes = appRoutes.slice(3)

  return (
    <motion.header
      className="fixed left-0 right-0 z-[70] w-full"
      style={headerStyle}
    >
      <Container>
        <div
          className={[
            'navbar-glass transition-all duration-500 ease-out',
            isScrolled
              ? 'liquid-glass shadow-md border-transparent rounded-[2rem] mt-2 md:mt-3'
              : 'bg-white/40 backdrop-blur-lg border border-[#EAE4E0] shadow-sm rounded-b-[2rem] rounded-t-none',
          ].join(' ')}
        >
          <div className="grid grid-cols-[1fr_auto_1fr] items-center min-h-16 px-4 md:px-8">

            {/* Start side (Right): 3 links distributed evenly */}
            <nav aria-label="Primary navigation" className="hidden md:flex justify-between items-center w-full px-4 lg:px-8">
              {appRoutes.slice(0, 3).map((route) => (
                <div key={route.path} className="flex-1 flex justify-center">
                  <NavLink className={getNavLinkClassName(isHome)} to={route.path}>
                    {t(route.labelKey)}
                  </NavLink>
                </div>
              ))}
            </nav>

            {/* Center: Logo */}
            <div className="relative flex justify-center w-32 sm:w-40 h-full items-center">
              {!isHome && !isLoading && (
                <NavLink
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%-6px)] flex items-center hover:opacity-80 transition-opacity z-50"
                >
                  <motion.img 
                    layoutId="wjih-logo"
                    src={logoDarkRed} 
                    alt="WJIH Logo" 
                    className="h-[72px] sm:h-[90px] w-auto max-w-none object-contain" 
                    transition={{ type: "spring", damping: 12, stiffness: 90 }}
                  />
                </NavLink>
              )}
            </div>

            {/* End side (Left): 2 links + login button distributed evenly */}
            <div className="flex justify-end md:justify-between items-center w-full px-4 lg:px-8">
              {appRoutes.slice(3).map((route) => (
                <div key={route.path} className="hidden md:flex flex-1 justify-center">
                  <NavLink className={getNavLinkClassName(isHome)} to={route.path}>
                    {t(route.labelKey)}
                  </NavLink>
                </div>
              ))}

              <div className="hidden md:flex flex-1 justify-center">
                <Button
                  variant="primary"
                  className="!px-6 !py-2.5 text-sm shrink-0"
                >
                  {t('common.login')}
                </Button>
              </div>

              {/* Mobile menu toggle */}
              <button
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? t('common.close') : t('common.menu')}
                className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-sm font-semibold text-[var(--color-text)] md:hidden hover:bg-[var(--page-color-soft)] transition-colors ml-4"
                type="button"
                onClick={() => setIsMenuOpen((current) => !current)}
              >
                {isMenuOpen ? t('common.close') : t('common.menu')}
              </button>
            </div>

          </div>

          {/* Mobile menu dropdown */}
          {isMenuOpen && (
            <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)]/50 md:hidden">
              <div className="flex flex-col gap-3 p-6">
                <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
                  {appRoutes.map((route) => (
                    <NavLink
                      className={getNavLinkClassName(isHome)}
                      key={route.path}
                      to={route.path}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t(route.labelKey)}
                    </NavLink>
                  ))}
                </nav>
              </div>
            </div>
          )}

        </div>
      </Container>
    </motion.header>
  )
}
