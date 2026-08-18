import type { ReactNode } from 'react'
import { CircleCheck, CircleX, Info, TriangleAlert, type LucideIcon } from 'lucide-react'
import { cx } from '@/shared/lib'
import styles from './Callout.module.css'

type CalloutTone = 'info' | 'do' | 'dont' | 'warning'

type CalloutProps = {
  tone?: CalloutTone
  title?: string
  icon?: ReactNode
  children: ReactNode
}

const toneIcons: Record<CalloutTone, LucideIcon> = {
  info: Info,
  do: CircleCheck,
  dont: CircleX,
  warning: TriangleAlert,
}

export function Callout({ tone = 'info', title, icon, children }: CalloutProps) {
  const ToneIcon = toneIcons[tone]

  return (
    <div className={cx(styles.root, styles[tone])} role="note">
      <span className={styles.icon}>{icon ?? <ToneIcon size={16} aria-hidden />}</span>
      <div className={styles.body}>
        {title ? <p className={styles.title}>{title}</p> : null}
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}
