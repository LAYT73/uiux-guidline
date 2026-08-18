import { DemoStack } from '@/shared/ui/demo-kit'
import styles from '../playground.module.css'

export function OneH1Good() {
  return (
    <DemoStack>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 22 }}>Project settings</h1>
      <h2 style={{ fontSize: 15, marginTop: 8 }}>Billing</h2>
      <p className={styles.meta}>One H1. Sections are H2.</p>
    </DemoStack>
  )
}

export function OneH1Bad() {
  return (
    <DemoStack>
      <h1 style={{ fontSize: 18 }}>Project settings</h1>
      <h1 style={{ fontSize: 18 }}>Billing</h1>
      <h1 style={{ fontSize: 18 }}>Members</h1>
      <p className={styles.meta}>Three H1s. The outline shouts.</p>
    </DemoStack>
  )
}

export function NotAllBoldGood() {
  return (
    <DemoStack>
      <p style={{ fontWeight: 650, fontSize: 18 }}>$12,400</p>
      <p className={styles.meta}>Revenue this quarter. The number is the skim target.</p>
    </DemoStack>
  )
}

export function NotAllBoldBad() {
  return (
    <DemoStack>
      <p style={{ fontWeight: 600, fontSize: 14, lineHeight: 1.5 }}>
        Revenue this quarter is $12,400 and we think it will grow if we keep shipping and also the board asked for a memo.
      </p>
    </DemoStack>
  )
}
