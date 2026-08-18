import { useState } from 'react'
import { DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function RightControlGood() {
  const [on, setOn] = useState(true)

  return (
    <DemoStack>
      <label style={{ display: 'flex', alignItems: 'center', gap: 10, minHeight: 44 }}>
        <input type="checkbox" checked={on} onChange={(e) => setOn(e.target.checked)} />
        Public profile
      </label>
      <p className={styles.meta}>{on ? 'On' : 'Off'} — no extra click to see it.</p>
    </DemoStack>
  )
}

export function RightControlBad() {
  const [value, setValue] = useState('yes')

  return (
    <DemoStack>
      <label className={styles.field}>
        <span className={styles.label}>Public profile</span>
        <select
          className={styles.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
    </DemoStack>
  )
}
