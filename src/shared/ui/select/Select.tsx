import type { ReactNode, SelectHTMLAttributes } from 'react'
import { ChevronDown } from 'lucide-react'
import { cx } from '@/shared/lib'
import styles from './Select.module.css'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string
  hint?: string
  error?: string
  children: ReactNode
}

export function Select({
  label,
  hint,
  error,
  id,
  className,
  children,
  ...props
}: SelectProps) {
  const selectId = id ?? props.name
  const hintId = hint ? `${selectId}-hint` : undefined
  const errorId = error ? `${selectId}-error` : undefined

  return (
    <label className={styles.field} htmlFor={selectId}>
      <span className={styles.label}>{label}</span>
      <span className={styles.control}>
        <select
          id={selectId}
          className={cx(styles.select, error && styles.invalid, className)}
          aria-invalid={Boolean(error)}
          aria-describedby={[hintId, errorId].filter(Boolean).join(' ') || undefined}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className={styles.chevron} size={16} aria-hidden />
      </span>
      {hint && !error ? (
        <span id={hintId} className={styles.hint}>
          {hint}
        </span>
      ) : null}
      {error ? (
        <span id={errorId} className={styles.error} role="alert">
          {error}
        </span>
      ) : null}
    </label>
  )
}
