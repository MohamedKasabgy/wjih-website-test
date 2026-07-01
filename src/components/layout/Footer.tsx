import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router'

import { appRoutes } from '../../config/routes'
import { createWhatsAppUrl } from '../../lib/whatsapp'
import { buttonClasses } from '../ui/buttonStyles'
import { Container } from '../ui/Container'
import logoDarkRed from '../../assets/images/NewLogoDarkRed.svg'
import logoWjih from '../../assets/logos/WJIH.png'
import logoKau from '../../assets/logos/KAU.png'
import logoCic from '../../assets/logos/CIC.png'
export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="z-10 relative mt-12">
      <Container>
        <div className="navbar-glass shadow-md border-transparent overflow-hidden">
          
          {/* Main footer body */}
          <div className="pt-16 pb-10 px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-12 text-base text-[#390100]/80">

              {/* Brand */}
              <div className="max-w-xl">
                <img src={logoDarkRed} alt="Wadi Jeddah" className="h-24 md:h-32 w-auto mb-6" />
                <p className="leading-relaxed mb-8 text-[#390100]/80 text-lg">
                  {t('footer.description')}
                </p>
                <div className="mb-10">
                  <a
                    className={[buttonClasses('primary'), '!bg-[#25D366] !border-[#25D366] hover:!bg-[#1ebd59] !text-white text-lg px-8 py-3'].join(' ')}
                    href={createWhatsAppUrl()}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {t('common.contactWhatsapp')}
                  </a>
                </div>

                {/* Partners */}
                <div className="flex flex-row items-center gap-8 lg:gap-12 w-full mt-8 md:mt-12">
                  <img src={logoWjih} alt="Wadi Jeddah" className="h-12 md:h-16 w-auto object-contain shrink-0" />
                  <img src={logoKau} alt="KAU" className="h-12 md:h-16 w-auto object-contain shrink-0" />
                  <img src={logoCic} alt="CIC" className="h-10 md:h-14 w-auto object-contain shrink-0" />
                </div>
              </div>

              {/* Contact */}
              <div className="text-right">
                <h4 className="font-bold text-[#390100] text-xl mb-6">{t('footer.contactInfo')}</h4>
                <ul className="flex flex-col gap-5 text-lg">
                  <li>
                    <span className="block text-sm font-bold uppercase tracking-wider text-[#390100]/60 mb-1">{t('footer.phone')}</span>
                    <a href="tel:0550268326" className="text-[#390100]/90 hover:text-[#390100] transition-colors font-medium">
                      0550268326
                    </a>
                  </li>
                  <li>
                    <span className="block text-sm font-bold uppercase tracking-wider text-[#390100]/60 mb-1">{t('footer.email')}</span>
                    <a href="mailto:Wjih@wadi-jeddah.com.sa" className="text-[#390100]/90 hover:text-[#390100] transition-colors font-medium">
                      Wjih@wadi-jeddah.com.sa
                    </a>
                  </li>
                  <li>
                    <span className="block text-sm font-bold uppercase tracking-wider text-[#390100]/60 mb-1">{t('footer.location')}</span>
                    <span className="text-[#390100]/90">{t('footer.locationText')}</span>
                    <iframe
                      width="100%"
                      height="120"
                      frameBorder={0}
                      scrolling="no"
                      marginHeight={0}
                      marginWidth={0}
                      src="https://maps.google.com/maps?q=21.497723,39.2314&t=&z=19&ie=UTF8&iwloc=&output=embed"
                      className="rounded-lg opacity-80 hover:opacity-100 transition-opacity mt-4 w-full max-w-[280px]"
                    ></iframe>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#390100]/10">
            <div className="px-6 md:px-12 py-5 flex items-center justify-between text-xs text-[#390100]/50">
              <span>© {new Date().getFullYear()} Wadi Jeddah Innovation Hub</span>
              <span className="text-[#390100]/60">مجمع وادي جدة للابتكار</span>
            </div>
          </div>

        </div>
      </Container>
    </footer>
  )
}
