import { useState } from 'react'
import { DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function VsBorderGood() {
  const [lifted, setLifted] = useState(false)

  return (
    <DemoStack>
      <button type="button" className={styles.chip} onClick={() => setLifted((v) => !v)}>
        {lifted ? 'Show rest (border)' : 'Show lift (shadow)'}
      </button>
      <FakeCard
        style={{
          border: lifted ? '1px solid transparent' : '1px solid var(--border)',
          boxShadow: lifted ? 'var(--shadow-modal)' : 'none',
        }}
      >
        Menu surface
      </FakeCard>
    </DemoStack>
  )
}

export function VsBorderBad() {
  return (
    <DemoStack>
      <FakeCard
        style={{
          border: '2px solid var(--border-strong)',
          boxShadow: 'var(--shadow-modal), inset 0 1px 8px rgba(0,0,0,.25)',
        }}
      >
        Resting card with every effect at once
      </FakeCard>
      <p className={styles.meta}>The edge is louder than the content.</p>
    </DemoStack>
  )
}
