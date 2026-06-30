import { useTranslation } from 'react-i18next'

import { Container } from '../components/ui/Container'
import { pageThemes } from '../config/pageThemes'

export function SoftLandingPage() {
  const { t } = useTranslation()
  const theme = pageThemes.softLanding

  return (
    <Container className="py-16 sm:py-20">
      <section className="rounded-lg border border-[var(--color-border)] bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold text-[var(--page-color)]">{theme.color}</p>
        <h1 className="mt-3 text-3xl font-bold text-[var(--color-heading)] sm:text-4xl">
          {t('nav.softLanding')}
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--color-muted)]">
          Placeholder page shell for the Soft Landing route.
        </p>
      </section>
    </Container>
  )
}
