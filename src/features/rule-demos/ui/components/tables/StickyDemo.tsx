import { DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

const rows = Array.from({ length: 12 }, (_, i) => [`Sprint ${i + 1}`, 8 + i * 3])

export function StickyGood() {
  return (
    <DemoStack>
      <div className={styles.scroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th style={{ position: 'sticky', top: 0, background: 'var(--bg-elevated)' }}>Sprint</th>
              <th
                className={styles.num}
                style={{ position: 'sticky', top: 0, background: 'var(--bg-elevated)' }}
              >
                Points
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([name, pts]) => (
              <tr key={String(name)}>
                <td>{name}</td>
                <td className={styles.num}>{pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DemoStack>
  )
}

export function StickyBad() {
  return (
    <DemoStack>
      <div className={styles.scroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Sprint</th>
              <th className={styles.num}>Points</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([name, pts]) => (
              <tr key={String(name)}>
                <td>{name}</td>
                <td className={styles.num}>{pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DemoStack>
  )
}
