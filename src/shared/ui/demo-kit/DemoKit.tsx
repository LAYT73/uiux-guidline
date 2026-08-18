import {
  useRef,
  useState,
  type CSSProperties,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react'
import styles from './DemoKit.module.css'

const FOCUSABLE =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

type DemoStackProps = {
  children: ReactNode
}

export function DemoStack({ children }: DemoStackProps) {
  return <div className={styles.stack}>{children}</div>
}

export function DemoRow({ children }: DemoStackProps) {
  return <div className={styles.row}>{children}</div>
}

type DemoRangeProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  valueLabel?: string
}

export function DemoRange({ label, valueLabel, id, ...props }: DemoRangeProps) {
  const rangeId = id ?? props.name ?? 'range'

  return (
    <label className={styles.range} htmlFor={rangeId}>
      <span className={styles.rangeLabel}>
        {label}
        {valueLabel ? <strong>{valueLabel}</strong> : null}
      </span>
      <input id={rangeId} type="range" className={styles.slider} {...props} />
    </label>
  )
}

type DemoFocusProps = {
  label: string
  startLabel: string
  emptyLabel: string
  children: ReactNode
}

function describeTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return null
  const name = target.getAttribute('aria-label') ?? target.textContent?.trim()
  return name && name.length > 0 ? name.slice(0, 32) : target.tagName.toLowerCase()
}

export function DemoFocus({ label, startLabel, emptyLabel, children }: DemoFocusProps) {
  const [focused, setFocused] = useState<string | null>(null)
  const scopeRef = useRef<HTMLDivElement>(null)

  return (
    <div className={styles.focus}>
      <div
        ref={scopeRef}
        className={styles.focusScope}
        onFocus={(event) => setFocused(describeTarget(event.target))}
        onBlur={() => setFocused(null)}
      >
        {children}
      </div>
      <div className={styles.focusBar}>
        <button
          type="button"
          className={styles.focusStart}
          onClick={() => scopeRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus()}
        >
          {startLabel}
        </button>
        <p className={styles.focusStatus} aria-live="polite">
          {label}: <strong>{focused ?? emptyLabel}</strong>
        </p>
      </div>
    </div>
  )
}

type FakeCardProps = {
  children: ReactNode
  style?: CSSProperties
}

export function FakeCard({ children, style }: FakeCardProps) {
  return (
    <div className={styles.card} style={style}>
      {children}
    </div>
  )
}
