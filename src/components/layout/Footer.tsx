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
        <div className="flex flex-col md:flex-row justify-between md:items-start gap-12 text-base text-white/80">

          {/* Brand */}
          <div className="max-w-md">
            <img src={logo} alt="Wadi Jeddah" className="h-24 md:h-32 w-auto mb-6 brightness-0 invert opacity-90" />
            <p className="leading-relaxed mb-8 text-white/70 text-lg">
              {t('footer.description')}
            </p>
            <a
              className={[buttonClasses('primary'), '!bg-[#25D366] !border-[#25D366] hover:!bg-[#1ebd59] !text-white text-lg px-8 py-3'].join(' ')}
              href={createWhatsAppUrl()}
              rel="noreferrer"
              target="_blank"
            >
              {t('common.contactWhatsapp')}
            </a>
          </div>

          {/* Contact */}
          <div className="text-right">
            <h4 className="font-bold text-white text-xl mb-6">{t('footer.contactInfo')}</h4>
            <ul className="flex flex-col gap-5 text-lg">
              <li>
                <span className="block text-sm font-bold uppercase tracking-wider text-white/50 mb-1">{t('footer.phone')}</span>
                <a href="tel:0550268326" className="text-white/90 hover:text-white transition-colors font-medium">
                  0550268326
                </a>
              </li>
              <li>
                <span className="block text-sm font-bold uppercase tracking-wider text-white/50 mb-1">{t('footer.email')}</span>
                <a href="mailto:Wjih@wadi-jeddah.com.sa" className="text-white/90 hover:text-white transition-colors font-medium">
                  Wjih@wadi-jeddah.com.sa
                </a>
              </li>
              <li>
                <span className="block text-sm font-bold uppercase tracking-wider text-white/50 mb-1">{t('footer.location')}</span>
                <span className="text-white/90">{t('footer.locationText')}</span>
                <iframe
                  width="100%"
                  height="120"
                  frameBorder={0}
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?q=Wadi%20Jeddah&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="rounded-lg opacity-80 hover:opacity-100 transition-opacity mt-4 w-full max-w-[280px]"
                ></iframe>
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
