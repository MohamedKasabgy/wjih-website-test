import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'

import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import heroImage from '../../src/assets/images/heroImage.jpeg'

export function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <Container className="relative z-10 py-32">
          <p className="text-sm font-bold tracking-widest uppercase text-[#D6BAAE] mb-6">
            مجمع وادي جدة للابتكار
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-8 max-w-4xl">
            {t('home.hero.title').replace('# ', '')}
          </h1>
          <p className="text-xl text-white/80 leading-relaxed mb-12 max-w-2xl">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" className="text-base px-8 py-4">
              {t('common.bookNow')}
            </Button>
            <Button variant="outline" className="text-base px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
              {t('common.requestTour')}
            </Button>
          </div>
        </Container>
      </section>

      {/* ── About ─────────────────────────────────────────────────── */}
      <section className="bg-white py-24 sm:py-32">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="label-accent">{t('home.about.title').replace('## ', '')}</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1E2650] mb-6">
                حيث تنمو الأفكار
              </h2>
              <p className="text-lg text-[#5A6480] leading-relaxed">
                {t('home.about.content')}
              </p>
            </div>
            <div className="mask-wadi bg-[#FAFAF9] border border-[#EAE4E0] h-72 md:h-full min-h-[320px] flex items-center justify-center">
              <span className="text-6xl font-black text-[#D6BAAE]">WJIH</span>
            </div>
          </div>
        </Container>
      </section>

      <div className="section-divider mx-8 sm:mx-16" />

      {/* ── Facilities ────────────────────────────────────────────── */}
      <section className="bg-white py-24 sm:py-32">
        <Container>
          <div className="text-center mb-16">
            <span className="label-accent">{t('home.facilities.title').replace('## ', '')}</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1E2650] max-w-2xl mx-auto">
              {t('home.facilities.title').replace('## ', '')}
            </h2>
            <p className="text-lg text-[#5A6480] mt-4 max-w-2xl mx-auto">
              {t('home.facilities.content')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[0, 1, 2].map((i) => (
              <div key={i} className="mask-wadi border border-[#EAE4E0] p-8 hover:border-[#7A1219] hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-[rgba(122,18,25,0.08)] flex items-center justify-center mb-6">
                  <span className="text-sm font-bold text-[#7A1219]">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <p className="text-[#1E2650] leading-relaxed font-medium">
                  {t(`home.facilities.list.${i}` as any)}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/workspaces">
              <Button variant="primary">{t('home.facilities.cta')}</Button>
            </Link>
          </div>
        </Container>
      </section>

      <div className="section-divider mx-8 sm:mx-16" />

      {/* ── Services ──────────────────────────────────────────────── */}
      <section className="bg-[#FAFAF9] py-24 sm:py-32">
        <Container>
          <div className="max-w-2xl mb-16">
            <span className="label-accent">{t('home.services.title').replace('## ', '')}</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1E2650] mb-4">
              {t('home.services.title').replace('## ', '')}
            </h2>
            <p className="text-lg text-[#5A6480] leading-relaxed">
              {t('home.services.content')}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex gap-5 p-6 bg-white border border-[#EAE4E0] mask-wadi hover:border-[#7A1219] transition-colors">
                <div className="w-9 h-9 rounded-full bg-[rgba(122,18,25,0.08)] flex-shrink-0 flex items-center justify-center font-bold text-sm text-[#7A1219]">
                  {i + 1}
                </div>
                <p className="text-[#1E2650] leading-relaxed">
                  {t(`home.services.list.${i}` as any)}
                </p>
              </div>
            ))}
          </div>
          <Link to="/incubator">
            <Button variant="outline">{t('home.services.cta')}</Button>
          </Link>
        </Container>
      </section>

      {/* ── Community CTA ─────────────────────────────────────────── */}
      <section className="bg-[#1E2650] py-24 sm:py-32">
        <Container className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {t('home.community.title').replace('## ', '')}
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('home.community.content')}
          </p>
          <Button variant="primary" className="text-base px-10 py-4 bg-[#7A1219] border-[#7A1219] text-white hover:bg-[#5a0d12]">
            {t('common.joinCommunity')}
          </Button>
        </Container>
      </section>

    </div>
  )
}
