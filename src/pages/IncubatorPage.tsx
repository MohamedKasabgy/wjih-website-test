import { useTranslation } from 'react-i18next'

import { Container } from '../components/ui/Container'
import { pageThemes } from '../config/pageThemes'

export function IncubatorPage() {
  const { t } = useTranslation()
  const theme = pageThemes.incubator

  return (
    <Container className="py-16 sm:py-20">
      <section className="border border-[var(--color-border)] liquid-glass mask-wadi p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold text-[var(--page-color)]">{theme.color}</p>
        <h1 className="mt-3 text-3xl font-bold text-[var(--color-heading)] sm:text-4xl">
          {t('nav.incubator')}
        </h1>
        <dl className="mt-4 grid gap-3 text-sm text-[var(--color-muted)] sm:grid-cols-2">
          <div>
            <dt className="font-semibold text-[var(--color-text)]">Route</dt>
            <dd>/incubator</dd>
          </div>
          <div>
            <dt className="font-semibold text-[var(--color-text)]">Primary color</dt>
            <dd>{theme.color}</dd>
          </div>
        </dl>
      </section>
    </Container>
  )
}
