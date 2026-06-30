import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import { motion, useTransform } from 'framer-motion'

import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { HeroLogo } from '../components/layout/HeroLogo'
import { useScrollProgress } from '../hooks/useScrollProgress'
import heroImage from '../../src/assets/images/heroImage.jpeg'
import aboutImage from '../../src/assets/images/aboutImage.jpeg'
import bgImage from '../../src/assets/images/BG.svg'

export function HomePage() {
  const { t } = useTranslation()

  const progress = useScrollProgress()
  const titleOpacity = useTransform(progress, [0.1, 0.45], [1, 0])
  const titleY       = useTransform(progress, [0.1, 0.45], [0, -30])

  return (
    <div className="flex flex-col pb-16 sm:pb-20">
      {/* ── Hero ─────────────────────────────────────────────── */}
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
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="relative z-10 pt-[calc(50vh_+_100px)] sm:pt-[calc(50vh_+_130px)] px-8 sm:px-12 text-center max-w-3xl mx-auto"
        >
          <h1 data-hero-title className="text-4xl font-extrabold text-white sm:text-6xl leading-tight mb-4 drop-shadow-md">
            مجمع وادي جدة للابتكار
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium text-white/90 drop-shadow-sm max-w-2xl mx-auto">
            مكان رواد الأعمال في قلب جدة
          </h2>
        </motion.div>
      </section>

      {/* ── Page Content Wrapper with Background ──────────────── */}
      <div className="relative">
        {/* Background Image Container */}
        <div
          className="absolute inset-0 z-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}
        />

        <div className="relative z-10">
          {/* ── About ─────────────────────────────────────────────── */}
          <section className="py-24">
            <Container>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Image (On the right visually in RTL layout) */}
                <div className="relative order-2 md:order-1">
                  <div className="section-card overflow-hidden p-0">
                    <img
                      src={aboutImage}
                      alt="Wadi Jeddah"
                      className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Text (On the left visually in RTL layout) */}
                <div className="order-1 md:order-2 space-y-6">
                  <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#D6BAAE] border border-[#D6BAAE] rounded-full px-6 py-2 mb-2">
                    وادي جدة للابتكار.. حيث تنمو الأفكار
                  </span>
                  <h2 className="text-4xl md:text-[3.5rem] font-bold text-[#1E2650] mb-8 leading-[1.2]">
                    وادي جدة للابتكار.. حيث تنمو<br />الأفكار
                  </h2>
                  <p className="text-xl text-[#5A6480] leading-[1.8]">
                    نحن أكثر من مجرد مساحة عمل؛ نحن بيئة ريادية متكاملة تدعم المبتكرين ورواد الأعمال. نسعى لتمكين العقول المبدعة عبر تقديم خدمات حصرية وبرامج مكثفة تذلل العقبات وتسرّع نمو شركتك لتنطلق نحو المستقبل.
                  </p>
                </div>
              </div>
            </Container>
          </section>

      <div className="section-divider mx-8 sm:mx-20" />

      {/* ── Facilities ────────────────────────────────────────── */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-16">
            <span className="label-accent">{t('home.facilities.title').replace('## ', '')}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E2650] mb-6">
              {t('home.facilities.title').replace('## ', '')}
            </h2>
            <p className="text-lg text-[#5A6480] max-w-3xl mx-auto leading-relaxed">
              {t('home.facilities.content')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[0, 1, 2].map((i) => (
              <div key={i} className="section-card relative p-8 pt-14">
                <span className="feature-number">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-[#1E2650] leading-relaxed text-lg">
                  {t(`home.facilities.list.${i}` as any)}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/workspaces">
              <Button variant="primary" className="text-base px-10 py-4">{t('home.facilities.cta')}</Button>
            </Link>
          </div>
        </Container>
      </section>

      <div className="section-divider mx-8 sm:mx-20" />

      {/* ── Services ──────────────────────────────────────────── */}
      <section className="py-24 bg-[#FAFAF9]">
        <Container>
          <div className="mb-16">
            <span className="label-accent">{t('home.services.title').replace('## ', '')}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E2650] mb-6">
              {t('home.services.title').replace('## ', '')}
            </h2>
            <p className="text-lg text-[#5A6480] max-w-3xl leading-relaxed">
              {t('home.services.content')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="section-card relative p-8 pt-16 group">
                <span className="feature-number group-hover:opacity-25 transition-opacity">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-[#1E2650] leading-relaxed text-lg">
                  {t(`home.services.list.${i}` as any)}
                </p>
              </div>
            ))}
          </div>

          <Link to="/incubator">
            <Button variant="outline" className="text-base px-10 py-4">{t('home.services.cta')}</Button>
          </Link>
        </Container>
      </section>

      {/* ── Community CTA ─────────────────────────────────────── */}
      <section className="bg-[#1E2650] py-24 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/[0.03] rounded-full translate-y-1/2 -translate-x-1/3" />

        <Container className="relative z-10 text-center">
          <span className="inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.12em] uppercase text-[#D6BAAE] border border-[#D6BAAE]/30 rounded-full px-4 py-1.5 mb-6">
            مجتمع وادي جدة
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 max-w-3xl mx-auto leading-tight">
            {t('home.community.title').replace('## ', '')}
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('home.community.content')}
          </p>
          <Button variant="primary" className="text-lg px-10 py-4 !bg-[#7A1219] !border-[#7A1219] hover:!bg-[#5a0d12]">
            {t('common.joinCommunity')}
          </Button>
        </Container>
      </section>
        </div> {/* End of Page Content Wrapper */}
      </div>
    </div>
  )
}
