import { useState } from 'react'
import { DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import styles from '../../playground.module.css'

export function ErrorsGood() {
  const [value, setValue] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const error = submitted && !value.includes('@') ? 'Enter an email with @.' : undefined

  return (
    <DemoStack>
      <Input
        label="Email"
        name="errors-good"
        value={value}
        error={error}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button onClick={() => setSubmitted(true)}>Continue</Button>
    </DemoStack>
  )
}

export function ErrorsBad() {
  const [value, setValue] = useState('')
  const [banner, setBanner] = useState(false)

  return (
    <DemoStack>
      {banner ? <p className={styles.warn}>Invalid form.</p> : null}
      <DemoRow>
        <input
          className={styles.input}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          aria-label="Email"
        />
      </DemoRow>
      <Button onClick={() => setBanner(true)}>Continue</Button>
    </DemoStack>
  )
}
