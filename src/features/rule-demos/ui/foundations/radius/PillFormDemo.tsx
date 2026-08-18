import { DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function PillFormGood() {
  return (
    <DemoStack>
      <input className={styles.input} defaultValue="Search projects" aria-label="Search projects" />
      <DemoRow>
        <span className={styles.chip} style={{ borderRadius: 999 }}>
          Design
        </span>
        <span className={styles.chip} style={{ borderRadius: 999 }}>
          Open
        </span>
      </DemoRow>
    </DemoStack>
  )
}

export function PillFormBad() {
  return (
    <DemoStack>
      <input
        className={styles.input}
        defaultValue="Search projects"
        aria-label="Search projects"
        style={{ borderRadius: 999, paddingInline: 18 }}
      />
      <DemoRow>
        <span className={styles.chip} style={{ borderRadius: 4 }}>
          Design
        </span>
        <span className={styles.chip} style={{ borderRadius: 4 }}>
          Open
        </span>
      </DemoRow>
    </DemoStack>
  )
}
