import { useTranslation } from 'react-i18next'

import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'

export function IncubatorPage() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col bg-white min-h-screen">

      {/* ── Hero Header ──────────────────────────────────────── */}
      <div className="hero-header bg-gradient-to-br from-[#3B0000] via-[#3B0000] to-[#5a1020]">
        <Container className="relative z-10">
          <span className="label-accent !text-[#D6BAAE] !border-[#D6BAAE]/40">حاضنة وادي جدة</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6 max-w-3xl">
            {t('incubator.hero.title').replace('# ', '')}
          </h1>
          <p className="text-xl text-white/60 leading-relaxed max-w-2xl mb-10">
            {t('incubator.hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" className="text-base px-8 py-4 !bg-[#D6BAAE] !border-[#D6BAAE] !text-[#3B0000] hover:!bg-white hover:!border-white">
              {t('common.applyNow')}
            </Button>
            <Button variant="outline" className="text-base px-8 py-4 !border-white/25 !text-white hover:!bg-white/10">
              {t('common.downloadGuide')}
            </Button>
          </div>
        </Container>
      </div>

      {/* ── About ─────────────────────────────────────────────── */}
      <section className="py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="label-accent" style={{ color: '#3B0000', borderColor: 'rgba(59,0,0,0.3)' }}>
                {t('incubator.about.title').replace('## ', '')}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E2650] mb-8 leading-tight">
                {t('incubator.about.title').replace('## ', '')}
              </h2>
              <p className="text-lg text-[#5A6480] leading-relaxed">
                {t('incubator.about.content')}
              </p>
            </div>
            <div className="section-card p-8">
              <ul className="space-y-6">
                {[0, 1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex gap-5 items-start">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(59,0,0,0.06)] flex-shrink-0 flex items-center justify-center text-[#3B0000] font-black text-sm">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <span className="text-[#1E2650] leading-relaxed pt-2">
                      {t(`incubator.about.list.${i}` as any)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <div className="section-divider mx-8 sm:mx-20" />

      {/* ── Support Ecosystem ─────────────────────────────────── */}
      <section className="bg-[#FAFAF9] py-24">
        <Container>
          <div className="text-center mb-16">
            <span className="label-accent" style={{ color: '#3B0000', borderColor: 'rgba(59,0,0,0.3)' }}>منظومة الدعم</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E2650]">
              {t('incubator.support.title').replace('## ', '')}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="section-card relative p-8 pt-16 group">
                <span className="feature-number group-hover:opacity-25 transition-opacity" style={{ color: '#3B0000' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-[#1E2650] leading-relaxed text-lg">
                  {t(`incubator.support.list.${i}` as any)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <div className="section-divider mx-8 sm:mx-20" />

      {/* ── Strategy ──────────────────────────────────────────── */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-16">
            <span className="label-accent" style={{ color: '#3B0000', borderColor: 'rgba(59,0,0,0.3)' }}>الاستراتيجية</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E2650] max-w-3xl mx-auto leading-tight">
              {t('incubator.strategy.title').replace('## ', '')}
            </h2>
          </div>

          {/* Steps as a horizontal timeline */}
          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {[0, 1, 2].map((i) => (
              <div key={i} className="relative">
                {/* Step number */}
                <div className="w-14 h-14 rounded-2xl bg-[#3B0000] text-white flex items-center justify-center font-black text-xl mb-6">
                  {i + 1}
                </div>
                {/* Connector line on desktop */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-7 left-[calc(-50%+2rem)] right-[calc(50%+2rem)] h-[2px] bg-[#3B0000]/15" />
                )}
                <h3 className="text-xl font-bold text-[#1E2650] mb-4">
                  {t(`incubator.strategy.sections.${i}.title` as any).replace('### ', '')}
                </h3>
                <p className="text-[#5A6480] leading-relaxed">
                  {t(`incubator.strategy.sections.${i}.desc` as any)}
                </p>
              </div>
            ))}
          </div>

          <div className="section-card p-8 sm:p-10 text-center max-w-4xl mx-auto bg-[rgba(59,0,0,0.02)]">
            <p className="text-[#1E2650] font-medium leading-relaxed text-lg">
              {t('incubator.strategy.note')}
            </p>
          </div>
        </Container>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="bg-[#3B0000] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D6BAAE]/[0.04] rounded-full translate-y-1/3 -translate-x-1/3" />
        <Container className="relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 max-w-3xl mx-auto leading-tight">
            {t('incubator.cta.title').replace('## ', '')}
          </h2>
          <Button variant="primary" className="text-base px-10 py-4 !bg-[#D6BAAE] !border-[#D6BAAE] !text-[#3B0000] hover:!bg-white hover:!border-white">
            {t('incubator.cta.button')}
          </Button>
        </Container>
      </section>

    </div>
  )
}
