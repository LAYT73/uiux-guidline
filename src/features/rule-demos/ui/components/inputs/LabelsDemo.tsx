import { useState } from 'react'
import { DemoStack } from '@/shared/ui/demo-kit'
import { Input } from '@/shared/ui/input'
import styles from '../../playground.module.css'

export function LabelsGood() {
  const [value, setValue] = useState('')
  return (
    <DemoStack>
      <Input
        label="Email"
        name="labels-good"
        hint="We send the receipt here."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </DemoStack>
  )
}

export function LabelsBad() {
  const [value, setValue] = useState('')
  return (
    <DemoStack>
      <input
        className={styles.input}
        placeholder="Email"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <p className={styles.meta}>{value ? 'The name vanished.' : 'The name lives only in the placeholder.'}</p>
    </DemoStack>
  )
}
