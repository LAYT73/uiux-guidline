import { useState } from 'react'
import { DemoRange, DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import styles from '../playground.module.css'

export function CtaGood() {
  const [space, setSpace] = useState(24)
  return (
    <DemoStack>
      <DemoRange label="Space around CTA" name="cta-good" min={8} max={40} value={space} valueLabel={`${space}px`} onChange={(e) => setSpace(Number(e.target.value))} />
      <p className={styles.meta}>Ready to ship the collection?</p>
      <div style={{ marginTop: space, marginBottom: space }}>
        <Button>Publish</Button>
      </div>
    </DemoStack>
  )
}

export function CtaBad() {
  return (
    <DemoStack>
      <p className={styles.meta} style={{ marginBottom: 4 }}>
        Ready to ship the collection?
      </p>
      <Button>Publish</Button>
    </DemoStack>
  )
}

export function BreathingGood() {
  const [space, setSpace] = useState(20)
  return (
    <DemoStack>
      <DemoRange label="Between sections" name="air-good" min={8} max={40} value={space} valueLabel={`${space}px`} onChange={(e) => setSpace(Number(e.target.value))} />
      <FakeCard>Intro</FakeCard>
      <div style={{ height: space }} />
      <FakeCard>Details</FakeCard>
    </DemoStack>
  )
}

export function BreathingBad() {
  return (
    <DemoStack>
      <FakeCard style={{ margin: 0 }}>Intro</FakeCard>
      <FakeCard style={{ margin: 0, borderRadius: 0 }}>Details</FakeCard>
      <FakeCard style={{ margin: 0 }}>Footer widgets</FakeCard>
    </DemoStack>
  )
}
