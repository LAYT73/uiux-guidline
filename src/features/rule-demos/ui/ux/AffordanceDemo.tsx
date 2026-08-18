import { DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import styles from '../playground.module.css'

export function LooksLikeGood() {
  return (
    <DemoStack>
      <Button>Delete file</Button>
      <p className={styles.meta}>Looks like a button. Is a button.</p>
    </DemoStack>
  )
}

export function LooksLikeBad() {
  return (
    <DemoStack>
      <span
        onClick={() => window.alert('Deleted')}
        style={{ color: 'var(--text-muted)', cursor: 'default' }}
      >
        Delete file
      </span>
      <p className={styles.meta}>Looks like a caption. Deletes on click.</p>
    </DemoStack>
  )
}

export function CursorGood() {
  return (
    <DemoStack>
      <Button>Download</Button>
      <p className={styles.meta} style={{ cursor: 'default' }}>
        Caption — default cursor.
      </p>
    </DemoStack>
  )
}

export function CursorBad() {
  return (
    <DemoStack>
      <div style={{ cursor: 'pointer' }}>
        <p>Project name</p>
        <p className={styles.meta}>Updated 2h ago · not clickable</p>
      </div>
    </DemoStack>
  )
}
