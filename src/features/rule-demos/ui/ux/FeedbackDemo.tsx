import { useState } from 'react'
import { DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import styles from '../playground.module.css'

export function ImmediateGood() {
  const [phase, setPhase] = useState<'idle' | 'saving' | 'saved'>('idle')
  return (
    <DemoStack>
      <Button
        disabled={phase === 'saving'}
        onClick={() => {
          setPhase('saving')
          window.setTimeout(() => setPhase('saved'), 800)
        }}
      >
        {phase === 'saving' ? 'Saving…' : phase === 'saved' ? 'Saved' : 'Save'}
      </Button>
    </DemoStack>
  )
}

export function ImmediateBad() {
  const [n, setN] = useState(0)
  return (
    <DemoStack>
      <Button
        onClick={() => {
          window.setTimeout(() => setN((v) => v + 1), 1200)
        }}
      >
        Save
      </Button>
      <p className={styles.meta}>Clicks recorded after 1.2s: {n}. Easy to double-submit.</p>
    </DemoStack>
  )
}

export function SilentFailGood() {
  const [error, setError] = useState(false)
  return (
    <DemoStack>
      <Button
        onClick={() => setError(true)}
      >
        Save to server
      </Button>
      {error ? (
        <p className={styles.warn}>
          Could not save.{' '}
          <button type="button" className={styles.chip} onClick={() => setError(false)}>
            Retry
          </button>
        </p>
      ) : null}
    </DemoStack>
  )
}

export function SilentFailBad() {
  const [busy, setBusy] = useState(false)
  return (
    <DemoStack>
      <Button
        onClick={() => {
          setBusy(true)
          window.setTimeout(() => setBusy(false), 600)
        }}
      >
        {busy ? '…' : 'Save to server'}
      </Button>
      <p className={styles.meta}>The spinner stops. No error. Did it work?</p>
    </DemoStack>
  )
}
