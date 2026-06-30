import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router'

import { appRoutes } from '../../config/routes'
import { createWhatsAppUrl } from '../../lib/whatsapp'
import { buttonClasses } from '../ui/buttonStyles'
import { Container } from '../ui/Container'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-[var(--color-border)] liquid-glass py-12 relative z-10 mt-20">
      <Container className="grid md:grid-cols-3 gap-10 text-sm text-[var(--color-text)]">
        
        {/* Brand Section */}
        <div>
          <p className="text-xl font-bold text-[var(--color-heading)] mb-4">Wadi Jeddah Innovation Hub</p>
          <p className="leading-relaxed mb-6">{t('footer.description')}</p>
          <a
            className={buttonClasses('primary')}
            href={createWhatsAppUrl()}
            rel="noreferrer"
            target="_blank"
          >
            {t('common.contactWhatsapp')}
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-[var(--color-heading)] text-lg mb-4">{t('footer.quickLinks')}</h4>
          <nav aria-label="Footer navigation" className="flex flex-col gap-3">
            {appRoutes.map((route) => (
              <NavLink
                className="font-medium text-[var(--color-text)] transition-colors hover:text-[var(--page-color)]"
                key={route.path}
                to={route.path}
              >
                {t(route.labelKey)}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-[var(--color-heading)] text-lg mb-4">{t('footer.contactInfo')}</h4>
          <ul className="flex flex-col gap-3">
            <li>
              <span className="font-semibold text-[var(--color-heading)]">{t('footer.phone')}:</span>{' '}
              <a href="tel:0550268326" className="hover:text-[var(--page-color)] transition-colors">0550268326</a>
            </li>
            <li>
              <span className="font-semibold text-[var(--color-heading)]">{t('footer.email')}:</span>{' '}
              <a href="mailto:Wjih@wadi-jeddah.com.sa" className="hover:text-[var(--page-color)] transition-colors">Wjih@wadi-jeddah.com.sa</a>
            </li>
            <li>
              <span className="font-semibold text-[var(--color-heading)]">{t('footer.location')}:</span>{' '}
              {t('footer.locationText')}
            </li>
          </ul>
        </div>

      </Container>
    </footer>
  )
}
