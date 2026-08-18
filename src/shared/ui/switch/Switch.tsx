import { cx } from '@/shared/lib'
import styles from './Switch.module.css'

type SwitchProps = {
  checked: boolean
  label: string
  onChange: (checked: boolean) => void
}

export function Switch({ checked, label, onChange }: SwitchProps) {
  return (
    <label className={styles.root}>
      <input
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      <span className={cx(styles.track, checked && styles.on)} aria-hidden>
        <span className={styles.thumb} />
      </span>
      <span className={styles.label}>{label}</span>
    </label>
  )
}
