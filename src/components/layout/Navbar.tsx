import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router'
import { useTranslation } from 'react-i18next'
import { motion, useTransform } from 'framer-motion'

import { appRoutes } from '../../config/routes'
import { Container } from '../ui/Container'
import { useScrollProgress } from '../../hooks/useScrollProgress'
// Language switch temporarily disabled (Arabic-only for now); re-enable later.
// import { LanguageToggle } from './LanguageToggle'
import logo from '../../assets/images/LogoWijih.png'

const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
  [
    'whitespace-nowrap rounded-md px-3 py-2 text-sm font-semibold transition-colors hover:text-[var(--page-color)]',
    isActive ? 'text-[var(--page-color)]' : 'text-[var(--color-navy)]',
  ].join(' ')

export function Navbar() {
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
      className="fixed left-0 right-0 z-40 w-full"
      style={headerStyle}
    >
      <Container>
        <div
          className={[
            'transition-all duration-500',
            isScrolled
              ? 'liquid-glass shadow-md border-transparent rounded-[2rem] mt-2 md:mt-3'
              : 'bg-white/80 backdrop-blur-md border border-[#EAE4E0] shadow-sm rounded-b-[2rem] rounded-t-none',
          ].join(' ')}
        >
          <div className="grid grid-cols-[1fr_auto_1fr] items-center min-h-16 px-4 md:px-8">

            {/* Start side (Right in RTL): First half of links */}
            <div className="hidden md:flex justify-end items-center pe-6 lg:pe-12">
              <nav aria-label="Primary navigation" className="flex gap-4 lg:gap-8">
                {rightRoutes.map((route) => (
                  <NavLink className={navLinkClassName} key={route.path} to={route.path}>
                    {t(route.labelKey)}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Center: Logo */}
            <div className="flex justify-center md:justify-center justify-start z-10">
              <NavLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <img src={logo} alt="WJIH Logo" className="h-16 w-auto drop-shadow-md scale-125 lg:scale-[1.35] transition-transform" />
              </NavLink>
            </div>

            {/* End side (Left in RTL): Second half of links & Menu button */}
            <div className="flex justify-end md:justify-start items-center ps-0 md:ps-6 lg:ps-12 w-full">
              <nav aria-label="Secondary navigation" className="hidden gap-4 lg:gap-8 md:flex">
                {leftRoutes.map((route) => (
                  <NavLink className={navLinkClassName} key={route.path} to={route.path}>
                    {t(route.labelKey)}
                  </NavLink>
                ))}
              </nav>

              <button
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? t('common.close') : t('common.menu')}
                className="ms-auto rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-sm font-semibold text-[var(--color-text)] md:hidden hover:bg-[var(--page-color-soft)] transition-colors"
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
                      className={navLinkClassName}
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
