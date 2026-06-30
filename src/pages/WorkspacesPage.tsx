import { useTranslation } from 'react-i18next'

import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'

export function WorkspacesPage() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col bg-white min-h-screen">

      {/* ── Page Header ───────────────────────────────────────────── */}
      <div className="bg-[#FAFAF9] border-b border-[#EAE4E0] pt-32 pb-20">
        <Container>
          <span className="label-accent">مساحات العمل</span>
          <h1 className="text-5xl sm:text-6xl font-black text-[#1E2650] leading-tight mb-6 max-w-3xl">
            {t('workspaces.hero.title').replace('# ', '')}
          </h1>
          <p className="text-xl text-[#5A6480] leading-relaxed max-w-2xl mb-10">
            {t('workspaces.hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" className="text-base px-8 py-4">{t('common.explorePlans')}</Button>
            <Button variant="outline" className="text-base px-8 py-4">{t('common.contactWhatsapp')}</Button>
          </div>
        </Container>
      </div>

      {/* ── Intro ─────────────────────────────────────────────────── */}
      <section className="py-20">
        <Container>
          <p className="text-xl text-[#1E2650] leading-relaxed max-w-4xl mx-auto text-center">
            {t('workspaces.intro')}
          </p>
        </Container>
      </section>

      <div className="section-divider mx-8 sm:mx-16" />

      {/* ── Pricing ───────────────────────────────────────────────── */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-14">
            <span className="label-accent">الخطط والأسعار</span>
            <h2 className="text-4xl font-bold text-[#1E2650]">
              {t('workspaces.pricingTitle').replace('## ', '')}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {['hotDesk', 'dedicatedDesk', 'semiPrivate', 'private1', 'private2'].map((planKey, idx) => (
              <div
                key={planKey}
                className={`mask-wadi border p-8 flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  idx === 2
                    ? 'border-[#7A1219] md:col-span-2 lg:col-span-1 bg-[rgba(122,18,25,0.03)]'
                    : 'border-[#EAE4E0] bg-white'
                }`}
              >
                <h3 className="text-xl font-bold text-[#1E2650] mb-3">
                  {t(`workspaces.plans.${planKey}.title` as any).replace(/### \d+\. /, '')}
                </h3>
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-4xl font-black text-[#7A1219]">
                    {t(`workspaces.plans.${planKey}.price` as any)}
                  </span>
                  <span className="text-sm text-[#5A6480]">ريال / شهر</span>
                </div>
                <div className="mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5A6480] block mb-1">الفئة المستهدفة</span>
                  <p className="text-sm font-semibold text-[#1E2650]">
                    {t(`workspaces.plans.${planKey}.audience` as any)}
                  </p>
                </div>
                <p className="text-[#5A6480] text-sm leading-relaxed mb-8 flex-grow">
                  {t(`workspaces.plans.${planKey}.desc` as any)}
                </p>
                <Button variant={idx === 2 || idx === 3 ? 'primary' : 'outline'} className="w-full mt-auto">
                  {t(`workspaces.plans.${planKey}.cta` as any)}
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <div className="section-divider mx-8 sm:mx-16" />

      {/* ── Amenities ─────────────────────────────────────────────── */}
      <section className="bg-[#FAFAF9] py-20">
        <Container>
          <div className="text-center mb-12">
            <span className="label-accent">المرافق والخدمات</span>
            <h2 className="text-4xl font-bold text-[#1E2650]">
              {t('workspaces.amenities.title').replace('## ', '')}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex gap-4 p-6 bg-white border border-[#EAE4E0] mask-wadi">
                <div className="mt-1 w-2 h-2 rounded-full bg-[#7A1219] flex-shrink-0" />
                <p className="text-[#1E2650] leading-relaxed">
                  {t(`workspaces.amenities.list.${i}` as any)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="bg-[#1E2650] py-20">
        <Container className="text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            {t('workspaces.cta.title').replace('## ', '')}
          </h2>
          <Button variant="primary" className="text-base px-10 py-4 bg-[#7A1219] border-[#7A1219] text-white hover:bg-[#5a0d12]">
            {t('workspaces.cta.button')}
          </Button>
        </Container>
      </section>

    </div>
  )
}
