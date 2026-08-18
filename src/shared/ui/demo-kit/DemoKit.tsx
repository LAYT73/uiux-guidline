import type { CSSProperties, InputHTMLAttributes, ReactNode } from 'react'
import styles from './DemoKit.module.css'

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
      <input id={rangeId} type="range" {...props} />
    </label>
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
