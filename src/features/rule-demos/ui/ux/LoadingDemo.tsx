import { useState } from 'react'
import { DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import styles from '../playground.module.css'

export function SkeletonGood() {
  const [ready, setReady] = useState(false)
  return (
    <DemoStack>
      <Button onClick={() => setReady((v) => !v)}>{ready ? 'Show skeleton' : 'Show content'}</Button>
      <FakeCard>
        {ready ? (
          <>
            <strong>Northwind</strong>
            <p className={styles.meta}>12 members</p>
          </>
        ) : (
          <div aria-hidden>
            <div style={{ height: 14, width: '40%', background: 'var(--bg-muted)', borderRadius: 4 }} />
            <div style={{ height: 10, width: '60%', background: 'var(--bg-muted)', borderRadius: 4, marginTop: 8 }} />
          </div>
        )}
      </FakeCard>
    </DemoStack>
  )
}

export function SkeletonBad() {
  const [ready, setReady] = useState(false)
  return (
    <DemoStack>
      <Button onClick={() => setReady((v) => !v)}>{ready ? 'Unload' : 'Load'}</Button>
      {ready ? (
        <FakeCard>
          <strong>Northwind</strong>
          <p className={styles.meta}>12 members</p>
        </FakeCard>
      ) : (
        <p className={styles.meta} style={{ padding: 24, textAlign: 'center' }}>
          Loading…
        </p>
      )}
    </DemoStack>
  )
}

export function LayoutShiftGood() {
  const [ready, setReady] = useState(false)
  return (
    <DemoStack>
      <Button onClick={() => setReady((v) => !v)}>Toggle banner</Button>
      <div style={{ minHeight: 72 }}>
        {ready ? <FakeCard>Late image / banner — space was reserved.</FakeCard> : null}
      </div>
      <Button>I stay put</Button>
    </DemoStack>
  )
}

export function LayoutShiftBad() {
  const [ready, setReady] = useState(false)
  return (
    <DemoStack>
      <Button onClick={() => setReady((v) => !v)}>Toggle banner</Button>
      {ready ? <FakeCard>Surprise banner</FakeCard> : null}
      <Button>I get shoved</Button>
    </DemoStack>
  )
}
