import { useState } from 'react'
import { DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import styles from '../../playground.module.css'

export function StatesGood() {
  const [loading, setLoading] = useState(false)

  return (
    <DemoStack>
      <DemoRow>
        <Button
          disabled={loading}
          aria-busy={loading}
          onClick={() => {
            setLoading(true)
            window.setTimeout(() => setLoading(false), 1200)
          }}
        >
          {loading ? 'Saving…' : 'Save'}
        </Button>
        <Button variant="secondary">Focus me</Button>
        <Button variant="ghost" disabled>
          Disabled
        </Button>
      </DemoRow>
      <p className={styles.meta}>Tab to the middle button. The focus ring is part of the control.</p>
    </DemoStack>
  )
}

export function StatesBad() {
  return (
    <DemoStack>
      <DemoRow>
        <span
          style={{
            background: 'var(--accent)',
            color: 'var(--accent-contrast)',
            padding: '6px 12px',
            borderRadius: 4,
          }}
        >
          Save
        </span>
        <span style={{ color: 'var(--text-subtle)' }}>Disabled?</span>
      </DemoRow>
      <p className={styles.meta}>Not a button. No hover, no focus, no loading.</p>
    </DemoStack>
  )
}
