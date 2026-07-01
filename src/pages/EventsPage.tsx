import { useTranslation } from 'react-i18next'

import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import meetingRoomImage from '../assets/images/meetingRoom.jpg'
import eventHall2Image from '../assets/images/eventHall2.jpg'
import eventHall1Image from '../assets/images/eventHall1.jpg'
import eventHall3Image from '../assets/images/eventHall3.jpg'
import graph2 from '../assets/images/graph2.png'

const hallImages: Partial<Record<'hall1' | 'hall2' | 'hall3', string>> = {
  hall1: eventHall1Image,
  hall2: eventHall2Image,
  hall3: eventHall3Image,
}

export function EventsPage() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col">

      {/* ── Hero Header ──────────────────────────────────────── */}
      <div className=" pb-4">
        <Container className="pt-10">
          <div className="section-card relative overflow-hidden py-14 sm:py-20 px-6 sm:px-12">
            {/* Decorative curve — docked at the top-left edge, same treatment as
                the Home page's Community CTA section. */}
            <div className="absolute -left-8 top-4 pointer-events-none">
              <img
                src={graph2}
                alt=""
                aria-hidden="true"
                className="w-40 sm:w-56 md:w-72 h-auto mix-blend-multiply opacity-70"
              />
            </div>
            {/* Smaller mirrored copy docked at the end (right) edge. */}
            <div className="absolute -right-4 top-40 pointer-events-none">
              <img
                src={graph2}
                alt=""
                aria-hidden="true"
                className="w-20 sm:w-28 md:w-36 h-auto mix-blend-multiply scale-x-[-1]"
              />
            </div>

            <div className="relative z-10 text-center">
              <h1 className="text-5xl sm:text-6xl font-black text-[#1E2650] leading-tight mb-6 max-w-3xl mx-auto">
                {t('events.hero.title')}
              </h1>
              <p className="text-xl sm:text-2xl text-[#5A6480] leading-relaxed max-w-2xl mx-auto">
                {t('events.hero.subtitle')}
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* ── Meeting Rooms ─────────────────────────────────────── */}
      <section className="py-24">
        <Container>
          <div className="section-card overflow-hidden p-0">
            <div className="grid md:grid-cols-2 items-stretch">
              {/* Photo */}
              <div className="relative order-2 h-64 md:order-1 md:h-auto">
                <img
                  src={meetingRoomImage}
                  alt="Wadi Jeddah Meeting Room"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="order-1 flex flex-col justify-center p-10 sm:p-14 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1E2650] mb-4">
                  {t('events.meetingRooms.title').replace('## ', '')}
                </h2>
                <p className="text-[#5A6480] leading-relaxed text-lg mb-8">
                  {t('events.meetingRooms.specs')}
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="text-4xl font-black text-[#EE7203]">
                    {t('events.meetingRooms.price')}
                  </div>
                  <Button variant="primary" className="px-10 py-4 !bg-white !border-[#EE7203] !text-[#EE7203] hover:!bg-[#EE7203]/5">
                    {t('events.meetingRooms.cta')}
                  </Button>
                </div>
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
                className={`section-card overflow-hidden flex flex-col transition-all duration-300 ${
                  idx === 2
                    ? 'ring-2 ring-[#EE7203]/15 border-[#EE7203]/30'
                    : ''
                }`}
              >
                {hallImages[hall] && (
                  <img
                    src={hallImages[hall]}
                    alt=""
                    aria-hidden="true"
                    className="h-44 w-full object-cover"
                  />
                )}

                <div className="p-8 flex flex-col flex-grow">
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
                    variant="primary"
                    className="w-full mt-auto !bg-[#EE7203] !border-[#EE7203] !text-white hover:!bg-[#c96102]"
                  >
                    {t(`events.eventHalls.${hall}.cta` as any)}
                  </Button>
                </div>
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
                <span className="feature-number group-hover:opacity-25 transition-opacity" style={{ color: '#EE7203', left: 'auto', right: '1.25rem' }}>
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

    </div>
  )
}
