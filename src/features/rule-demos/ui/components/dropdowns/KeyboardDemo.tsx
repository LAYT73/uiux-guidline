import { useEffect, useId, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown } from 'lucide-react'
import { DemoFocus, DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import { Code } from '@/shared/ui/code'
import { Kbd } from '@/shared/ui/kbd'
import { cx } from '@/shared/lib'
import styles from '../../playground.module.css'

const OPTIONS = ['draft', 'review', 'published', 'archived'] as const

const GOOD_MARKUP = `<div role="listbox"
     aria-activedescendant="opt-1">
  <button id="opt-1" role="option">
    Draft
  </button>
</div>`

const BAD_MARKUP = `<span class="trigger">Draft</span>
<div class="menu">
  <span class="option">Review</span>
</div>`

export function KeyboardGood() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [value, setValue] = useState<(typeof OPTIONS)[number]>(OPTIONS[0])
  const listId = useId()
  const labelId = useId()
  const triggerId = useId()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
      if (event.key === 'ArrowDown') {
        event.preventDefault()
        setIndex((i) => Math.min(OPTIONS.length - 1, i + 1))
      }
      if (event.key === 'ArrowUp') {
        event.preventDefault()
        setIndex((i) => Math.max(0, i - 1))
      }
      if (event.key === 'Enter') {
        event.preventDefault()
        const next = OPTIONS[index]
        if (next) setValue(next)
        setOpen(false)
      }
    }
    const onPointerDown = (event: MouseEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onPointerDown)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onPointerDown)
    }
  }, [open, index])

  return (
    <DemoStack>
      <DemoFocus
        label={t('demo.focusNow')}
        startLabel={t('demo.tabFromHere')}
        emptyLabel={t('demo.focusOutside')}
      >
        <div className={styles.field}>
          <span className={styles.label} id={labelId}>
            {t('demo.chooseStatus')}
          </span>
          <div className={styles.menuWrap} ref={wrapRef}>
            <button
              ref={buttonRef}
              id={triggerId}
              type="button"
              className={styles.trigger}
              aria-haspopup="listbox"
              aria-expanded={open}
              aria-controls={listId}
              aria-labelledby={`${labelId} ${triggerId}`}
              onClick={() => setOpen((v) => !v)}
            >
              <span>{t(`demo.${value}`)}</span>
              <ChevronDown size={16} aria-hidden />
            </button>
            {open ? (
              <div
                id={listId}
                role="listbox"
                aria-labelledby={labelId}
                aria-activedescendant={`${listId}-${index}`}
                className={styles.menu}
              >
                {OPTIONS.map((option, i) => (
                  <button
                    key={option}
                    id={`${listId}-${i}`}
                    type="button"
                    role="option"
                    aria-selected={option === value}
                    className={cx(styles.option, i === index && styles.optionActive)}
                    onClick={() => {
                      setValue(option)
                      setIndex(i)
                      setOpen(false)
                      buttonRef.current?.focus()
                    }}
                  >
                    {t(`demo.${option}`)}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </DemoFocus>
      <DemoRow>
        <Kbd>{t('demo.keyArrows')}</Kbd>
        <Kbd>{t('demo.keyEnter')}</Kbd>
        <Kbd>{t('demo.keyEsc')}</Kbd>
        <span className={styles.meta}>{t('demo.keysHint')}</span>
      </DemoRow>
      <Code label={t('demo.markup')} tone="do">
        {GOOD_MARKUP}
      </Code>
    </DemoStack>
  )
}

export function KeyboardBad() {
  const { t } = useTranslation()
  const [value, setValue] = useState<(typeof OPTIONS)[number]>('draft')
  const [hover, setHover] = useState(false)

  return (
    <DemoStack>
      <DemoFocus
        label={t('demo.focusNow')}
        startLabel={t('demo.tabFromHere')}
        emptyLabel={t('demo.focusOutside')}
      >
        <div className={styles.field}>
          <span className={styles.label}>{t('demo.chooseStatus')}</span>
          <div
            className={styles.menuWrap}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <span className={styles.trigger}>
              <span>{t(`demo.${value}`)}</span>
              <ChevronDown size={16} aria-hidden />
            </span>
            {hover ? (
              <div className={cx(styles.menu, styles.menuFlush)}>
                {OPTIONS.map((option) => (
                  <span
                    key={option}
                    className={cx(styles.option, option === value && styles.optionActive)}
                    onClick={() => setValue(option)}
                  >
                    {t(`demo.${option}`)}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </DemoFocus>
      <DemoRow>
        <Kbd>{t('demo.keyTab')}</Kbd>
        <span className={styles.meta}>{t('demo.hoverOnly')}</span>
      </DemoRow>
      <Code label={t('demo.markup')} tone="dont">
        {BAD_MARKUP}
      </Code>
    </DemoStack>
  )
}
