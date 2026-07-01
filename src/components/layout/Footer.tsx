import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router'

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
            <Link 
              to="/" 
              aria-label="العودة للصفحة الرئيسية" 
              className="inline-block mb-5"
              onClick={() => {
                if (window.location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
            >
  <img
    src={logo}
    alt="Wadi Jeddah"
    className="h-28 w-auto brightness-0 invert opacity-90"
  />
</Link>
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
                  onClick={() => {
                    if (window.location.pathname === route.path) {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                  }}
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
                <a
  href="tel:+966550268326"
  className="inline-block text-white/80 hover:text-white transition-colors font-medium [direction:ltr] [unicode-bidi:isolate]"
>
  +966 55 026 8326
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
