import { DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import styles from '../../playground.module.css'

export function VsLinkGood() {
  return (
    <DemoStack>
      <DemoRow>
        <Button
          onClick={() => {
            window.alert('Saved locally in this demo.')
          }}
        >
          Save
        </Button>
        <a href="https://www.w3.org/WAI/" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>
          Accessibility docs
        </a>
      </DemoRow>
    </DemoStack>
  )
}

export function VsLinkBad() {
  return (
    <DemoStack>
      <DemoRow>
        <span
          className={styles.chip}
          onClick={() => {
            window.alert('This is not a link or a button.')
          }}
        >
          Save / docs
        </span>
      </DemoRow>
      <p className={styles.meta}>A span. No Enter key, no open-in-new-tab.</p>
    </DemoStack>
  )
}
