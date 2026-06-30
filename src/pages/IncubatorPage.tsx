import { useTranslation } from 'react-i18next'

import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'

export function IncubatorPage() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col bg-white min-h-screen">

      {/* ── Page Header ───────────────────────────────────────────── */}
      <div className="bg-[#FAFAF9] border-b border-[#EAE4E0] pt-32 pb-20">
        <Container>
          <span className="label-accent" style={{ color: '#3B0000', borderColor: '#3B0000' }}>حاضنة وادي جدة</span>
          <h1 className="text-5xl sm:text-6xl font-black text-[#1E2650] leading-tight mb-6 max-w-3xl">
            {t('incubator.hero.title').replace('# ', '')}
          </h1>
          <p className="text-xl text-[#5A6480] leading-relaxed max-w-2xl mb-10">
            {t('incubator.hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" className="text-base px-8 py-4" style={{ background: '#3B0000', borderColor: '#3B0000', color: '#fff' }}>
              {t('common.applyNow')}
            </Button>
            <Button variant="outline" className="text-base px-8 py-4">
              {t('common.downloadGuide')}
            </Button>
          </div>
        </Container>
      </div>

      {/* ── About ─────────────────────────────────────────────────── */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="label-accent" style={{ color: '#3B0000', borderColor: '#3B0000' }}>
                {t('incubator.about.title').replace('## ', '')}
              </span>
              <h2 className="text-4xl font-bold text-[#1E2650] mb-6">
                {t('incubator.about.title').replace('## ', '')}
              </h2>
              <p className="text-lg text-[#5A6480] leading-relaxed">
                {t('incubator.about.content')}
              </p>
            </div>
            <div className="mask-wadi border border-[#EAE4E0] p-8 bg-[#FAFAF9]">
              <ul className="space-y-5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-2 w-2 h-2 rounded-full bg-[#3B0000] flex-shrink-0" />
                    <span className="text-[#1E2650] leading-relaxed">
                      {t(`incubator.about.list.${i}` as any)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <div className="section-divider mx-8 sm:mx-16" />

      {/* ── Support Ecosystem ─────────────────────────────────────── */}
      <section className="bg-[#FAFAF9] py-20">
        <Container>
          <div className="text-center mb-14">
            <span className="label-accent" style={{ color: '#3B0000', borderColor: '#3B0000' }}>منظومة الدعم</span>
            <h2 className="text-4xl font-bold text-[#1E2650]">
              {t('incubator.support.title').replace('## ', '')}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex flex-col p-6 bg-white border border-[#EAE4E0] mask-wadi hover:border-[#3B0000] transition-colors">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[rgba(59,0,0,0.06)] text-[#3B0000] font-black text-xl mb-5">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-[#1E2650] leading-relaxed">
                  {t(`incubator.support.list.${i}` as any)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <div className="section-divider mx-8 sm:mx-16" />

      {/* ── Strategy ──────────────────────────────────────────────── */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-14">
            <span className="label-accent" style={{ color: '#3B0000', borderColor: '#3B0000' }}>الاستراتيجية</span>
            <h2 className="text-4xl font-bold text-[#1E2650] max-w-3xl mx-auto">
              {t('incubator.strategy.title').replace('## ', '')}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[0, 1, 2].map((i) => (
              <div key={i} className="border border-[#EAE4E0] p-8 mask-wadi hover:border-[#3B0000] hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-bold text-[#1E2650] mb-4">
                  {t(`incubator.strategy.sections.${i}.title` as any).replace('### ', '')}
                </h3>
                <p className="text-[#5A6480] leading-relaxed">
                  {t(`incubator.strategy.sections.${i}.desc` as any)}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-[rgba(59,0,0,0.04)] border border-[rgba(59,0,0,0.15)] mask-wadi p-8 text-center max-w-4xl mx-auto">
            <p className="text-[#1E2650] font-medium leading-relaxed text-lg">
              {t('incubator.strategy.note')}
            </p>
          </div>
        </Container>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="bg-[#3B0000] py-20">
        <Container className="text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            {t('incubator.cta.title').replace('## ', '')}
          </h2>
          <Button variant="primary" className="text-base px-10 py-4 bg-[#D6BAAE] border-[#D6BAAE] text-[#3B0000] hover:bg-white hover:border-white">
            {t('incubator.cta.button')}
          </Button>
        </Container>
      </section>

    </div>
  )
}
