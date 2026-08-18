import { DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function LandmarksGood() {
  return (
    <DemoStack>
      <nav aria-label="Product">
        <ul style={{ display: 'flex', gap: 8, listStyle: 'none', margin: 0, padding: 0 }}>
          <li>
            <a href="#home" className={styles.chip} onClick={(e) => e.preventDefault()}>
              Home
            </a>
          </li>
          <li>
            <a href="#work" className={styles.chip} onClick={(e) => e.preventDefault()}>
              Work
            </a>
          </li>
        </ul>
      </nav>
      <p className={styles.meta}>A named nav landmark wrapping a list.</p>
    </DemoStack>
  )
}

export function LandmarksBad() {
  return (
    <DemoStack>
      <div style={{ display: 'flex', gap: 12 }}>
        <span className={styles.chip}>Home</span>
        <span className={styles.chip}>Work</span>
      </div>
      <p className={styles.meta}>Div soup. No nav, no list, no names.</p>
    </DemoStack>
  )
}
