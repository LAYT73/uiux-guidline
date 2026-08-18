import { useState } from 'react'
import { DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import styles from '../../playground.module.css'

export function RequiredGood() {
  const [name, setName] = useState('')
  const [team, setTeam] = useState('')

  return (
    <DemoStack>
      <Input label="Name (required)" name="req-name" required value={name} onChange={(e) => setName(e.target.value)} />
      <Input label="Team (optional)" name="req-team" value={team} onChange={(e) => setTeam(e.target.value)} />
    </DemoStack>
  )
}

export function RequiredBad() {
  const [name, setName] = useState('')
  const [error, setError] = useState(false)

  return (
    <DemoStack>
      <input
        className={styles.input}
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button
        onClick={() => {
          setError(!name)
        }}
      >
        Submit
      </Button>
      {error ? <p className={styles.warn}>Name was required. Surprise.</p> : null}
    </DemoStack>
  )
}
