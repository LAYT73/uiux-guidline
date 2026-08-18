import type { ReactNode } from 'react'
import { cx } from '@/shared/lib'
import styles from './SegmentedControl.module.css'

type Option<T extends string> = {
  value: T
  label: ReactNode
}

type SegmentedControlProps<T extends string> = {
  value: T
  options: Option<T>[]
  ariaLabel: string
  size?: 'sm' | 'md'
  onChange: (value: T) => void
}

export function SegmentedControl<T extends string>({
  value,
  options,
  ariaLabel,
  size = 'md',
  onChange,
}: SegmentedControlProps<T>) {
  return (
    <div className={cx(styles.root, styles[size])} role="tablist" aria-label={ariaLabel}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          role="tab"
          aria-selected={option.value === value}
          className={cx(styles.item, option.value === value && styles.active)}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
