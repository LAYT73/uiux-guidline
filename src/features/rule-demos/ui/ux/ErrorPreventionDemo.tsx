import { useState } from 'react'
import { DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import { Modal } from '@/shared/ui/modal'
import styles from '../playground.module.css'

export function ConfirmGood() {
  const [open, setOpen] = useState(false)
  const [gone, setGone] = useState(false)
  return (
    <DemoStack>
      <Button variant="danger" disabled={gone} onClick={() => setOpen(true)}>
        Delete report.csv
      </Button>
      <Modal open={open} title="Delete report.csv?" onClose={() => setOpen(false)}>
        <p className={styles.meta} style={{ marginBottom: 12 }}>This cannot be undone.</p>
        <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>{' '}
        <Button variant="danger" onClick={() => { setGone(true); setOpen(false) }}>Delete</Button>
      </Modal>
      {gone ? <p className={styles.meta}>Deleted after a named confirm.</p> : null}
    </DemoStack>
  )
}

export function ConfirmBad() {
  const [gone, setGone] = useState(false)
  return (
    <DemoStack>
      <Button variant="danger" disabled={gone} onClick={() => setGone(true)}>
        Delete
      </Button>
      {gone ? <p className={styles.warn}>Gone. No name, no undo.</p> : null}
    </DemoStack>
  )
}

export function ConstraintsGood() {
  const [start, setStart] = useState('2026-08-01')
  const [end, setEnd] = useState('2026-08-10')
  return (
    <DemoStack>
      <label className={styles.field}>
        <span className={styles.label}>Start</span>
        <input className={styles.input} type="date" value={start} onChange={(e) => setStart(e.target.value)} />
      </label>
      <label className={styles.field}>
        <span className={styles.label}>End</span>
        <input className={styles.input} type="date" min={start} value={end} onChange={(e) => setEnd(e.target.value)} />
      </label>
    </DemoStack>
  )
}

export function ConstraintsBad() {
  const [msg, setMsg] = useState('')
  return (
    <DemoStack>
      <input className={styles.input} type="date" defaultValue="2026-08-10" />
      <input className={styles.input} type="date" defaultValue="2026-08-01" />
      <Button onClick={() => setMsg('End cannot be before start.')}>Submit</Button>
      {msg ? <p className={styles.warn}>{msg}</p> : null}
    </DemoStack>
  )
}
