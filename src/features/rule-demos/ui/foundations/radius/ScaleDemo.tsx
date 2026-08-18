import { useState } from 'react'
import { DemoRange, DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

const SCALE = [6, 10, 16, 24]

export function RadiusScaleGood() {
  const [index, setIndex] = useState(1)
  const radius = SCALE[index] ?? 10

  return (
    <DemoStack>
      <DemoRange
        label="Radius step"
        name="radius-scale-good"
        min={0}
        max={3}
        value={index}
        valueLabel={`${radius}px`}
        onChange={(event) => setIndex(Number(event.target.value))}
      />
      <DemoRow>
        <button type="button" className={styles.chip} style={{ borderRadius: radius }}>
          Save
        </button>
        <button type="button" className={styles.chip} style={{ borderRadius: radius }}>
          Filter
        </button>
        <span className={styles.tile} style={{ borderRadius: radius }} />
      </DemoRow>
    </DemoStack>
  )
}

export function RadiusScaleBad() {
  return (
    <DemoStack>
      <p className={styles.meta}>Each control picked its own corner.</p>
      <DemoRow>
        <button type="button" className={styles.chip} style={{ borderRadius: 3 }}>
          Save
        </button>
        <button type="button" className={styles.chip} style={{ borderRadius: 18 }}>
          Filter
        </button>
        <span className={styles.tile} style={{ borderRadius: 28 }} />
      </DemoRow>
    </DemoStack>
  )
}
