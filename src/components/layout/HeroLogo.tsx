import { useLayoutEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

import { useScrollProgress } from '../../hooks/useScrollProgress'
import logoDarkRed from '../../assets/images/NewLogoDarkRed.svg'
import logoWhite from '../../assets/images/NewLogo.svg'

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
  const startTopPx = useMotionValue(window.innerHeight * 0.5)

  useLayoutEffect(() => {
    const measure = () => {
      // Place logo exactly in the center vertically
      startTopPx.set(window.innerHeight * 0.5)
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

  // Much bigger base size now, scale down to 0.16 to fit the navbar nicely.
  const scale = useTransform(progress, [0, 1], [1, 0.16])

  // Cross-fade: white logo in the hero → original full-colour logo in the navbar.
  const whiteOpacity = useTransform(progress, [0, 0.6], [1, 0])

  const imgClass = 'h-64 w-auto max-w-[80vw] select-none sm:h-80'

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[80] left-1/2"
      style={{ top, x: '-50%', y: '-50%', scale, willChange: 'transform, top' }}
    >
      <div className="relative flex justify-center items-center">
        {/* Base: red logo (revealed as the white layer fades) */}
        <motion.img src={logoDarkRed} alt="" className={imgClass} />
        {/* Overlay: white version, fades out on scroll */}
        <motion.img
          src={logoWhite}
          alt=""
          style={{ opacity: whiteOpacity }}
          className={`absolute inset-0 m-auto ${imgClass}`}
        />
      </div>
    </motion.div>
  )
}
