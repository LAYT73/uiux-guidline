import { useState } from 'react'
import { DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import { Modal } from '@/shared/ui/modal'
import styles from '../../playground.module.css'

export function OnePrimaryGood() {
  const [open, setOpen] = useState(false)
  const [log, setLog] = useState('')

  return (
    <DemoStack>
      <Button variant="danger" onClick={() => setOpen(true)}>
        Delete project
      </Button>
      <Modal open={open} title="Delete project?" onClose={() => setOpen(false)}>
        <p className={styles.meta} style={{ marginBottom: 12 }}>
          This cannot be undone.
        </p>
        <DemoRow>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              setLog('Deleted')
              setOpen(false)
            }}
          >
            Delete
          </Button>
        </DemoRow>
      </Modal>
      {log ? <p className={styles.meta}>{log}</p> : null}
    </DemoStack>
  )
}

export function OnePrimaryBad() {
  const [open, setOpen] = useState(false)

  return (
    <DemoStack>
      <Button onClick={() => setOpen(true)}>Delete project</Button>
      <Modal open={open} title="Are you sure?" onClose={() => setOpen(false)}>
        <DemoRow>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Delete</Button>
        </DemoRow>
      </Modal>
    </DemoStack>
  )
}
