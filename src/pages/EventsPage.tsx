import { useTranslation } from 'react-i18next'

import { Container } from '../components/ui/Container'
import { pageThemes } from '../config/pageThemes'
import { Button } from '../components/ui/Button'

export function EventsPage() {
  const { t } = useTranslation()
  const theme = pageThemes.events

  return (
    <Container className="py-16 sm:py-20">
      {/* Hero Section */}
      <section className="border border-[var(--color-border)] liquid-glass mask-wadi p-6 shadow-sm sm:p-8 mb-16">
        <p className="text-sm font-semibold text-[var(--page-color)]">{theme.label}</p>
        <h1 className="mt-3 text-3xl font-bold text-[var(--color-heading)] sm:text-4xl leading-tight">
          {t('events.hero.title')}
        </h1>
        <p className="mt-6 text-lg text-[var(--color-muted)] leading-relaxed">
          {t('events.hero.subtitle')}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button variant="primary">{t('events.meetingRooms.cta')}</Button>
          <Button variant="secondary">{t('common.requestTour')}</Button>
        </div>
      </section>

      {/* Meeting Rooms */}
      <section className="mb-16">
        <div className="border border-[var(--color-border)] liquid-glass mask-wadi p-6 shadow-sm sm:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--page-color)] opacity-10 rounded-full -mr-16 -mt-16 blur-2xl pointer-events-none"></div>
          
          <h2 className="text-2xl font-bold text-[var(--color-heading)] mb-4 relative z-10">
            {t('events.meetingRooms.title').replace('## ', '')}
          </h2>
          <div className="text-xl font-semibold text-[var(--page-color)] mb-4 relative z-10">
            {t('events.meetingRooms.price')}
          </div>
          <p className="text-[var(--color-muted)] leading-relaxed mb-6 relative z-10">
            {t('events.meetingRooms.specs')}
          </p>
          <Button variant="outline" className="relative z-10">{t('events.meetingRooms.cta')}</Button>
        </div>
      </section>

      {/* Event Halls */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-8 text-center">
          {t('events.eventHalls.title').replace('## ', '')}
        </h2>
        
        <div className="grid gap-6 md:grid-cols-3">
          {/* Hall 1 */}
          <div className="border border-[var(--color-border)] liquid-glass mask-wadi p-6 shadow-sm flex flex-col hover:border-[var(--page-color)] transition-colors">
            <h3 className="text-xl font-bold text-[var(--color-heading)] mb-3">
              {t('events.eventHalls.hall1.title').replace('### ', '')}
            </h3>
            <div className="text-lg font-semibold text-[var(--page-color)] mb-4">
              {t('events.eventHalls.hall1.price')}
            </div>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-6 flex-grow">
              {t('events.eventHalls.hall1.specs')}
            </p>
          </div>

          {/* Hall 2 */}
          <div className="border border-[var(--color-border)] liquid-glass mask-wadi p-6 shadow-sm flex flex-col hover:border-[var(--page-color)] transition-colors">
            <h3 className="text-xl font-bold text-[var(--color-heading)] mb-3">
              {t('events.eventHalls.hall2.title').replace('### ', '')}
            </h3>
            <div className="text-lg font-semibold text-[var(--page-color)] mb-4">
              {t('events.eventHalls.hall2.price')}
            </div>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-6 flex-grow">
              {t('events.eventHalls.hall2.specs')}
            </p>
          </div>

          {/* Hall 3 */}
          <div className="border border-[var(--page-color)] bg-[var(--page-color-soft)] liquid-glass mask-wadi p-6 shadow-sm flex flex-col transform md:-translate-y-2">
            <h3 className="text-xl font-bold text-[var(--color-heading)] mb-3">
              {t('events.eventHalls.hall3.title').replace('### ', '')}
            </h3>
            <div className="text-lg font-semibold text-[var(--page-color)] mb-4">
              {t('events.eventHalls.hall3.price')}
            </div>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-6 flex-grow">
              {t('events.eventHalls.hall3.specs')}
            </p>
            <Button variant="primary" className="w-full mt-auto">
              {t('events.eventHalls.hall3.cta')}
            </Button>
          </div>
        </div>
      </section>

      {/* Catering */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-4">
          {t('events.catering.title').replace('## ', '')}
        </h2>
        <p className="text-[var(--color-muted)] mb-8">
          {t('events.catering.note')}
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {[0, 1, 2].map((index) => (
            <div key={index} className="border border-[var(--color-border)] p-5 rounded-xl bg-[var(--color-surface)]">
              <h4 className="font-bold text-[var(--color-heading)] mb-2">
                {t(`events.catering.packages.${index}.name` as any)}
              </h4>
              <p className="text-sm text-[var(--color-muted)] mb-4">
                {t(`events.catering.packages.${index}.desc` as any)}
              </p>
              <div className="text-[var(--page-color)] font-semibold mt-auto">
                {t(`events.catering.packages.${index}.price` as any)} SAR
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-12 border-t border-[var(--color-border)] mt-12">
        <h2 className="text-2xl font-bold text-[var(--color-heading)] mb-6">
          {t('events.cta.title').replace('## ', '')}
        </h2>
        <Button variant="primary" className="mx-auto text-lg px-8 py-3">
          {t('events.cta.button')}
        </Button>
      </section>

    </Container>
  )
}
