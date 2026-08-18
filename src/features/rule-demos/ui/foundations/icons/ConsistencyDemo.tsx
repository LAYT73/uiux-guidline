import { useState } from 'react'
import { Bell, Home, Search, User } from 'lucide-react'
import { DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

const items = [
  { id: 'home', Icon: Home, label: 'Home' },
  { id: 'search', Icon: Search, label: 'Search' },
  { id: 'alerts', Icon: Bell, label: 'Alerts' },
  { id: 'you', Icon: User, label: 'You' },
]

export function ConsistencyGood() {
  const [selected, setSelected] = useState('home')

  return (
    <DemoStack>
      <DemoRow>
        {items.map(({ id, Icon, label }) => (
          <button
            key={id}
            type="button"
            className={styles.chip}
            aria-pressed={selected === id}
            onClick={() => setSelected(id)}
          >
            <Icon size={16} fill={selected === id ? 'currentColor' : 'none'} />
            {label}
          </button>
        ))}
      </DemoRow>
      <p className={styles.meta}>Fill means selected — not a different icon set.</p>
    </DemoStack>
  )
}

export function ConsistencyBad() {
  return (
    <DemoStack>
      <DemoRow>
        <button type="button" className={styles.chip}>
          <Home size={16} />
          Home
        </button>
        <button type="button" className={styles.chip}>
          <Search size={16} fill="currentColor" />
          Search
        </button>
        <button type="button" className={styles.chip}>
          <Bell size={16} strokeWidth={1} />
          Alerts
        </button>
        <button type="button" className={styles.chip}>
          <User size={20} />
          You
        </button>
      </DemoRow>
    </DemoStack>
  )
}
