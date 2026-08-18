import { Check } from 'lucide-react'
import { cx } from '@/shared/lib'
import styles from './Checkbox.module.css'

type CheckboxProps = {
  checked: boolean
  label: string
  onChange: (checked: boolean) => void
  disabled?: boolean
}

export function Checkbox({ checked, label, onChange, disabled }: CheckboxProps) {
  return (
    <label className={cx(styles.root, disabled && styles.disabled)}>
      <input
        type="checkbox"
        className={styles.input}
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange(event.target.checked)}
      />
      <span className={cx(styles.box, checked && styles.on)} aria-hidden>
        <Check className={styles.check} size={12} strokeWidth={3} />
      </span>
      <span className={styles.label}>{label}</span>
    </label>
  )
}
