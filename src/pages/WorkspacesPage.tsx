import { useTranslation } from 'react-i18next'

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
  const whatsappMessage = t('workspaces.whatsappMessage')

  return (
    <div className="overflow-hidden pb-16 text-[#1E2650] sm:pb-20">
      <section className="relative isolate bg-[#1E2650] px-4 pt-28 text-white sm:px-6 sm:pt-32 lg:px-10">
        <div
          className="absolute inset-0 -z-10 opacity-20"
          style={{
            backgroundImage: "url('/pattern-bg.svg')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />

        <Container className="max-w-7xl">
          <div className="grid gap-10 pb-14 lg:grid-cols-[1fr_0.92fr] lg:items-end lg:pb-20">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex border border-[#D6BAAE]/35 px-4 py-2 text-sm font-semibold text-[#D6BAAE]">
                {t('workspaces.hero.visualLabel')}
              </p>
              <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                {t('workspaces.hero.title')}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#D6BAAE] sm:text-xl">
                {t('workspaces.hero.subtitle')}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  className="bg-[#D6BAAE] px-7 py-3 text-base !text-[#1E2650] shadow-lg shadow-[#3B0000]/20 hover:-translate-y-0.5 hover:bg-[#D6BAAE]/90 hover:shadow-xl hover:shadow-[#3B0000]/25 focus-visible:outline-[#D6BAAE]"
                  type="button"
                  variant="primary"
                  onClick={() => openWhatsApp(whatsappMessage)}
                >
                  {t('workspaces.hero.primaryCta')}
                </Button>
                <Button
                  className="border border-[#D6BAAE]/45 px-7 py-3 text-base !text-[#D6BAAE] hover:-translate-y-0.5 hover:border-[#D6BAAE] hover:bg-[#D6BAAE]/10 hover:!text-[#D6BAAE] focus-visible:outline-[#D6BAAE]"
                  type="button"
                  variant="ghost"
                  onClick={scrollToOptions}
                >
                  {t('workspaces.hero.secondaryCta')}
                </Button>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-x-6 -bottom-6 h-16 bg-[#3B0000]/25 blur-2xl" />
              <div className="relative overflow-hidden border border-[#D6BAAE]/35 bg-[#D6BAAE]/10 p-3 shadow-2xl shadow-[#3B0000]/25 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#D6BAAE]/70 group-hover:shadow-[#3B0000]/35">
                <div className="overflow-hidden">
                  <img
                    alt=""
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={heroImage}
                  />
                </div>
                <div className="border-x border-b border-[#D6BAAE]/20 bg-[#1E2650]/92 p-5">
                  <p className="text-sm font-semibold text-[#D6BAAE]">
                    {t('workspaces.hero.visualTitle')}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/85">
                    {t('workspaces.hero.visualMeta')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="flex max-w-7xl flex-col gap-16 px-4 pt-16 sm:gap-20 sm:px-6 sm:pt-20 lg:px-10">
        <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-bold text-[#3B0000]">
              {t('workspaces.overview.eyebrow')}
            </p>
            <h2 className="text-3xl font-black leading-tight text-[#1E2650] sm:text-4xl">
              {t('workspaces.overview.title')}
            </h2>
          </div>
          <div className="border border-[#1E2650]/16 bg-[#D6BAAE]/28 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1E2650]/35 hover:shadow-xl hover:shadow-[#1E2650]/15 sm:p-8">
            <p className="text-lg leading-8 text-[#3B0000]">
              {t('workspaces.overview.content')}
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {overviewHighlightIndexes.map((index) => (
                <div
                  className="border border-[#1E2650]/14 bg-[#D6BAAE]/30 p-4 text-sm font-semibold leading-6 text-[#1E2650]"
                  key={index}
                >
                  {t(`workspaces.overview.highlights.${index}`)}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="workspace-options">
          <div className="mb-9 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-black text-[#1E2650] sm:text-4xl">
                {t('workspaces.options.title')}
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#3B0000]">
                {t('workspaces.options.subtitle')}
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {workspaceOptionKeys.map((key, index) => (
              <article
                className="group flex min-h-72 flex-col border border-[#1E2650]/16 bg-[#D6BAAE]/22 p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#1E2650]/55 hover:bg-[#D6BAAE]/34 hover:shadow-2xl hover:shadow-[#1E2650]/18 focus-within:border-[#1E2650]"
                key={key}
              >
                <div className="mb-5 flex h-20 items-end overflow-hidden bg-[#1E2650] p-3">
                  <span className="text-4xl font-black text-[#D6BAAE]/50 transition-transform duration-300 group-hover:translate-y-[-4px]">
                    0{index + 1}
                  </span>
                </div>
                <p className="text-xs font-bold text-[#3B0000]">
                  {t(`workspaces.options.items.${key}.meta`)}
                </p>
                <h3 className="mt-3 text-2xl font-bold leading-8 text-[#1E2650]">
                  {t(`workspaces.options.items.${key}.title`)}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-[#3B0000]">
                  {t(`workspaces.options.items.${key}.desc`)}
                </p>
                <button
                  className="mt-6 inline-flex items-center gap-2 self-start text-sm font-bold text-[#1E2650] outline-none transition-all duration-300 group-hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E2650]"
                  type="button"
                  onClick={() => openWhatsApp(whatsappMessage)}
                >
                  {t('workspaces.options.cta')}
                  <span aria-hidden="true">&gt;</span>
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="border border-[#1E2650]/18 bg-[#1E2650] p-6 text-[#D6BAAE] shadow-2xl shadow-[#1E2650]/18 sm:p-10">
          <div className="mb-9 max-w-3xl">
            <h2 className="text-3xl font-black text-white sm:text-4xl">
              {t('workspaces.pricingTitle')}
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#D6BAAE]">
              {t('workspaces.intro')}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {workspacePlanKeys.map((planKey, index) => (
              <article
                className="group flex min-h-80 flex-col border border-[#D6BAAE]/25 bg-[#D6BAAE]/10 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D6BAAE]/75 hover:bg-[#D6BAAE]/16 hover:shadow-xl hover:shadow-[#3B0000]/20 focus-within:border-[#D6BAAE]"
                key={planKey}
              >
                <p className="mb-4 text-xs font-bold text-[#D6BAAE]/85">
                  {t('workspaces.audienceLabel')}
                </p>
                <h3 className="text-2xl font-bold leading-8 text-white">
                  {t(`workspaces.plans.${planKey}.title`).replace(/^\d+\.\s*/, '')}
                </h3>
                <div className="mt-5 flex items-end gap-2">
                  <span className="text-5xl font-black text-[#D6BAAE]">
                    {t(`workspaces.plans.${planKey}.price`)}
                  </span>
                  <span className="pb-2 text-sm text-[#D6BAAE]/80">
                    {t('workspaces.priceUnit')}
                  </span>
                </div>
                <p className="mt-4 text-sm font-semibold leading-6 text-white/90">
                  {t(`workspaces.plans.${planKey}.audience`)}
                </p>
                <p className="mt-4 flex-1 text-sm leading-7 text-[#D6BAAE]">
                  {t(`workspaces.plans.${planKey}.desc`)}
                </p>
                <Button
                  className="mt-7 w-full border border-[#D6BAAE]/35 px-5 py-3 !text-[#D6BAAE] hover:-translate-y-0.5 hover:border-[#D6BAAE] hover:bg-[#D6BAAE]/10 hover:!text-[#D6BAAE] focus-visible:outline-[#D6BAAE]"
                  type="button"
                  variant={index === 2 || index === 3 ? 'primary' : 'ghost'}
                  onClick={() => openWhatsApp(whatsappMessage)}
                >
                  {t(`workspaces.plans.${planKey}.cta`)}
                </Button>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-9 max-w-3xl">
            <h2 className="text-3xl font-black text-[#1E2650] sm:text-4xl">
              {t('workspaces.amenities.title')}
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#3B0000]">
              {t('workspaces.amenities.subtitle')}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {amenityIndexes.map((index) => (
              <article
                className="group border border-[#1E2650]/14 bg-[#D6BAAE]/24 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1E2650]/45 hover:bg-[#D6BAAE]/35 hover:shadow-xl hover:shadow-[#1E2650]/14"
                key={index}
              >
                <div className="mb-5 h-1 w-12 bg-[#1E2650] transition-all duration-300 group-hover:w-20" />
                <p className="text-sm leading-7 text-[#3B0000]">
                  {t(`workspaces.amenities.list.${index}`)}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative isolate overflow-hidden border border-[#1E2650]/18 bg-[#D6BAAE]/35 p-8 text-center shadow-xl shadow-[#1E2650]/12 sm:p-12">
          <div
            className="absolute inset-0 -z-10 opacity-10"
            style={{
              backgroundImage: "url('/pattern-bg.svg')",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          />
          <h2 className="text-3xl font-black text-[#1E2650] sm:text-4xl">
            {t('workspaces.cta.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#3B0000]">
            {t('workspaces.cta.content')}
          </p>
          <Button
            className="mt-8 bg-[#1E2650] px-8 py-3 text-base !text-[#D6BAAE] shadow-lg shadow-[#1E2650]/20 hover:-translate-y-0.5 hover:bg-[#1E2650]/95 hover:shadow-xl hover:shadow-[#1E2650]/25 focus-visible:outline-[#1E2650]"
            type="button"
            variant="primary"
            onClick={() => openWhatsApp(whatsappMessage)}
          >
            {t('workspaces.cta.button')}
          </Button>
        </section>
      </Container>
    </div>
  )
}
