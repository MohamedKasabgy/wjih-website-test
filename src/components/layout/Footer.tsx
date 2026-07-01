import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router'

import { appRoutes } from '../../config/routes'
import { createWhatsAppUrl } from '../../lib/whatsapp'
import { buttonClasses } from '../ui/buttonStyles'
import { Container } from '../ui/Container'
import logo from '../../assets/images/NewLogo.svg'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-[#1E2650] mt-0">
      {/* Main footer body */}
      <Container className="pt-16 pb-10">
        <div className="grid md:grid-cols-3 gap-12 text-sm text-white/70">

          {/* Brand */}
          <div>
            <img src={logo} alt="Wadi Jeddah" className="h-10 w-auto mb-5 brightness-0 invert opacity-90" />
            <p className="leading-relaxed mb-6 text-white/60">
              {t('footer.description')}
            </p>
            <a
              className={[buttonClasses('primary'), '!bg-[#7A1219] !border-[#7A1219] hover:!bg-[#5a0d12]'].join(' ')}
              href={createWhatsAppUrl()}
              rel="noreferrer"
              target="_blank"
            >
              {t('common.contactWhatsapp')}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-base mb-5">{t('footer.quickLinks')}</h4>
            <nav aria-label="Footer navigation" className="flex flex-col gap-3">
              {appRoutes.map((route) => (
                <NavLink
                  className="text-white/60 transition-colors hover:text-white font-medium"
                  key={route.path}
                  to={route.path}
                >
                  {t(route.labelKey)}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-base mb-5">{t('footer.contactInfo')}</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <span className="block text-xs font-bold uppercase tracking-wider text-white/40 mb-1">{t('footer.phone')}</span>
                <a href="tel:0550268326" className="text-white/80 hover:text-white transition-colors font-medium">
                  0550268326
                </a>
              </li>
              <li>
                <span className="block text-xs font-bold uppercase tracking-wider text-white/40 mb-1">{t('footer.email')}</span>
                <a href="mailto:Wjih@wadi-jeddah.com.sa" className="text-white/80 hover:text-white transition-colors font-medium">
                  Wjih@wadi-jeddah.com.sa
                </a>
              </li>
              <li>
                <span className="block text-xs font-bold uppercase tracking-wider text-white/40 mb-1">{t('footer.location')}</span>
                <span className="text-white/80">{t('footer.locationText')}</span>
              </li>
            </ul>
          </div>

        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container className="py-5 flex items-center justify-between text-xs text-white/30">
          <span>© {new Date().getFullYear()} Wadi Jeddah Innovation Hub</span>
          <span className="text-[#D6BAAE]/50">مجمع وادي جدة للابتكار</span>
        </Container>
      </div>
    </footer>
  )
}
