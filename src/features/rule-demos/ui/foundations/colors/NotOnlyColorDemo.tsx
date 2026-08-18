import { useState } from 'react'
import { CircleAlert } from 'lucide-react'
import { DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import styles from '../../playground.module.css'

export function NotOnlyColorGood() {
  const [value, setValue] = useState('ada')
  const invalid = !value.includes('@')

  return (
    <DemoStack>
      <Input
        label="Email"
        name="email-good"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        error={invalid ? 'Enter a valid email.' : undefined}
      />
      {invalid ? (
        <p className={styles.warn} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <CircleAlert size={16} aria-hidden />
          Error — missing @
        </p>
      ) : (
        <p className={styles.ok}>Looks valid.</p>
      )}
    </DemoStack>
  )
}

export function NotOnlyColorBad() {
  const [value, setValue] = useState('ada')
  const invalid = !value.includes('@')

  return (
    <DemoStack>
      <input
        aria-label="Email"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className={styles.input}
        style={{ borderColor: invalid ? '#e11' : undefined }}
      />
      <Button disabled={invalid}>Continue</Button>
      <p className={styles.meta}>If you cannot see the red border, the form just… refuses.</p>
    </DemoStack>
  )
}
