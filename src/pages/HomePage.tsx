import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import { motion, useTransform } from 'framer-motion'

import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { HeroLogo } from '../components/layout/HeroLogo'
import { useScrollProgress } from '../hooks/useScrollProgress'
import heroImage from '../../src/assets/images/heroImage.jpeg'
export function HomePage() {
  const { t } = useTranslation()

  const progress = useScrollProgress()
  // Title fades out and lifts as the logo morphs into the navbar.
  const titleOpacity = useTransform(progress, [0.1, 0.45], [1, 0])
  const titleY       = useTransform(progress, [0.1, 0.45], [0, -30])

  return (
    <div className="flex flex-col gap-16 pb-16 sm:pb-20">
      {/* Single fixed logo — always visible, morphs to navbar on scroll */}
      <HeroLogo />

      <section
        className="relative min-h-screen overflow-hidden rounded-b-3xl"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Title sits below the fixed logo.
            Logo centre = 50vh. Half-height of new logo is approx 128px-160px.
            Tailwind requires underscores for spaces in calc(). */}
        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="relative z-10 pt-[calc(50vh_+_140px)] sm:pt-[calc(50vh_+_180px)] px-8 sm:px-12 text-center max-w-3xl mx-auto"
        >
          <h1 data-hero-title className="text-4xl font-extrabold text-white sm:text-6xl leading-tight mb-4 drop-shadow-md">
            مجمع وادي جدة للابتكار
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium text-white/90 drop-shadow-sm max-w-2xl mx-auto">
            مكان رواد الأعمال في قلب جدة
          </h2>

          {/* Buttons temporarily hidden
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button variant="primary" className="text-lg px-8 py-3">
              {t('common.bookNow')}
            </Button>
            <Button variant="outline" className="text-lg px-8 py-3">
              {t('common.requestTour')}
            </Button>
          </div>
          */}
        </motion.div>
      </section>

      {/* About Section */}
      <Container>
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-6">
              {t('home.about.title').replace('## ', '')}
            </h2>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              {t('home.about.content')}
            </p>
          </div>
          <div className="h-64 md:h-full min-h-[300px] border border-[var(--color-border)] liquid-glass mask-wadi flex items-center justify-center bg-[var(--page-color-soft)]">
            <span className="text-[var(--page-color)] font-bold opacity-50">WJIH</span>
          </div>
        </section>
      </Container>

      {/* Facilities Section */}
      <Container>
        <section className="border border-[var(--color-border)] liquid-glass  mask-wadi p-8 shadow-sm sm:p-12">
          <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-6 text-center max-w-2xl mx-auto">
            {t('home.facilities.title').replace('## ', '')}
          </h2>
          <p className="text-lg text-[var(--color-muted)] text-center mb-10 max-w-3xl mx-auto">
            {t('home.facilities.content')}
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[0, 1, 2].map((i) => (
              <div key={i} className="border border-[var(--color-border)] p-6 bg-[var(--color-surface)] hover:border-[var(--page-color)] transition-colors">
                <p className="text-[var(--color-text)] leading-relaxed">
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
        </section>
      </Container>

      {/* Services Section */}
      <Container>
        <section className="py-12">
          <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-6">
            {t('home.services.title').replace('## ', '')}
          </h2>
          <p className="text-lg text-[var(--color-muted)] mb-10 max-w-3xl">
            {t('home.services.content')}
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4 p-4 border border-[var(--color-border)] liquid-glass mask-wadi">
                <div className="w-10 h-10 rounded-full bg-[var(--page-color-soft)] flex-shrink-0 flex items-center justify-center text-[var(--page-color)] font-bold">
                  {i + 1}
                </div>
                <p className="text-[var(--color-text)] pt-2 leading-relaxed">
                  {t(`home.services.list.${i}` as any)}
                </p>
              </div>
            ))}
          </div>
          <Link to="/incubator">
            <Button variant="outline">{t('home.services.cta')}</Button>
          </Link>
        </section>
      </Container>

      {/* Community Section */}
      <Container>
        <section className="border border-[var(--page-color)] bg-[var(--page-color-soft)] liquid-glass mask-wadi p-8 text-center sm:p-12 mb-20">
          <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-6">
            {t('home.community.title').replace('## ', '')}
          </h2>
          <p className="text-lg text-[var(--color-text)] mb-8 max-w-4xl mx-auto leading-relaxed">
            {t('home.community.content')}
          </p>
          <Button variant="primary" className="text-lg px-8 py-3">
            {t('common.joinCommunity')}
          </Button>
        </section>
      </Container>
    </div>
  )
}
