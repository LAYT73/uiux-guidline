import { useState } from 'react'
import { DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function ElevationGood() {
  const [lifted, setLifted] = useState(false)

  return (
    <DemoStack>
      <button type="button" className={styles.chip} onClick={() => setLifted((v) => !v)}>
        {lifted ? 'Rest' : 'Hover / lift'}
      </button>
      <FakeCard
        style={{
          boxShadow: lifted ? 'var(--shadow-hover)' : 'var(--shadow-rest)',
          transform: lifted ? 'translateY(-2px)' : undefined,
          transition: 'box-shadow var(--duration-med) var(--ease-out), transform var(--duration-med) var(--ease-out)',
        }}
      >
        Project card
      </FakeCard>
    </DemoStack>
  )
}

export function ElevationBad() {
  return (
    <DemoStack>
      <FakeCard
        style={{
          boxShadow: '0 28px 60px rgba(0,0,0,.55)',
          marginBottom: 12,
        }}
      >
        List row
      </FakeCard>
      <FakeCard style={{ boxShadow: '0 28px 60px rgba(0,0,0,.55)' }}>Another list row</FakeCard>
      <p className={styles.meta}>Both claim to be a modal.</p>
    </DemoStack>
  )
}
