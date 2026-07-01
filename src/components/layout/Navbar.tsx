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
import logo from '../../assets/images/LogoWijih.png'

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
              ? 'shadow-lg shadow-[var(--page-color-soft)] border-transparent'
              : 'border border-[var(--color-border)] shadow-sm',
          ].join(' ')}
          style={{
            // Square corners (no rounding)
            borderStartStartRadius: '0',
            borderEndStartRadius: '9',
            borderStartEndRadius: '0',
            borderEndEndRadius: '9',
          }}
        >
          <div className="grid grid-cols-[1fr_auto_1fr] items-center min-h-16 px-4 md:px-8">

            {/* Start side: Login Button and First half of links */}
            <div className="flex justify-between items-center w-full px-4 gap-6">
              <Button
                variant="primary"
                className="hidden md:inline-flex !px-6 !py-2.5 text-sm shrink-0"
              >
                {t('common.login')}
              </Button>
              <nav aria-label="Primary navigation" className="hidden gap-6 md:flex">
                {appRoutes.slice(0, 2).map((route) => (
                  <NavLink className={getNavLinkClassName(isHome)} key={route.path} to={route.path}>
                    {t(route.labelKey)}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Center: Logo — Fixed width to reserve space, absolute logo to allow it to be larger than the navbar */}
            <div className="relative flex justify-center w-40 md:w-56 h-full items-center">
              {!isHome && !isLoading && (
                <NavLink
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center hover:opacity-80 transition-opacity z-50"
                >
                  <motion.img 
                    layoutId="wjih-logo"
                    src={logo} 
                    alt="WJIH Logo" 
                    className="h-[72px] sm:h-[90px] w-auto max-w-none object-contain" 
                    transition={{ type: "spring", damping: 12, stiffness: 90 }}
                  />
                </NavLink>
              )}
            </div>

            {/* End side: Second half of links & Mobile Menu Button (Push to start/center) */}
            <div className="flex justify-start gap-6 px-4 items-center">
              <nav aria-label="Primary navigation" className="hidden gap-6 md:flex">
                {appRoutes.slice(2).map((route) => (
                  <NavLink className={getNavLinkClassName(isHome)} key={route.path} to={route.path}>
                    {t(route.labelKey)}
                  </NavLink>
                ))}
              </nav>

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
