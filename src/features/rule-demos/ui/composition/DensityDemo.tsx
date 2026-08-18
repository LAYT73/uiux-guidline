import { useState } from 'react'
import { DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import styles from '../playground.module.css'

export function ConsistentGood() {
  const [air, setAir] = useState(false)
  const pad = air ? 18 : 8
  return (
    <DemoStack>
      <label style={{ display: 'flex', gap: 8 }}>
        <input type="checkbox" checked={air} onChange={(e) => setAir(e.target.checked)} />
        Comfortable density
      </label>
      <FakeCard style={{ padding: pad, display: 'flex', flexDirection: 'column', gap: pad }}>
        <strong>Inbox</strong>
        <span>Ada — invoice</span>
        <span>Grace — review</span>
      </FakeCard>
    </DemoStack>
  )
}

export function ConsistentBad() {
  return (
    <DemoStack>
      <FakeCard>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 22, marginBottom: 4 }}>Inbox</p>
        <p style={{ fontSize: 12, lineHeight: 1.1 }}>Ada — invoice</p>
        <p style={{ fontSize: 12, lineHeight: 1.1 }}>Grace — review</p>
        <div style={{ height: 48 }} />
        <p className={styles.meta}>Three densities, one card.</p>
      </FakeCard>
    </DemoStack>
  )
}

export function ContextGood() {
  const [edit, setEdit] = useState(false)
  return (
    <DemoStack>
      <label style={{ display: 'flex', gap: 8 }}>
        <input type="checkbox" checked={edit} onChange={(e) => setEdit(e.target.checked)} />
        Edit mode
      </label>
      <FakeCard style={{ padding: edit ? 16 : 8, fontSize: edit ? 16 : 12 }}>
        {edit ? 'Name, role, and timezone — room to think.' : 'Ada Lovelace · Admin · UTC'}
      </FakeCard>
    </DemoStack>
  )
}

export function ContextBad() {
  return (
    <DemoStack>
      <FakeCard style={{ padding: 4, fontSize: 11, lineHeight: 1.2 }}>
        Welcome! Confirm email, company, seat, SSO, billing, and two-factor before you continue.
      </FakeCard>
      <p className={styles.meta}>First-run copy at spreadsheet density.</p>
    </DemoStack>
  )
}
