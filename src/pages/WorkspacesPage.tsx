import { useTranslation } from 'react-i18next'

import { Container } from '../components/ui/Container'
import { pageThemes } from '../config/pageThemes'
import { Button } from '../components/ui/Button'

export function WorkspacesPage() {
  const { t } = useTranslation()
  const theme = pageThemes.workspaces

  return (
    <Container className="py-16 sm:py-20 flex flex-col gap-16">
      {/* Hero Section */}
      <section className="border border-[var(--color-border)] liquid-glass mask-wadi p-8 shadow-sm sm:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--page-color)] opacity-10 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none"></div>
        <p className="text-sm font-semibold text-[var(--page-color)] mb-4">{theme.label}</p>
        <h1 className="text-4xl font-extrabold text-[var(--color-heading)] sm:text-5xl leading-tight mb-6">
          {t('workspaces.hero.title').replace('# ', '')}
        </h1>
        <p className="text-xl text-[var(--color-muted)] leading-relaxed mb-10 max-w-4xl">
          {t('workspaces.hero.subtitle')}
        </p>
        <div className="flex flex-wrap gap-4 relative z-10">
          <Button variant="primary" className="text-lg px-8 py-3">{t('common.explorePlans')}</Button>
          <Button variant="outline" className="text-lg px-8 py-3">{t('common.contactWhatsapp')}</Button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="text-center max-w-4xl mx-auto">
        <p className="text-lg text-[var(--color-text)] leading-relaxed">
          {t('workspaces.intro')}
        </p>
      </section>

      {/* Pricing Cards */}
      <section>
        <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-10 text-center">
          {t('workspaces.pricingTitle').replace('## ', '')}
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {['hotDesk', 'dedicatedDesk', 'semiPrivate', 'private1', 'private2'].map((planKey, idx) => (
            <div key={planKey} className={`border border-[var(--color-border)] liquid-glass mask-wadi p-6 shadow-sm flex flex-col hover:-translate-y-1 transition-transform ${idx === 2 ? 'md:col-span-2 lg:col-span-1 border-[var(--page-color)]' : ''}`}>
              <h3 className="text-xl font-bold text-[var(--color-heading)] mb-2">
                {t(`workspaces.plans.${planKey}.title` as any).replace(/### \d+\. /, '')}
              </h3>
              <div className="flex items-end gap-1 mb-4">
                <span className="text-4xl font-extrabold text-[var(--page-color)]">{t(`workspaces.plans.${planKey}.price` as any)}</span>
                <span className="text-[var(--color-muted)] mb-1">SAR / Month</span>
              </div>
              <div className="mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)] block mb-1">Target Audience</span>
                <p className="text-sm font-medium text-[var(--color-text)]">
                  {t(`workspaces.plans.${planKey}.audience` as any)}
                </p>
              </div>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-8 flex-grow">
                {t(`workspaces.plans.${planKey}.desc` as any)}
              </p>
              <Button variant={idx === 2 || idx === 3 ? 'primary' : 'outline'} className="w-full mt-auto">
                {t(`workspaces.plans.${planKey}.cta` as any)}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities Section */}
      <section className="border border-[var(--color-border)] bg-[var(--color-surface)] mask-wadi p-8 sm:p-12">
        <h2 className="text-2xl font-bold text-[var(--color-heading)] mb-8 text-center max-w-2xl mx-auto">
          {t('workspaces.amenities.title').replace('## ', '')}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-[var(--page-color)] flex-shrink-0"></div>
              <p className="text-[var(--color-text)] text-sm leading-relaxed">
                {t(`workspaces.amenities.list.${i}` as any)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-8">
        <h2 className="text-2xl font-bold text-[var(--color-heading)] mb-6">
          {t('workspaces.cta.title').replace('## ', '')}
        </h2>
        <Button variant="primary" className="mx-auto text-lg px-8 py-3">
          {t('workspaces.cta.button')}
        </Button>
      </section>
    </Container>
  )
}
