import { useEffect, useId, useRef, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { X } from 'lucide-react'
import { cx, dialogPresence, overlayPresence } from '@/shared/lib'
import styles from './Modal.module.css'

type ModalProps = {
  open: boolean
  title: string
  description?: string
  closeLabel?: string
  tone?: 'default' | 'danger'
  footer?: ReactNode
  onClose: () => void
  children?: ReactNode
}

const FOCUSABLE =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

export function Modal({
  open,
  title,
  description,
  closeLabel = 'Close',
  tone = 'default',
  footer,
  onClose,
  children,
}: ModalProps) {
  const titleId = useId()
  const descriptionId = useId()
  const dialogRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!open) return

    const previouslyFocused = document.activeElement
    dialogRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab' || !dialogRef.current) return

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [open, onClose])

  const motionProps = reduceMotion ? {} : dialogPresence
  const overlayProps = reduceMotion ? {} : overlayPresence

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div className={styles.overlay} onClick={onClose} {...overlayProps}>
          <motion.div
            ref={dialogRef}
            className={cx(styles.dialog, tone === 'danger' && styles.danger)}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={description ? descriptionId : undefined}
            tabIndex={-1}
            onClick={(event) => event.stopPropagation()}
            {...motionProps}
          >
            <div className={styles.header}>
              <div className={styles.heading}>
                <h2 id={titleId} className={styles.title}>
                  {title}
                </h2>
                {description ? (
                  <p id={descriptionId} className={styles.description}>
                    {description}
                  </p>
                ) : null}
              </div>
              <button
                type="button"
                className={styles.close}
                aria-label={closeLabel}
                onClick={onClose}
              >
                <X size={16} aria-hidden />
              </button>
            </div>
            {children ? <div className={styles.body}>{children}</div> : null}
            {footer ? <div className={styles.footer}>{footer}</div> : null}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}
