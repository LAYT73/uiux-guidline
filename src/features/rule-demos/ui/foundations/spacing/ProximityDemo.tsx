import { useState } from 'react'
import { DemoRange, DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function ProximityGood() {
  const [inner, setInner] = useState(6)
  const outer = inner * 3

  return (
    <DemoStack>
      <DemoRange
        label="Inside a group"
        name="proximity-good"
        min={4}
        max={12}
        value={inner}
        valueLabel={`${inner}px / ${outer}px between groups`}
        onChange={(event) => setInner(Number(event.target.value))}
      />
      <div className={styles.field} style={{ gap: inner }}>
        <span className={styles.label}>Email</span>
        <input className={styles.input} defaultValue="ada@lovelace.dev" />
      </div>
      <div style={{ height: outer }} />
      <div className={styles.field} style={{ gap: inner }}>
        <span className={styles.label}>Company</span>
        <input className={styles.input} defaultValue="Analytical Engine" />
      </div>
    </DemoStack>
  )
}

export function ProximityBad() {
  const [gap, setGap] = useState(16)

  return (
    <DemoStack>
      <DemoRange
        label="Everything"
        name="proximity-bad"
        min={10}
        max={24}
        value={gap}
        valueLabel={`${gap}px`}
        onChange={(event) => setGap(Number(event.target.value))}
      />
      <span className={styles.label}>Email</span>
      <div style={{ height: gap }} />
      <input className={styles.input} defaultValue="ada@lovelace.dev" />
      <div style={{ height: gap }} />
      <span className={styles.label}>Company</span>
      <div style={{ height: gap }} />
      <input className={styles.input} defaultValue="Analytical Engine" />
    </DemoStack>
  )
}
