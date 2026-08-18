import type { ReactNode } from 'react'
import styles from './Kbd.module.css'

type KbdProps = {
  children: ReactNode
}

export function Kbd({ children }: KbdProps) {
  return <kbd className={styles.root}>{children}</kbd>
}
