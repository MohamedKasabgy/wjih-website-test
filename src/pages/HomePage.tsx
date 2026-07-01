import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import { motion, useTransform, AnimatePresence } from 'framer-motion'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { HeroLogo } from '../components/layout/HeroLogo'
import { useScrollProgress } from '../hooks/useScrollProgress'
import heroImage from '../../src/assets/images/heroImage.jpeg'
import aboutImage from '../../src/assets/images/aboutImageCompressed.jpg'
import graph2 from '../assets/images/graph2.png'

export function HomePage() {
  const { t } = useTranslation()

  const progress = useScrollProgress()
  const titleOpacity = useTransform(progress, [0.1, 0.45], [1, 0])
  const titleY = useTransform(progress, [0.1, 0.45], [0, -30])
  const scrollHintOpacity = useTransform(progress, [0, 0.1], [1, 0])

  const [showScrollText, setShowScrollText] = useState(false)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    const handleScroll = () => {
      if (window.scrollY === 0) {
        timer = setTimeout(() => setShowScrollText(true), 6000)
      } else {
        setShowScrollText(false)
        clearTimeout(timer)
      }
    }

    if (window.scrollY === 0) {
      timer = setTimeout(() => setShowScrollText(true), 6000)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="flex flex-col">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <HeroLogo />

      <section
        className="relative min-h-screen overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />


        {/* Scroll Hint */}
        <motion.div
          style={{ opacity: scrollHintOpacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-white opacity-80"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>

          <AnimatePresence>
            {showScrollText && (
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-white/90 text-sm font-medium tracking-wide drop-shadow-md"
              >
                اسحب للأسفل
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        {/* White Fade Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-12 bg-gradient-to-t from-white to-transparent pointer-events-none z-0" />
      </section>

      {/* ── About ─────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <Container >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image (On the right visually in RTL layout) */}
            <div className="relative order-2 lg:order-1">
              <div className="section-card overflow-hidden p-0">
                <img
                  src={aboutImage}
                  alt="Wadi Jeddah"
                  className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Text (On the left visually in RTL layout) */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl md:text-[3.5rem] font-bold text-[#1E2650] mb-8 leading-[1.2]">
                <span className="text-[#7A1219]">مجمع وادي جدة للابتكار</span>..<br /> حيث تنمو الأفكار
              </h2>
              <p className="text-xl text-[#5A6480] leading-[1.8]">
                نحن أكثر من مجرد مساحة عمل؛ نحن بيئة ريادية متكاملة تدعم المبتكرين ورواد الأعمال. نسعى لتمكين العقول المبدعة عبر تقديم خدمات حصرية وبرامج مكثفة تذلل العقبات وتسرّع نمو شركتك لتنطلق نحو المستقبل.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <div className="section-divider" />

      {/* ── Facilities ────────────────────────────────────────── */}
      <section className="py-15">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E2650] mb-6">
              {t('home.facilities.title').replace('## ', '')}
            </h2>
            <p className="text-lg text-[#5A6480] max-w-3xl mx-auto leading-relaxed">
              {t('home.facilities.content')}
            </p>
          </div>

          <div className="relative">
            {/* Aesthetic connecting line behind the cards */}
            <div className="hidden md:block absolute top-1/2 left-8 right-8 h-[2px] -translate-y-1/2 z-0 border-t-2 border-dashed border-[#7A1219]/20" />

            <div className="grid md:grid-cols-3 gap-8 mb-12 relative z-10">
              {[0, 1, 2].map((i) => (
                <div key={i} className="section-card relative p-8 pt-14">
                  <span className="feature-number text-[#5A0D12] !opacity-100" style={{ left: 'auto', right: '1.25rem' }}>{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-[#1E2650] leading-relaxed text-lg">
                    {t(`home.facilities.list.${i}` as any)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/workspaces">
              <Button variant="primary" className="text-base px-10 py-4">{t('home.facilities.cta')}</Button>
            </Link>
          </div>
        </Container>
      </section>

      <div className="section-divider mb-1" />

      {/* ── Services ──────────────────────────────────────────── */}
      <section className=" py-24 bg-[#5A0D12] relative overflow-hidden">
        {/* Subtle white grid background */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', 
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)'
          }} 
        />
        
        <Container className="relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('home.services.title').replace('## ', '')}
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              {t('home.services.content')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="section-card relative p-8 group flex flex-col h-full overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
                {/* Number in the top right corner */}
                <span className="absolute top-4 start-5 text-4xl font-black text-[#5A0D12] !opacity-100">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <p className="mt-14 text-[#1E2650] leading-relaxed text-lg font-medium relative z-10">
                  {t(`home.services.list.${i}` as any)}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/incubator">
              <Button className="bg-white !text-[#5A0D12] hover:bg-white/90 border-transparent text-base font-bold px-10 py-4 shadow-md">
                {t('home.services.cta')}
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* ── Community CTA ─────────────────────────────────────── */}
      <section className="bg-white pt-24 pb-12 relative overflow-hidden">

        {/* Decorative graphic — docked at the top-left edge of THIS container
              (same start edge as the text below), not the raw section edge. */}

        <div className="absolute -left-8 top-4 pointer-events-none">
          <img
            src={graph2}
            alt=""
            className="w-40 sm:w-56 md:w-72 h-auto mix-blend-multiply opacity-70"
            aria-hidden="true"
          />
        </div>

        {/* Decorative graphic — smaller copy docked at the end (right) edge. */}
        <div className="absolute -right-4 top-60 pointer-events-none">
          <img
            src={graph2}
            alt=""
            className="w-20 sm:w-28 md:w-36 h-auto mix-blend-multiply  scale-x-[-1]"
            aria-hidden="true"
          />
        </div>

        <Container className="relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#761020] mb-8 max-w-3xl mx-auto leading-tight">
            {t('home.community.title').replace('## ', '')}
          </h2>
          <p className="text-lg text-[#1e2650] mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('home.community.content')}
          </p>
          <div className="flex justify-center">
            <Button
              variant="primary"
              className="text-lg px-10 py-4 !bg-[#7A1219] !border-[#7A1219] hover:!bg-[#5a0d12]"
            >            {t('common.joinCommunity')}
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}