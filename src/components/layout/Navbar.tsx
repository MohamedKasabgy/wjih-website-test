import { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import { useTranslation } from 'react-i18next'

import { appRoutes } from '../../config/routes'
import { Container } from '../ui/Container'
// Language switch temporarily disabled (Arabic-only for now); re-enable later.
// import { LanguageToggle } from './LanguageToggle'
import logo from '../../assets/images/LogoWijih.png'

const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
  [
    'whitespace-nowrap rounded-md px-3 py-2 text-sm font-semibold transition-colors hover:text-[var(--page-color)]',
    isActive ? 'text-[var(--page-color)]' : 'text-[var(--color-text)]',
  ].join(' ')

export function Navbar() {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    <header className="fixed  left-0 right-0 z-40 w-full transition-all">
      <Container>
        <div
          className={[
            'liquid-glass transition-all duration-300 overflow-hidden',
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
          <div className="grid grid-cols-3 items-center min-h-16 px-6">

            {/* Start side: Language toggle (temporarily disabled — re-enable later) */}
            <div className="flex justify-start gap-2">
              {/* <LanguageToggle /> */}
            </div>

            {/* Center: Logo */}
            <div className="flex justify-center">
              <NavLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <img src={logo} alt="WJIH Logo" className="h-10 w-auto" />
              </NavLink>
            </div>

            {/* End side: Navigation links (Desktop) & Menu button (Mobile) */}
            <div className="flex justify-end">
              <nav aria-label="Primary navigation" className="hidden gap-1 md:flex">
                {appRoutes.map((route) => (
                  <NavLink className={navLinkClassName} key={route.path} to={route.path}>
                    {t(route.labelKey)}
                  </NavLink>
                ))}
              </nav>

              <button
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? t('common.close') : t('common.menu')}
                className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-sm font-semibold text-[var(--color-text)] md:hidden hover:bg-[var(--page-color-soft)] transition-colors"
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
    </header>
  )
}
