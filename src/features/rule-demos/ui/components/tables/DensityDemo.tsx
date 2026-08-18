import { useState } from 'react'
import { DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

const rows = [
  ['Design', 'In review'],
  ['API', 'Shipped'],
  ['QA', 'Blocked'],
]

export function DensityGood() {
  const [compact, setCompact] = useState(false)
  const pad = compact ? '4px 8px' : '10px 12px'

  return (
    <DemoStack>
      <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <input type="checkbox" checked={compact} onChange={(e) => setCompact(e.target.checked)} />
        Compact
      </label>
      <table className={styles.table}>
        <thead>
          <tr>
            <th style={{ padding: pad }}>Team</th>
            <th style={{ padding: pad }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([team, status]) => (
            <tr key={team}>
              <td style={{ padding: pad }}>{team}</td>
              <td style={{ padding: pad }}>{status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DemoStack>
  )
}

export function DensityBad() {
  return (
    <DemoStack>
      <table className={styles.table}>
        <thead>
          <tr>
            <th style={{ padding: '16px 20px' }}>Team</th>
            <th style={{ padding: '16px 20px' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '2px 4px' }}>Design</td>
            <td style={{ padding: '2px 4px', whiteSpace: 'normal' }}>
              In review with legal and two extra stakeholders who left comments
            </td>
          </tr>
          <tr>
            <td style={{ padding: '18px 8px' }}>API</td>
            <td style={{ padding: '18px 8px' }}>Shipped</td>
          </tr>
        </tbody>
      </table>
    </DemoStack>
  )
}
