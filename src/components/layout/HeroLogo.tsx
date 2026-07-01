import { useLayoutEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

import { useScrollProgress } from '../../hooks/useScrollProgress'
import logo from '../../assets/images/NewLogo.svg'

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
  const startTopPx = useMotionValue(window.innerHeight * 0.4)

  useLayoutEffect(() => {
    const measure = () => {
      // Place logo exactly in the center vertically (adjusting slightly up for optical centering)
      startTopPx.set(window.innerHeight * 0.38)
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

  // Much bigger base size now, scale down to 0.28 to fit the newly enlarged navbar logo nicely.
  const scale = useTransform(progress, [0, 1], [1, 0.28])

  // Removed the drop-shadow filter based on user feedback

  // Transition color from pure white to #5A0D12 as it scrolls up
  const backgroundColor = useTransform(progress, [0, 0.6], ['#FFFFFF', '#5A0D12'])

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[80] left-1/2"
      style={{ top, x: '-50%', y: '-50%', scale }}
    >
      <motion.div 
        layoutId="wjih-logo"
        className="h-64 w-[455px] max-w-[80vw] sm:h-80 sm:w-[568px]"
        style={{ 
          backgroundColor,
          WebkitMaskImage: `url(${logo})`,
          WebkitMaskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskImage: `url(${logo})`,
          maskSize: 'contain',
          maskRepeat: 'no-repeat',
          maskPosition: 'center'
        }}
      />
    </motion.div>
  )
}
