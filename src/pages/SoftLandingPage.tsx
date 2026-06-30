import { useTranslation } from 'react-i18next'

import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'

export function SoftLandingPage() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col bg-white min-h-screen">

      {/* ── Hero Header ──────────────────────────────────────── */}
      <div className="hero-header bg-gradient-to-br from-[#1E2650] via-[#1E2650] to-[#2a3368]">
        <Container className="relative z-10">
          <span className="label-accent !text-[#EE7203] !border-[#EE7203]/40">Soft Landing Program</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6 max-w-3xl">
            {t('softLanding.hero.title')}
          </h1>
          <p className="text-xl text-white/60 leading-relaxed max-w-2xl mb-10">
            {t('softLanding.hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" className="text-base px-8 py-4 !bg-[#EE7203] !border-[#EE7203] !text-white hover:!bg-[#c96102]">
              Apply Now | قدّم طلبك الآن
            </Button>
            <Button variant="outline" className="text-base px-8 py-4 !border-white/25 !text-white hover:!bg-white/10">
              Book a Call | احجز اتصالاً استشارياً
            </Button>
          </div>
        </Container>
      </div>

      {/* ── About ─────────────────────────────────────────────── */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-16">
            <span className="label-accent" style={{ color: '#1E2650', borderColor: 'rgba(30,38,80,0.3)' }}>
              {t('softLanding.about.title').replace('## ', '')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E2650]">
              {t('softLanding.about.title').replace('## ', '')}
            </h2>
          </div>
          <div className="section-card p-10 sm:p-14 max-w-4xl mx-auto">
            <p className="text-lg text-[#1E2650] leading-relaxed mb-10" dir="rtl">
              {t('softLanding.about.ar')}
            </p>
            <div className="section-divider mb-10" />
            <p className="text-lg text-[#1E2650] leading-relaxed" dir="ltr">
              {t('softLanding.about.en')}
            </p>
          </div>
        </Container>
      </section>

      <div className="section-divider mx-8 sm:mx-20" />

      {/* ── What We Offer ─────────────────────────────────────── */}
      <section className="bg-[#FAFAF9] py-24">
        <Container>
          <div className="text-center mb-16">
            <span className="label-accent" style={{ color: '#1E2650', borderColor: 'rgba(30,38,80,0.3)' }}>
              {t('softLanding.offer.title').replace('## ', '')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E2650]">
              {t('softLanding.offer.title').replace('## ', '')}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">

            {/* Government Support */}
            <div className="section-card p-8 sm:p-10">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#EAE4E0]">
                <div className="w-12 h-12 rounded-xl bg-[#1E2650] text-white flex items-center justify-center font-black text-lg">01</div>
                <h3 className="text-2xl font-bold text-[#1E2650]">
                  {t('softLanding.offer.govSupport').replace('### ', '')}
                </h3>
              </div>
              <div className="space-y-8">
                <ul className="space-y-4" dir="rtl">
                  {[0, 1, 2].map((i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <div className="mt-2 w-2 h-2 rounded-full bg-[#1E2650] flex-shrink-0" />
                      <span className="text-[#1E2650] leading-relaxed">
                        {t(`softLanding.offer.govList.${i}` as any)}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="section-divider" />
                <ul className="space-y-4" dir="ltr">
                  {[0, 1, 2].map((i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <div className="mt-2 w-2 h-2 rounded-full bg-[#1E2650] flex-shrink-0" />
                      <span className="text-[#1E2650] leading-relaxed">
                        {t(`softLanding.offer.enList.${i}` as any)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Market Expansion */}
            <div className="section-card p-8 sm:p-10">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#EAE4E0]">
                <div className="w-12 h-12 rounded-xl bg-[#EE7203] text-white flex items-center justify-center font-black text-lg">02</div>
                <h3 className="text-2xl font-bold text-[#1E2650]">
                  {t('softLanding.offer.growth').replace('### ', '')}
                </h3>
              </div>
              <div className="space-y-8">
                <ul className="space-y-4" dir="rtl">
                  {[0, 1, 2].map((i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <div className="mt-2 w-2 h-2 rounded-full bg-[#EE7203] flex-shrink-0" />
                      <span className="text-[#1E2650] leading-relaxed">
                        {t(`softLanding.offer.growthList.${i}` as any)}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="section-divider" />
                <ul className="space-y-4" dir="ltr">
                  {[0, 1, 2].map((i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <div className="mt-2 w-2 h-2 rounded-full bg-[#EE7203] flex-shrink-0" />
                      <span className="text-[#1E2650] leading-relaxed">
                        {t(`softLanding.offer.growthEnList.${i}` as any)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="bg-[#EE7203] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.06] rounded-full -translate-y-1/2 translate-x-1/3" />
        <Container className="relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 max-w-3xl mx-auto leading-tight">
            {t('softLanding.cta.title').replace('## ', '')}
          </h2>
          <Button variant="primary" className="text-base px-10 py-4 !bg-white !border-white !text-[#EE7203] hover:!bg-[#FAFAF9]">
            {t('softLanding.cta.button')}
          </Button>
        </Container>
      </section>

    </div>
  )
}
