import { useScroll, useTransform, useSpring, type MotionValue } from 'framer-motion'

const getViewportHeight = () =>
  typeof window === 'undefined' ? 800 : window.innerHeight

/**
 * Scroll-linked progress, from 0 (page at the very top) to 1, mapped over the
 * first `distance` pixels of vertical scroll (defaults to ~70% of the viewport
 * height).
 *
 * The value is derived from the live scroll position via Framer Motion's
 * `useScroll`, so it tracks the scrollbar exactly.
 * We wrap it in a `useSpring` to smooth out any jerky scrolling for a premium feel.
 *
 * Two components reading this hook independently stay in sync because they both
 * observe the same window scroll position and use the same default distance.
 */
export function useScrollProgress(
  distance = getViewportHeight() * 0.7,
): MotionValue<number> {
  const { scrollY } = useScroll()
  const rawProgress = useTransform(scrollY, [0, distance], [0, 1], { clamp: true })
  return useSpring(rawProgress, { stiffness: 120, damping: 25, restDelta: 0.0001 })
}
