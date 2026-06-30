import { useTranslation } from 'react-i18next'

import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'

export function EventsPage() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col bg-white min-h-screen">

      {/* ── Page Header ───────────────────────────────────────────── */}
      <div className="bg-[#FAFAF9] border-b border-[#EAE4E0] pt-32 pb-20">
        <Container>
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#EE7203] border-b-2 border-[#EE7203] pb-1 mb-6">
            قاعات الفعاليات
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-[#1E2650] leading-tight mb-6 max-w-3xl">
            {t('events.hero.title')}
          </h1>
          <p className="text-xl text-[#5A6480] leading-relaxed max-w-2xl mb-10">
            {t('events.hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" className="text-base px-8 py-4 bg-[#EE7203] border-[#EE7203] text-white hover:bg-[#c96102]">
              {t('events.meetingRooms.cta')}
            </Button>
            <Button variant="outline" className="text-base px-8 py-4">
              {t('common.requestTour')}
            </Button>
          </div>
        </Container>
      </div>

      {/* ── Meeting Rooms ─────────────────────────────────────────── */}
      <section className="py-20">
        <Container>
          <div className="mask-wadi border border-[#EAE4E0] p-10 bg-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#EE7203] border-b-2 border-[#EE7203] pb-1 mb-5">
                  غرف الاجتماعات
                </span>
                <h2 className="text-3xl font-bold text-[#1E2650] mb-4">
                  {t('events.meetingRooms.title').replace('## ', '')}
                </h2>
                <p className="text-[#5A6480] leading-relaxed max-w-xl">
                  {t('events.meetingRooms.specs')}
                </p>
              </div>
              <div className="flex-shrink-0 text-center">
                <div className="text-3xl font-black text-[#EE7203] mb-3">
                  {t('events.meetingRooms.price')}
                </div>
                <Button variant="primary" className="px-8 py-3 bg-[#EE7203] border-[#EE7203] text-white hover:bg-[#c96102]">
                  {t('events.meetingRooms.cta')}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="section-divider mx-8 sm:mx-16" />

      {/* ── Event Halls ───────────────────────────────────────────── */}
      <section className="bg-[#FAFAF9] py-20">
        <Container>
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#EE7203] border-b-2 border-[#EE7203] pb-1 mb-6">
              قاعات الفعاليات
            </span>
            <h2 className="text-4xl font-bold text-[#1E2650]">
              {t('events.eventHalls.title').replace('## ', '')}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {(['hall1', 'hall2', 'hall3'] as const).map((hall, idx) => (
              <div
                key={hall}
                className={`mask-wadi border p-8 flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  idx === 2
                    ? 'border-[#EE7203] bg-[rgba(238,114,3,0.03)] md:-translate-y-2'
                    : 'border-[#EAE4E0] bg-white'
                }`}
              >
                <h3 className="text-xl font-bold text-[#1E2650] mb-3">
                  {t(`events.eventHalls.${hall}.title` as any).replace('### ', '')}
                </h3>
                <div className="text-2xl font-black text-[#EE7203] mb-4">
                  {t(`events.eventHalls.${hall}.price` as any)}
                </div>
                <p className="text-[#5A6480] text-sm leading-relaxed flex-grow mb-6">
                  {t(`events.eventHalls.${hall}.specs` as any)}
                </p>
                {idx === 2 && (
                  <Button variant="primary" className="w-full mt-auto bg-[#EE7203] border-[#EE7203] text-white hover:bg-[#c96102]">
                    {t(`events.eventHalls.${hall}.cta` as any)}
                  </Button>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <div className="section-divider mx-8 sm:mx-16" />

      {/* ── Catering ──────────────────────────────────────────────── */}
      <section className="py-20">
        <Container>
          <div className="mb-10">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#EE7203] border-b-2 border-[#EE7203] pb-1 mb-5">
              الضيافة
            </span>
            <h2 className="text-4xl font-bold text-[#1E2650] mb-3">
              {t('events.catering.title').replace('## ', '')}
            </h2>
            <p className="text-[#5A6480]">
              {t('events.catering.note')}
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[0, 1, 2].map((index) => (
              <div key={index} className="mask-wadi border border-[#EAE4E0] p-8 bg-white hover:border-[#EE7203] transition-colors">
                <h4 className="font-bold text-[#1E2650] text-lg mb-3">
                  {t(`events.catering.packages.${index}.name` as any)}
                </h4>
                <p className="text-sm text-[#5A6480] mb-5 leading-relaxed">
                  {t(`events.catering.packages.${index}.desc` as any)}
                </p>
                <div className="text-xl font-black text-[#EE7203]">
                  {t(`events.catering.packages.${index}.price` as any)} ريال
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="bg-[#1E2650] py-20">
        <Container className="text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            {t('events.cta.title').replace('## ', '')}
          </h2>
          <Button variant="primary" className="text-base px-10 py-4 bg-[#EE7203] border-[#EE7203] text-white hover:bg-[#c96102]">
            {t('events.cta.button')}
          </Button>
        </Container>
      </section>

    </div>
  )
}
