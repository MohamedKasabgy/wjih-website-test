import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router'

import { appRoutes } from '../../config/routes'
import { createWhatsAppUrl } from '../../lib/whatsapp'
import { buttonClasses } from '../ui/buttonStyles'
import { Container } from '../ui/Container'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-[var(--color-border)] bg-white py-6">
      <Container className="flex flex-col gap-5 text-sm text-[var(--color-muted)] lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-md">
          <p className="font-bold text-[var(--color-heading)]">Wadi Jeddah Innovation Hub</p>
          <p className="mt-2">{t('footer.description')}</p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-3">
          {appRoutes.map((route) => (
            <NavLink
              className="font-semibold text-[var(--color-text)] transition-colors hover:text-[var(--page-color)]"
              key={route.path}
              to={route.path}
            >
              {t(route.labelKey)}
            </NavLink>
          ))}
        </nav>

        <a
          className={buttonClasses('primary')}
          href={createWhatsAppUrl()}
          rel="noreferrer"
          target="_blank"
        >
          {t('common.contactWhatsapp')}
        </a>
      </Container>
    </footer>
  )
}
