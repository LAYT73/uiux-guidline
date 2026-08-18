import { cloneElement, useEffect, useId, useState, type ReactElement } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { cx, transitionFast } from '@/shared/lib'
import styles from './Tooltip.module.css'

type TooltipProps = {
  content: string
  children: ReactElement
  side?: 'top' | 'bottom'
}

type TriggerProps = { 'aria-describedby'?: string }

export function Tooltip({ content, children, side = 'top' }: TooltipProps) {
  const tooltipId = useId()
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  const trigger = children as ReactElement<TriggerProps>
  const describedBy =
    [trigger.props['aria-describedby'], open ? tooltipId : undefined]
      .filter(Boolean)
      .join(' ') || undefined

  const travel = side === 'top' ? 2 : -2
  const motionProps = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: travel, x: '-50%' },
        animate: { opacity: 1, y: 0, x: '-50%' },
        exit: { opacity: 0, y: travel, x: '-50%' },
        transition: transitionFast,
      }

  return (
    <span
      className={styles.root}
      onPointerEnter={() => setOpen(true)}
      onPointerLeave={() => setOpen(false)}
      onFocus={(event) => {
        if (event.target.matches(':focus-visible')) setOpen(true)
      }}
      onBlur={() => setOpen(false)}
    >
      {cloneElement(trigger, { 'aria-describedby': describedBy })}
      <AnimatePresence>
        {open ? (
          <motion.span
            id={tooltipId}
            role="tooltip"
            className={cx(styles.tooltip, styles[side])}
            {...motionProps}
          >
            {content}
          </motion.span>
        ) : null}
      </AnimatePresence>
    </span>
  )
}
