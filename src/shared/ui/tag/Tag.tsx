import type { ReactNode } from 'react'
import { cx } from '@/shared/lib'
import styles from './Tag.module.css'

type TagTone = 'neutral' | 'accent'
type TagSize = 'sm' | 'md'

type TagProps = {
  children: ReactNode
  tone?: TagTone
  size?: TagSize
}

export function Tag({ children, tone = 'neutral', size = 'md' }: TagProps) {
  return <span className={cx(styles.root, styles[tone], styles[size])}>{children}</span>
}
