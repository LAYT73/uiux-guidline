import { useState } from 'react'
import { Star } from 'lucide-react'
import { DemoRange, DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function OpticalSizeGood() {
  const [size, setSize] = useState(16)

  return (
    <DemoStack>
      <DemoRange
        label="Type size"
        name="icon-size-good"
        min={12}
        max={22}
        value={size}
        valueLabel={`${size}px`}
        onChange={(event) => setSize(Number(event.target.value))}
      />
      <DemoRow>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: size }}>
          <Star size={size} />
          Starred
        </span>
      </DemoRow>
    </DemoStack>
  )
}

export function OpticalSizeBad() {
  const [size, setSize] = useState(16)

  return (
    <DemoStack>
      <DemoRange
        label="Type size"
        name="icon-size-bad"
        min={12}
        max={22}
        value={size}
        valueLabel={`${size}px / icon 28px`}
        onChange={(event) => setSize(Number(event.target.value))}
      />
      <DemoRow>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: size }}>
          <Star size={28} />
          Starred
        </span>
      </DemoRow>
      <p className={styles.meta}>The icon is a different object.</p>
    </DemoStack>
  )
}
