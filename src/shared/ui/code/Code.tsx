import { cx } from '@/shared/lib'
import styles from './Code.module.css'

type CodeTone = 'neutral' | 'do' | 'dont'

type CodeProps = {
  children: string
  label?: string
  tone?: CodeTone
}

export function Code({ children, label, tone = 'neutral' }: CodeProps) {
  return (
    <figure className={cx(styles.root, styles[tone])}>
      {label ? <figcaption className={styles.label}>{label}</figcaption> : null}
      <pre className={styles.pre}>
        <code>{children}</code>
      </pre>
    </figure>
  )
}
