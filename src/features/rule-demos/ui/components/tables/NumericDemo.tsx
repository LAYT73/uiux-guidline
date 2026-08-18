import { DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

const rows = [
  ['Northwind', 9],
  ['Aurora', 120],
  ['Harbor', 1280],
]

export function NumericGood() {
  return (
    <DemoStack>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Project</th>
            <th className={styles.num}>Hours</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([name, hours]) => (
            <tr key={String(name)}>
              <td>{name}</td>
              <td className={styles.num}>{hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DemoStack>
  )
}

export function NumericBad() {
  return (
    <DemoStack>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Project</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([name, hours]) => (
            <tr key={String(name)}>
              <td>{name}</td>
              <td>{hours} hrs</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DemoStack>
  )
}
