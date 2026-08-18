import { useState } from 'react'
import { DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

const items = ['Overview', 'Billing', 'Members']

export function CurrentGood() {
  const [current, setCurrent] = useState('Overview')

  return (
    <DemoStack>
      <nav aria-label="Settings">
        <ul style={{ display: 'flex', gap: 8, listStyle: 'none', margin: 0, padding: 0 }}>
          {items.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                aria-current={item === current ? 'page' : undefined}
                className={styles.chip}
                style={{
                  background: item === current ? 'var(--accent-soft)' : undefined,
                  color: item === current ? 'var(--accent)' : undefined,
                }}
                onClick={(event) => {
                  event.preventDefault()
                  setCurrent(item)
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </DemoStack>
  )
}

export function CurrentBad() {
  const [current, setCurrent] = useState('Overview')

  return (
    <DemoStack>
      <div style={{ display: 'flex', gap: 8 }}>
        {items.map((item) => (
          <span key={item} className={styles.chip} onClick={() => setCurrent(item)}>
            {item}
          </span>
        ))}
      </div>
      <p className={styles.meta}>Clicked {current}, but nothing looks current.</p>
    </DemoStack>
  )
}
