import type { Transition, Variants } from 'motion/react'

export const EASE_OUT = [0.22, 1, 0.36, 1] as const

export const transitionFast: Transition = { duration: 0.18, ease: EASE_OUT }
export const transitionBase: Transition = { duration: 0.28, ease: EASE_OUT }

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: transitionBase },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitionBase },
}

export const stagger = (gap = 0.06): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: gap } },
})

export const pagePresence = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
  transition: transitionBase,
}

export const panelPresence = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: transitionFast,
}

export const overlayPresence = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: transitionFast,
}

export const dialogPresence = {
  initial: { opacity: 0, y: 16, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 8, scale: 0.98 },
  transition: transitionBase,
}
