import { useTranslation } from 'react-i18next'

import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { createWhatsAppUrl } from '../lib/whatsapp'
import heroImage from '../assets/images/heroImage.jpeg'

const workspacePlanKeys = ['hotDesk', 'dedicatedDesk', 'semiPrivate', 'private1', 'private2'] as const
const workspaceOptionKeys = ['hotDesk', 'dedicatedDesk', 'privateOffice', 'meetingRooms', 'eventSpaces'] as const
const amenityIndexes = [0, 1, 2, 3, 4, 5, 6, 7] as const
const overviewHighlightIndexes = [0, 1, 2] as const

const openWhatsApp = (message: string) => {
  window.open(createWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
}

const scrollToOptions = () => {
  document.getElementById('workspace-options')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

export function WorkspacesPage() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col bg-white min-h-screen">

      {/* ── Hero Header ──────────────────────────────────────── */}
      <div className="hero-header bg-gradient-to-br from-[#1E2650] via-[#1E2650] to-[#2a3368]">
        <Container className="relative z-10">
          <span className="label-accent !text-[#D6BAAE] !border-[#D6BAAE]/40">مساحات العمل</span>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6 max-w-3xl">
            {t('workspaces.hero.title').replace('# ', '')}
          </h1>
          <p className="text-xl text-white/60 leading-relaxed max-w-2xl mb-10">
            {t('workspaces.hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" className="text-base px-8 py-4 !bg-[#7A1219] !border-[#7A1219]">{t('common.explorePlans')}</Button>
            <Button variant="outline" className="text-base px-8 py-4 !border-white/25 !text-white hover:!bg-white/10">{t('common.contactWhatsapp')}</Button>
          </div>
        </Container>
      </div>

      {/* ── Intro ─────────────────────────────────────────────── */}
      <section className="py-24">
        <Container>
          <p className="text-xl text-[#1E2650] leading-relaxed max-w-4xl mx-auto text-center">
            {t('workspaces.intro')}
          </p>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ── Pricing ──────────────────────────────────────────── */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-16">
            <span className="label-accent">الخطط والأسعار</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E2650]">
              {t('workspaces.pricingTitle').replace('## ', '')}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {['hotDesk', 'dedicatedDesk', 'semiPrivate', 'private1', 'private2'].map((planKey, idx) => (
              <div
                key={planKey}
                className={`section-card p-8 flex flex-col transition-all duration-300 ${
                  idx === 2
                    ? 'border-[#7A1219] md:col-span-2 lg:col-span-1 ring-2 ring-[#7A1219]/10 bg-[rgba(122,18,25,0.02)]'
                    : ''
                }`}
              >
                {idx === 2 && (
                  <span className="label-accent !text-xs !mb-4">الأكثر طلباً</span>
                )}
                <h3 className="text-xl font-bold text-[#1E2650] mb-3">
                  {t(`workspaces.plans.${planKey}.title` as any).replace(/### \d+\. /, '')}
                </h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-black text-[#7A1219]">
                    {t(`workspaces.plans.${planKey}.price` as any)}
                  </span>
                  <span className="text-sm text-[#5A6480]">ريال / شهر</span>
                </div>
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5A6480] block mb-1">الفئة المستهدفة</span>
                  <p className="text-sm font-semibold text-[#1E2650]">
                    {t(`workspaces.plans.${planKey}.audience` as any)}
                  </p>
                </div>
                <p className="text-[#5A6480] text-sm leading-relaxed mb-8 flex-grow">
                  {t(`workspaces.plans.${planKey}.desc` as any)}
                </p>
                <Button variant={idx === 2 ? 'primary' : 'outline'} className="w-full mt-auto">
                  {t(`workspaces.plans.${planKey}.cta` as any)}
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ── Amenities ────────────────────────────────────────── */}
      <section className="bg-[#FAFAF9] py-24">
        <Container>
          <div className="text-center mb-16">
            <span className="label-accent">المرافق والخدمات</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E2650]">
              {t('workspaces.amenities.title').replace('## ', '')}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="section-card relative p-8 pt-14">
                <span className="feature-number">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-[#1E2650] leading-relaxed text-lg">
                  {t(`workspaces.amenities.list.${i}` as any)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="bg-[#1E2650] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.02] rounded-full -translate-y-1/2 translate-x-1/3" />
        <Container className="relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
            {t('workspaces.cta.title').replace('## ', '')}
          </h2>
          <Button variant="primary" className="text-base px-10 py-4 !bg-[#7A1219] !border-[#7A1219]">
            {t('workspaces.cta.button')}
          </Button>
        </Container>
      </section>

    </div>
  )
}
