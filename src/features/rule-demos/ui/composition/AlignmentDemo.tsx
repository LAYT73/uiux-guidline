import { useState } from 'react'
import { DemoRange, DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import styles from '../playground.module.css'

export function GridGood() {
  const [gutter, setGutter] = useState(12)
  return (
    <DemoStack>
      <DemoRange label="Gutter" name="grid-good" min={8} max={24} value={gutter} valueLabel={`${gutter}px`} onChange={(e) => setGutter(Number(e.target.value))} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: gutter }}>
        <FakeCard>One</FakeCard>
        <FakeCard>Two</FakeCard>
      </div>
    </DemoStack>
  )
}

export function GridBad() {
  return (
    <DemoStack>
      <FakeCard style={{ marginLeft: 2 }}>One</FakeCard>
      <FakeCard style={{ marginLeft: 18, marginTop: 6 }}>Two</FakeCard>
      <p className={styles.meta}>Each block picked its own indent.</p>
    </DemoStack>
  )
}

export function LongTextGood() {
  return (
    <DemoStack>
      <p style={{ textAlign: 'left', fontSize: 14, lineHeight: 1.55 }}>
        Left-aligned body copy lets the eye return to a stable edge. Centered display type can still sit above it.
      </p>
    </DemoStack>
  )
}

export function LongTextBad() {
  return (
    <DemoStack>
      <p style={{ textAlign: 'center', fontSize: 14, lineHeight: 1.55 }}>
        Centered paragraphs force a new starting point on every line, so reading becomes a series of little hunts instead of a rhythm.
      </p>
    </DemoStack>
  )
}
