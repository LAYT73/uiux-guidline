import { useState } from 'react'
import { DemoRange, DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function ProportionalGood() {
  const [size, setSize] = useState(72)

  return (
    <DemoStack>
      <DemoRange
        label="Surface size"
        name="radius-prop-good"
        min={40}
        max={140}
        value={size}
        valueLabel={`${size}px`}
        onChange={(event) => setSize(Number(event.target.value))}
      />
      <FakeCard
        style={{
          width: size,
          height: size * 0.7,
          borderRadius: Math.round(size * 0.12),
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <button
          type="button"
          className={styles.chip}
          style={{ borderRadius: Math.max(6, Math.round(size * 0.08)) }}
        >
          Action
        </button>
      </FakeCard>
    </DemoStack>
  )
}

export function ProportionalBad() {
  const [size, setSize] = useState(72)

  return (
    <DemoStack>
      <DemoRange
        label="Surface size"
        name="radius-prop-bad"
        min={40}
        max={140}
        value={size}
        valueLabel={`${size}px`}
        onChange={(event) => setSize(Number(event.target.value))}
      />
      <FakeCard
        style={{
          width: size,
          height: size * 0.7,
          borderRadius: size > 90 ? 4 : 40,
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <button type="button" className={styles.chip} style={{ borderRadius: 999 }}>
          Action
        </button>
      </FakeCard>
    </DemoStack>
  )
}
