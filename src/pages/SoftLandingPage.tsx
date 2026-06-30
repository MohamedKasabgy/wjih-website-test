import { useTranslation } from 'react-i18next'

import { Container } from '../components/ui/Container'
import { pageThemes } from '../config/pageThemes'
import { Button } from '../components/ui/Button'

export function SoftLandingPage() {
  const { t, i18n } = useTranslation()
  const theme = pageThemes.softLanding
  const isArabic = i18n.resolvedLanguage === 'ar'

  return (
    <Container className="py-16 sm:py-20 flex flex-col gap-16">
      {/* Hero Section */}
      <section className="border border-[var(--color-border)] liquid-glass mask-wadi p-8 shadow-sm sm:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--page-color)] opacity-10 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none"></div>
        <p className="text-sm font-semibold text-[var(--page-color)] mb-4">{theme.label}</p>
        <h1 className="text-4xl font-extrabold text-[var(--color-heading)] sm:text-5xl leading-tight mb-6" dir={isArabic ? 'rtl' : 'ltr'}>
          {t('softLanding.hero.title')}
        </h1>
        <p className="text-xl text-[var(--color-muted)] leading-relaxed mb-10 max-w-4xl" dir={isArabic ? 'rtl' : 'ltr'}>
          {t('softLanding.hero.subtitle')}
        </p>
        <div className="flex flex-wrap gap-4 relative z-10">
          <Button variant="primary" className="text-lg px-8 py-3">Apply Now | قّدم طلبك الآن</Button>
          <Button variant="outline" className="text-lg px-8 py-3">Book a Call | احجز اتصالاً استشارياً</Button>
        </div>
      </section>

      {/* About Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-6">
          {t('softLanding.about.title').replace('## ', '')}
        </h2>
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] p-8 rounded-xl shadow-sm">
          <p className="text-lg text-[var(--color-text)] leading-relaxed mb-6" dir="rtl">
            {t('softLanding.about.ar')}
          </p>
          <div className="w-16 h-px bg-[var(--color-border)] mx-auto mb-6"></div>
          <p className="text-lg text-[var(--color-text)] leading-relaxed" dir="ltr">
            {t('softLanding.about.en')}
          </p>
        </div>
      </section>

      {/* What We Offer Section */}
      <section>
        <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-10 text-center">
          {t('softLanding.offer.title').replace('## ', '')}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Government Support */}
          <div className="border border-[var(--color-border)] liquid-glass mask-wadi p-8">
            <h3 className="text-2xl font-bold text-[var(--color-heading)] mb-6 text-[var(--page-color)]">
              {t('softLanding.offer.govSupport').replace('### ', '')}
            </h3>
            
            <div className="space-y-8">
              <div dir="rtl">
                <ul className="space-y-4">
                  {[0, 1, 2].map((i) => (
                    <li key={i} className="flex gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-[var(--page-color)] flex-shrink-0"></div>
                      <span className="text-[var(--color-text)] leading-relaxed">
                        {t(`softLanding.offer.govList.${i}` as any)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div dir="ltr" className="pt-6 border-t border-[var(--color-border)]">
                <ul className="space-y-4">
                  {[0, 1, 2].map((i) => (
                    <li key={i} className="flex gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-[var(--page-color)] flex-shrink-0"></div>
                      <span className="text-[var(--color-text)] leading-relaxed">
                        {t(`softLanding.offer.enList.${i}` as any)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Market Expansion */}
          <div className="border border-[var(--color-border)] liquid-glass mask-wadi p-8">
            <h3 className="text-2xl font-bold text-[var(--color-heading)] mb-6 text-[var(--page-color)]">
              {t('softLanding.offer.growth').replace('### ', '')}
            </h3>
            
            <div className="space-y-8">
              <div dir="rtl">
                <ul className="space-y-4">
                  {[0, 1, 2].map((i) => (
                    <li key={i} className="flex gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-[var(--page-color)] flex-shrink-0"></div>
                      <span className="text-[var(--color-text)] leading-relaxed">
                        {t(`softLanding.offer.growthList.${i}` as any)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div dir="ltr" className="pt-6 border-t border-[var(--color-border)]">
                <ul className="space-y-4">
                  {[0, 1, 2].map((i) => (
                    <li key={i} className="flex gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-[var(--page-color)] flex-shrink-0"></div>
                      <span className="text-[var(--color-text)] leading-relaxed">
                        {t(`softLanding.offer.growthEnList.${i}` as any)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-12 border-t border-[var(--color-border)]">
        <h2 className="text-2xl font-bold text-[var(--color-heading)] mb-6">
          {t('softLanding.cta.title').replace('## ', '')}
        </h2>
        <Button variant="primary" className="mx-auto text-lg px-8 py-3">
          {t('softLanding.cta.button')}
        </Button>
      </section>

    </Container>
  )
}
