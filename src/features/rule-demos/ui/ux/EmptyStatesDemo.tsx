import { useState } from 'react'
import { DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import styles from '../playground.module.css'

export function ExplainActionGood() {
  const [created, setCreated] = useState(false)
  return (
    <DemoStack>
      {created ? (
        <p className={styles.ok}>Project created.</p>
      ) : (
        <FakeCard>
          <p>No projects yet. Start with a template — it takes a minute.</p>
          <div style={{ marginTop: 12 }}>
            <Button onClick={() => setCreated(true)}>New project</Button>
          </div>
        </FakeCard>
      )}
    </DemoStack>
  )
}

export function ExplainActionBad() {
  return (
    <DemoStack>
      <FakeCard>
        <p className={styles.meta}>No data</p>
      </FakeCard>
    </DemoStack>
  )
}

export function DeadEndGood() {
  const [query, setQuery] = useState('zebra invoices')
  return (
    <DemoStack>
      <input className={styles.input} value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Search" />
      {query ? (
        <>
          <p className={styles.meta}>No matches for “{query}”.</p>
          <Button variant="secondary" onClick={() => setQuery('')}>
            Clear search
          </Button>
        </>
      ) : (
        <p className={styles.ok}>Showing all invoices.</p>
      )}
    </DemoStack>
  )
}

export function DeadEndBad() {
  return (
    <DemoStack>
      <input className={styles.input} defaultValue="zebra invoices" aria-label="Search" />
      <p className={styles.meta}>0 results</p>
    </DemoStack>
  )
}
