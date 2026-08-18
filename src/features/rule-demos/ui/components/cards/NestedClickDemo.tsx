import { useState } from 'react'
import { MoreHorizontal } from 'lucide-react'
import { DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function NestedClickGood() {
  const [msg, setMsg] = useState('Card opens. Menu is separate.')

  return (
    <DemoStack>
      <FakeCard style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
        <button type="button" className={styles.chip} onClick={() => setMsg('Opened project')}>
          Aurora kit
        </button>
        <button
          type="button"
          className={styles.chip}
          aria-label="Project menu"
          onClick={() => setMsg('Opened menu')}
        >
          <MoreHorizontal size={16} />
        </button>
      </FakeCard>
      <p className={styles.meta}>{msg}</p>
    </DemoStack>
  )
}

export function NestedClickBad() {
  return (
    <DemoStack>
      <a
        href="#project"
        onClick={(event) => event.preventDefault()}
        style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
      >
        <FakeCard>
          <button type="button" className={styles.chip}>
            Nested button inside a link
          </button>
        </FakeCard>
      </a>
      <p className={styles.meta}>Invalid nesting. Tab order and announcement fight.</p>
    </DemoStack>
  )
}
