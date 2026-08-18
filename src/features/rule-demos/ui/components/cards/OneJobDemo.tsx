import { useState } from 'react'
import { Star } from 'lucide-react'
import { DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function OneJobGood() {
  const [open, setOpen] = useState(false)

  return (
    <DemoStack>
      <FakeCard>
        <button type="button" className={styles.chip} onClick={() => setOpen(true)} style={{ width: '100%' }}>
          Northwind redesign
        </button>
        <p className={styles.meta} style={{ marginTop: 8 }}>
          One job: open the project.
        </p>
      </FakeCard>
      {open ? <p className={styles.ok}>Opened project.</p> : null}
    </DemoStack>
  )
}

export function OneJobBad() {
  const [log, setLog] = useState('Click title, star, or body.')

  return (
    <DemoStack>
      <div onClick={() => setLog('Body click: preview')} style={{ cursor: 'pointer' }}>
      <FakeCard>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
          <button type="button" className={styles.chip} onClick={(e) => { e.stopPropagation(); setLog('Title click: rename') }}>
            Northwind
          </button>
          <button
            type="button"
            className={styles.chip}
            onClick={(e) => {
              e.stopPropagation()
              setLog('Star click: favorite')
            }}
          >
            <Star size={14} />
          </button>
        </div>
      </FakeCard>
      </div>
      <p className={styles.meta}>{log}</p>
    </DemoStack>
  )
}
