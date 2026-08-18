import type { HTMLAttributes, ReactNode } from 'react'
import { cx } from '@/shared/lib'
import styles from './Card.module.css'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div className={cx(styles.root, className)} {...props}>
      {children}
    </div>
  )
}
