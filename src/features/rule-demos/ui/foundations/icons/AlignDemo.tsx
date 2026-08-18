import { Inbox } from 'lucide-react'
import { DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function AlignGood() {
  return (
    <DemoStack>
      <button
        type="button"
        className={styles.chip}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 8, lineHeight: 1 }}
      >
        <Inbox size={16} style={{ display: 'block' }} />
        Inbox
      </button>
    </DemoStack>
  )
}

export function AlignBad() {
  return (
    <DemoStack>
      <button type="button" className={styles.chip} style={{ display: 'inline-block', paddingTop: 10 }}>
        <Inbox size={16} style={{ display: 'inline', verticalAlign: 'sub', marginRight: 10 }} />
        Inbox
      </button>
      <p className={styles.meta}>The glyph sits below the word.</p>
    </DemoStack>
  )
}
