import { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import { useTranslation } from 'react-i18next'

import { appRoutes } from '../../config/routes'
// import { createWhatsAppUrl } from '../../lib/whatsapp'
// import { buttonClasses } from '../ui/buttonStyles'
import { Container } from '../ui/Container'
// import { LanguageToggle } from './LanguageToggle'
import logo from '../../assets/images/LogoWijih.png'

const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded-md px-3 py-2 text-sm font-semibold transition-colors hover:text-[var(--page-color)]',
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
    <header
      className={[
        'sticky top-0 z-40 liquid-glass transition-colors',
        isScrolled
          ? 'shadow-2xl shadow-black/10'
          : 'shadow-lg shadow-black/5',
      ].join(' ')}
    >
      <Container className="flex min-h-16 items-center justify-between gap-4">
        <NavLink
          className="flex items-center"
          to="/"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={logo} alt="WJIH Logo" className="h-10 w-auto" />
        </NavLink>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {appRoutes.map((route) => (
            <NavLink className={navLinkClassName} key={route.path} to={route.path}>
              {t(route.labelKey)}
            </NavLink>
          ))}
        </nav>

        {/*
        <div className="hidden items-center gap-2 md:flex">
          <LanguageToggle />
          <a
            className={buttonClasses('primary')}
            href={createWhatsAppUrl()}
            rel="noreferrer"
            target="_blank"
          >
            {t('common.contactWhatsapp')}
          </a>
        </div>
        */}

        <button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? t('common.close') : t('common.menu')}
          className="min-h-11 border border-[var(--color-border)] liquid-glass px-3 py-2 text-sm font-semibold text-[var(--color-text)] md:hidden"
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? t('common.close') : t('common.menu')}
        </button>
      </Container>

      {isMenuOpen ? (
        <div className="border-t border-[var(--color-border)] liquid-glass md:hidden">
          <Container className="flex flex-col gap-3 py-4">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
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
            {/*
            <div className="flex flex-col gap-2 sm:flex-row">
              <LanguageToggle />
              <a
                className={buttonClasses('primary')}
                href={createWhatsAppUrl()}
                rel="noreferrer"
                target="_blank"
              >
                {t('common.contactWhatsapp')}
              </a>
            </div>
            */}
          </Container>
        </div>
      ) : null}
    </header>
  )
}
