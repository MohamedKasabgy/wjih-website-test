import { useTranslation } from 'react-i18next'

import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'

export function SoftLandingPage() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col bg-white min-h-screen">

      {/* ── Page Header ───────────────────────────────────────────── */}
      <div className="bg-[#1E2650] pt-32 pb-20">
        <Container>
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#D6BAAE] border-b-2 border-[#D6BAAE] pb-1 mb-6">
            Soft Landing Program
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6 max-w-3xl">
            {t('softLanding.hero.title')}
          </h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-2xl mb-10">
            {t('softLanding.hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" className="text-base px-8 py-4 bg-[#EE7203] border-[#EE7203] text-white hover:bg-[#c96102]">
              Apply Now | قدّم طلبك الآن
            </Button>
            <Button variant="outline" className="text-base px-8 py-4 border-white/30 text-white hover:bg-white/10">
              Book a Call | احجز اتصالاً استشارياً
            </Button>
          </div>
        </Container>
      </div>

      {/* ── About ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#1E2650] border-b-2 border-[#1E2650] pb-1 mb-6">
              {t('softLanding.about.title').replace('## ', '')}
            </span>
            <h2 className="text-4xl font-bold text-[#1E2650]">
              {t('softLanding.about.title').replace('## ', '')}
            </h2>
          </div>
          <div className="mask-wadi border border-[#EAE4E0] p-10 max-w-4xl mx-auto">
            <p className="text-lg text-[#1E2650] leading-relaxed mb-8" dir="rtl">
              {t('softLanding.about.ar')}
            </p>
            <div className="section-divider mb-8" />
            <p className="text-lg text-[#1E2650] leading-relaxed" dir="ltr">
              {t('softLanding.about.en')}
            </p>
          </div>
        </Container>
      </section>

      <div className="section-divider mx-8 sm:mx-16" />

      {/* ── What We Offer ─────────────────────────────────────────── */}
      <section className="bg-[#FAFAF9] py-20">
        <Container>
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#1E2650] border-b-2 border-[#1E2650] pb-1 mb-6">
              {t('softLanding.offer.title').replace('## ', '')}
            </span>
            <h2 className="text-4xl font-bold text-[#1E2650]">
              {t('softLanding.offer.title').replace('## ', '')}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">

            {/* Government Support */}
            <div className="mask-wadi border border-[#EAE4E0] p-8 bg-white">
              <h3 className="text-2xl font-bold text-[#1E2650] mb-6 pb-4 border-b border-[#EAE4E0]">
                {t('softLanding.offer.govSupport').replace('### ', '')}
              </h3>
              <div className="space-y-8">
                <ul className="space-y-4" dir="rtl">
                  {[0, 1, 2].map((i) => (
                    <li key={i} className="flex gap-4">
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
                    <li key={i} className="flex gap-4">
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
            <div className="mask-wadi border border-[#EAE4E0] p-8 bg-white">
              <h3 className="text-2xl font-bold text-[#1E2650] mb-6 pb-4 border-b border-[#EAE4E0]">
                {t('softLanding.offer.growth').replace('### ', '')}
              </h3>
              <div className="space-y-8">
                <ul className="space-y-4" dir="rtl">
                  {[0, 1, 2].map((i) => (
                    <li key={i} className="flex gap-4">
                      <div className="mt-2 w-2 h-2 rounded-full bg-[#1E2650] flex-shrink-0" />
                      <span className="text-[#1E2650] leading-relaxed">
                        {t(`softLanding.offer.growthList.${i}` as any)}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="section-divider" />
                <ul className="space-y-4" dir="ltr">
                  {[0, 1, 2].map((i) => (
                    <li key={i} className="flex gap-4">
                      <div className="mt-2 w-2 h-2 rounded-full bg-[#1E2650] flex-shrink-0" />
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

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="bg-[#EE7203] py-20">
        <Container className="text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            {t('softLanding.cta.title').replace('## ', '')}
          </h2>
          <Button variant="primary" className="text-base px-10 py-4 bg-white border-white text-[#EE7203] hover:bg-[#FAFAF9]">
            {t('softLanding.cta.button')}
          </Button>
        </Container>
      </section>

    </div>
  )
}
