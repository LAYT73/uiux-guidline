import { Trash2 } from 'lucide-react'
import { DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import styles from '../playground.module.css'

export function FocusGood() {
  return (
    <DemoStack>
      <p className={styles.meta}>Tab through. The ring uses the token focus color.</p>
      <DemoRow>
        <Button variant="secondary">One</Button>
        <Button>Two</Button>
      </DemoRow>
    </DemoStack>
  )
}

export function FocusBad() {
  return (
    <DemoStack>
      <p className={styles.meta}>outline: none. Tab and guess.</p>
      <button
        type="button"
        className={styles.chip}
        style={{ outline: 'none' }}
        onMouseDown={(e) => e.preventDefault()}
      >
        Invisible focus
      </button>
    </DemoStack>
  )
}

export function IconNameGood() {
  return (
    <DemoStack>
      <button type="button" className={styles.chip} aria-label="Delete draft" onClick={() => undefined}>
        <Trash2 size={16} />
      </button>
      <p className={styles.meta}>Announces “Delete draft”.</p>
    </DemoStack>
  )
}

export function IconNameBad() {
  return (
    <DemoStack>
      <button type="button" className={styles.chip} onClick={() => undefined}>
        <Trash2 size={16} />
      </button>
      <p className={styles.meta}>No accessible name.</p>
    </DemoStack>
  )
}

export function SkipLinkGood() {
  return (
    <DemoStack>
      <p className={styles.meta}>
        This app already ships a skip link in the shell. Tab from the top of the page to try it.
      </p>
    </DemoStack>
  )
}

export function SkipLinkBad() {
  return (
    <DemoStack>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {Array.from({ length: 8 }, (_, i) => (
          <a key={i} href={`#n${i}`} className={styles.chip} onClick={(e) => e.preventDefault()}>
            Nav {i + 1}
          </a>
        ))}
      </div>
      <p className={styles.meta}>Eight links before content. No skip.</p>
    </DemoStack>
  )
}
