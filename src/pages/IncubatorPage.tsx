import { useTranslation } from 'react-i18next'

import { Container } from '../components/ui/Container'
import { pageThemes } from '../config/pageThemes'
import { Button } from '../components/ui/Button'

export function IncubatorPage() {
  const { t } = useTranslation()
  const theme = pageThemes.incubator

  return (
    <Container className="py-16 sm:py-20 flex flex-col gap-16">
      {/* Hero Section */}
      <section className="border border-[var(--color-border)] liquid-glass mask-wadi p-8 shadow-sm sm:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--page-color)] opacity-10 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none"></div>
        <p className="text-sm font-semibold text-[var(--page-color)] mb-4">{theme.label}</p>
        <h1 className="text-4xl font-extrabold text-[var(--color-heading)] sm:text-5xl leading-tight mb-6">
          {t('incubator.hero.title').replace('# ', '')}
        </h1>
        <p className="text-xl text-[var(--color-muted)] leading-relaxed mb-10 max-w-4xl">
          {t('incubator.hero.subtitle')}
        </p>
        <div className="flex flex-wrap gap-4 relative z-10">
          <Button variant="primary" className="text-lg px-8 py-3">{t('common.applyNow')}</Button>
          <Button variant="outline" className="text-lg px-8 py-3">{t('common.downloadGuide')}</Button>
        </div>
      </section>

      {/* About Section */}
      <section className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-6">
            {t('incubator.about.title').replace('## ', '')}
          </h2>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-8">
            {t('incubator.about.content')}
          </p>
        </div>
        <div className="border border-[var(--color-border)] bg-[var(--color-surface)] mask-wadi p-8">
          <ul className="space-y-4">
            {[0, 1, 2, 3, 4].map((i) => (
              <li key={i} className="flex gap-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-[var(--page-color)] flex-shrink-0"></div>
                <span className="text-[var(--color-text)] leading-relaxed">
                  {t(`incubator.about.list.${i}` as any)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Support Ecosystem */}
      <section className="border border-[var(--color-border)] liquid-glass mask-wadi p-8 sm:p-12">
        <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-10 text-center">
          {t('incubator.support.title').replace('## ', '')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-[var(--page-color-soft)] text-[var(--page-color)] flex items-center justify-center font-bold text-xl mb-4">
                {i + 1}
              </div>
              <p className="text-[var(--color-text)] leading-relaxed">
                {t(`incubator.support.list.${i}` as any)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-8">
        <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-10 text-center max-w-3xl mx-auto">
          {t('incubator.strategy.title').replace('## ', '')}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[0, 1, 2].map((i) => (
            <div key={i} className="border border-[var(--color-border)] p-6 bg-[var(--color-surface)] hover:border-[var(--page-color)] transition-colors rounded-xl">
              <h3 className="text-xl font-bold text-[var(--color-heading)] mb-4">
                {t(`incubator.strategy.sections.${i}.title` as any).replace('### ', '')}
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                {t(`incubator.strategy.sections.${i}.desc` as any)}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-[var(--page-color-soft)] border border-[var(--page-color)] p-6 rounded-xl text-center max-w-4xl mx-auto">
          <p className="text-[var(--color-text)] font-medium leading-relaxed">
            🌟 {t('incubator.strategy.note')}
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-12 border-t border-[var(--color-border)]">
        <h2 className="text-2xl font-bold text-[var(--color-heading)] mb-6">
          {t('incubator.cta.title').replace('## ', '')}
        </h2>
        <Button variant="primary" className="mx-auto text-lg px-8 py-3">
          {t('incubator.cta.button')}
        </Button>
      </section>

    </Container>
  )
}
