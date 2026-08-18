import { useState } from 'react'
import { DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import { Modal } from '@/shared/ui/modal'
import styles from '../../playground.module.css'

export function FocusTrapGood() {
  const [open, setOpen] = useState(false)

  return (
    <DemoStack>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal open={open} title="Rename file" onClose={() => setOpen(false)}>
        <p className={styles.meta} style={{ marginBottom: 12 }}>
          Tab cycles. Escape returns focus here.
        </p>
        <Button onClick={() => setOpen(false)}>Done</Button>
      </Modal>
    </DemoStack>
  )
}

export function FocusTrapBad() {
  const [open, setOpen] = useState(false)

  return (
    <DemoStack>
      <Button onClick={() => setOpen(true)}>Open fake overlay</Button>
      {open ? (
        <div
          style={{
            marginTop: 8,
            padding: 16,
            background: 'var(--overlay)',
            borderRadius: 12,
            color: 'var(--text)',
          }}
        >
          <p>Looks modal. Focus still lives on the page behind.</p>
          <button type="button" className={styles.chip} onClick={() => setOpen(false)}>
            Close
          </button>
        </div>
      ) : null}
    </DemoStack>
  )
}
