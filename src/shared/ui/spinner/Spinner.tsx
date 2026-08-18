import styles from './Spinner.module.css'

type SpinnerProps = {
  size?: number
  label?: string
}

export function Spinner({ size = 16, label }: SpinnerProps) {
  return (
    <span
      className={styles.root}
      role={label ? 'status' : undefined}
      aria-hidden={label ? undefined : true}
      style={{ width: size, height: size }}
    >
      <span
        className={styles.ring}
        style={{ borderWidth: Math.max(2, Math.round(size / 8)) }}
      />
      {label ? <span className={styles.label}>{label}</span> : null}
    </span>
  )
}
