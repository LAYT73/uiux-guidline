import { useEffect, useId, useRef, useState } from 'react'
import { DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

const OPTIONS = ['Draft', 'Review', 'Published', 'Archived']

export function KeyboardGood() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [value, setValue] = useState(OPTIONS[0])
  const listId = useId()
  const buttonRef = useRef<HTMLButtonElement>(null)

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
        const next = OPTIONS[index]
        if (next) setValue(next)
        setOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, index])

  return (
    <DemoStack>
      <button
        ref={buttonRef}
        type="button"
        className={styles.chip}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
      >
        {value}
      </button>
      {open ? (
        <ul id={listId} role="listbox" aria-activedescendant={`${listId}-${index}`} className={styles.mini}>
          {OPTIONS.map((option, i) => (
            <li key={option}>
              <button
                type="button"
                role="option"
                aria-selected={i === index}
                className={styles.chip}
                style={{ background: i === index ? 'var(--accent-soft)' : undefined }}
                onClick={() => {
                  setValue(option)
                  setIndex(i)
                  setOpen(false)
                }}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
      <p className={styles.meta}>Arrows move. Enter selects. Escape closes.</p>
    </DemoStack>
  )
}

export function KeyboardBad() {
  const [value, setValue] = useState('Draft')
  const [hover, setHover] = useState(false)

  return (
    <DemoStack>
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <span className={styles.chip}>{value}</span>
        {hover ? (
          <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {OPTIONS.map((option) => (
              <span key={option} className={styles.chip} onClick={() => setValue(option)}>
                {option}
              </span>
            ))}
          </div>
        ) : null}
      </div>
      <p className={styles.meta}>Hover-only. Leave the box and it vanishes.</p>
    </DemoStack>
  )
}
