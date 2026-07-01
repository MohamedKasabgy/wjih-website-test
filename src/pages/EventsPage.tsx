import { useTranslation } from 'react-i18next'

import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'

export function EventsPage() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col min-h-screen">

      {/* ── Hero Header ──────────────────────────────────────── */}
      <div className="hero-header bg-gradient-to-br from-[#1E2650] via-[#1E2650] to-[#2a3368]">
        <Container className="relative z-10">

          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6 max-w-3xl">
            {t('events.hero.title')}
          </h1>
          <p className="text-xl text-white/60 leading-relaxed max-w-2xl mb-10">
            {t('events.hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" className="text-base px-8 py-4 !bg-[#EE7203] !border-[#EE7203] !text-white hover:!bg-[#c96102]">
              {t('events.meetingRooms.cta')}
            </Button>
            <Button variant="outline" className="text-base px-8 py-4 !border-white/25 !text-white hover:!bg-white/10">
              {t('common.requestTour')}
            </Button>
          </div>
        </Container>
      </div>

      {/* ── Meeting Rooms ─────────────────────────────────────── */}
      <section className="py-24">
        <Container>
          <div className="section-card p-10 sm:p-14">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
              <div>

                <h2 className="text-3xl md:text-4xl font-bold text-[#1E2650] mb-4">
                  {t('events.meetingRooms.title').replace('## ', '')}
                </h2>
                <p className="text-[#5A6480] leading-relaxed max-w-xl text-lg">
                  {t('events.meetingRooms.specs')}
                </p>
              </div>
              <div className="flex-shrink-0 text-center">
                <div className="text-4xl font-black text-[#EE7203] mb-4">
                  {t('events.meetingRooms.price')}
                </div>
                <Button variant="primary" className="px-10 py-4 !bg-[#EE7203] !border-[#EE7203] !text-white hover:!bg-[#c96102]">
                  {t('events.meetingRooms.cta')}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ── Event Halls ───────────────────────────────────────── */}
      <section className="bg-[#FAFAF9] py-24">
        <Container>
          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold text-[#1E2650]">
              {t('events.eventHalls.title').replace('## ', '')}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {(['hall1', 'hall2', 'hall3'] as const).map((hall, idx) => (
              <div
                key={hall}
                className={`section-card p-8 flex flex-col transition-all duration-300 ${
                  idx === 2
                    ? 'ring-2 ring-[#EE7203]/15 border-[#EE7203]/30'
                    : ''
                }`}
              >

                <h3 className="text-xl font-bold text-[#1E2650] mb-3">
                  {t(`events.eventHalls.${hall}.title` as any).replace('### ', '')}
                </h3>
                <div className="text-3xl font-black text-[#EE7203] mb-5">
                  {t(`events.eventHalls.${hall}.price` as any)}
                </div>
                <p className="text-[#5A6480] leading-relaxed flex-grow mb-8">
                  {t(`events.eventHalls.${hall}.specs` as any)}
                </p>
                <Button
                  variant={idx === 2 ? 'primary' : 'outline'}
                  className={`w-full mt-auto ${idx === 2 ? '!bg-[#EE7203] !border-[#EE7203] !text-white hover:!bg-[#c96102]' : ''}`}
                >
                  {t(`events.eventHalls.${hall}.cta` as any)}
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ── Catering ──────────────────────────────────────────── */}
      <section className="py-24">
        <Container>
          <div className="mb-16">

            <h2 className="text-4xl md:text-5xl font-bold text-[#1E2650] mb-4">
              {t('events.catering.title').replace('## ', '')}
            </h2>
            <p className="text-lg text-[#5A6480]">
              {t('events.catering.note')}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[0, 1, 2].map((index) => (
              <div key={index} className="section-card relative p-8 pt-16 group">
                <span className="feature-number group-hover:opacity-25 transition-opacity" style={{ color: '#EE7203' }}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h4 className="font-bold text-[#1E2650] text-xl mb-4">
                  {t(`events.catering.packages.${index}.name` as any)}
                </h4>
                <p className="text-[#5A6480] leading-relaxed mb-6">
                  {t(`events.catering.packages.${index}.desc` as any)}
                </p>
                <div className="text-2xl font-black text-[#EE7203]">
                  {t(`events.catering.packages.${index}.price` as any)} ريال
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="bg-[#1E2650] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EE7203]/[0.04] rounded-full -translate-y-1/2 translate-x-1/3" />
        <Container className="relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 max-w-3xl mx-auto leading-tight">
            {t('events.cta.title').replace('## ', '')}
          </h2>
          <Button variant="primary" className="text-base px-10 py-4 !bg-[#EE7203] !border-[#EE7203] !text-white hover:!bg-[#c96102]">
            {t('events.cta.button')}
          </Button>
        </Container>
      </section>

    </div>
  )
}
