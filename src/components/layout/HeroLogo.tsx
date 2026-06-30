import { useLayoutEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

import { useScrollProgress } from '../../hooks/useScrollProgress'
import logo from '../../assets/images/LogoWijih.png'

/**
 * Fixed morphing logo.
 *
 * On mount, measures the hero h1's position and positions itself so its
 * bottom edge sits just above the heading. As the user scrolls, it travels
 * from that starting point up into the centre of the navbar and scales down.
 *
 * Using [progress, startTopPx] in useTransform keeps the animation reactive:
 * if the window is resized the measurement updates and the animation adjusts.
 */
export function HeroLogo() {
  const progress = useScrollProgress()

  // Logo centre Y, in px — updated after mount and on resize.
  const startTopPx = useMotionValue(window.innerHeight * 0.35)

  useLayoutEffect(() => {
    const measure = () => {
      const title = document.querySelector<HTMLElement>('[data-hero-title]')
        ?? document.querySelector('h1')
      if (!title) return

      const logoH   = window.innerWidth >= 640 ? 224 : 176 // h-56 / h-44
      const gap     = 20
      const titleTop = title.getBoundingClientRect().top
      // Place logo centre just above the h1; clamp so it's never off-screen.
      const logoCenter = Math.max(titleTop - gap - logoH / 2, logoH / 2 + 8)
      startTopPx.set(logoCenter)
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [startTopPx])

  // Interpolate from the measured start (above h1) to 32px (≈2rem, navbar centre).
  const top = useTransform([progress, startTopPx] as const, ([p, s]) => {
    const start = s as number
    return `${start + (32 - start) * (p as number)}px`
  })

  // Bigger base size now, so scale down a bit further to keep navbar size right.
  const scale = useTransform(progress, [0, 1], [1, 0.2])

  // Subtle shadow in the hero that fades away as the logo shrinks into the navbar.
  const filter = useTransform(
    progress,
    [0, 0.6],
    ['drop-shadow(0 10px 18px rgba(0,0,0,0.30))', 'drop-shadow(0 0 0 rgba(0,0,0,0))'],
  )

  // Cross-fade: white logo in the hero → original full-colour logo in the navbar.
  const whiteOpacity = useTransform(progress, [0, 0.6], [1, 0])

  const imgClass = 'h-44 w-auto max-w-[70vw] select-none sm:h-56'

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-50 left-1/2"
      style={{ top, x: '-50%', y: '-50%', scale, filter }}
    >
      <div className="relative">
        {/* Base: original full-colour logo (revealed as the white layer fades) */}
        <img src={logo} alt="" className={imgClass} />
        {/* Overlay: white version, fades out on scroll */}
        <motion.img
          src={logo}
          alt=""
          style={{ opacity: whiteOpacity }}
          className={`absolute inset-0 [filter:brightness(0)_invert(1)] ${imgClass}`}
        />
      </div>
    </motion.div>
  )
}
