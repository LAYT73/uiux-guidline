import { useState } from 'react'
import { DemoRange, DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function PaddingGapGood() {
  const [pad, setPad] = useState(16)
  const [gap, setGap] = useState(8)

  return (
    <DemoStack>
      <DemoRange
        label="Padding"
        name="pad-good"
        min={8}
        max={28}
        value={pad}
        valueLabel={`${pad}px`}
        onChange={(event) => setPad(Number(event.target.value))}
      />
      <DemoRange
        label="Gap"
        name="gap-good"
        min={4}
        max={20}
        value={gap}
        valueLabel={`${gap}px`}
        onChange={(event) => setGap(Number(event.target.value))}
      />
      <FakeCard style={{ padding: pad, display: 'flex', flexDirection: 'column', gap }}>
        <input className={styles.input} defaultValue="First row" />
        <input className={styles.input} defaultValue="Second row" />
        <input className={styles.input} defaultValue="Third row" />
      </FakeCard>
    </DemoStack>
  )
}

export function PaddingGapBad() {
  const [margin, setMargin] = useState(14)

  return (
    <DemoStack>
      <DemoRange
        label="Each row's margin"
        name="pad-bad"
        min={4}
        max={24}
        value={margin}
        valueLabel={`${margin}px`}
        onChange={(event) => setMargin(Number(event.target.value))}
      />
      <FakeCard style={{ padding: 0 }}>
        <input className={styles.input} defaultValue="First row" style={{ margin: margin }} />
        <input className={styles.input} defaultValue="Second row" style={{ margin: margin }} />
        <input className={styles.input} defaultValue="Third row" style={{ margin: margin }} />
      </FakeCard>
    </DemoStack>
  )
}
