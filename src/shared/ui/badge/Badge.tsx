import type { ReactNode } from 'react'
import { cx } from '@/shared/lib'
import styles from './Badge.module.css'

type BadgeTone = 'do' | 'dont' | 'neutral'

type BadgeProps = {
  tone?: BadgeTone
  children: ReactNode
}

export function Badge({ tone = 'neutral', children }: BadgeProps) {
  return <span className={cx(styles.root, styles[tone])}>{children}</span>
}
