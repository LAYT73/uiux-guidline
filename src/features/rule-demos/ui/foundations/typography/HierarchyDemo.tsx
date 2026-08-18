import { useState } from 'react'
import { DemoRange, DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function HierarchyGood() {
  const [display, setDisplay] = useState(28)

  return (
    <DemoStack>
      <DemoRange
        label="Display size"
        name="type-h-good"
        min={22}
        max={40}
        value={display}
        valueLabel={`${display}px`}
        onChange={(event) => setDisplay(Number(event.target.value))}
      />
      <div>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: display, lineHeight: 1.15 }}>Invoice</p>
        <p className={styles.meta} style={{ marginTop: 6 }}>
          Due 12 March
        </p>
        <p style={{ marginTop: 10, fontSize: 14, lineHeight: 1.5 }}>
          Pay the remaining balance before the reminder turns into a late fee.
        </p>
      </div>
    </DemoStack>
  )
}

export function HierarchyBad() {
  const [size, setSize] = useState(16)

  return (
    <DemoStack>
      <DemoRange
        label="Everything"
        name="type-h-bad"
        min={14}
        max={20}
        value={size}
        valueLabel={`${size}px`}
        onChange={(event) => setSize(Number(event.target.value))}
      />
      <div style={{ fontSize: size, fontWeight: 500, lineHeight: 1.4 }}>
        <p>Invoice</p>
        <p>Due 12 March</p>
        <p>Pay the remaining balance before the reminder turns into a late fee.</p>
      </div>
    </DemoStack>
  )
}
