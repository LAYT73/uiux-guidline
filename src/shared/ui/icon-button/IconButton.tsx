import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cx } from '@/shared/lib'
import styles from './IconButton.module.css'

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  children: ReactNode
}

export function IconButton({ label, className, type = 'button', children, ...props }: IconButtonProps) {
  return (
    <button type={type} aria-label={label} className={cx(styles.root, className)} {...props}>
      {children}
    </button>
  )
}
