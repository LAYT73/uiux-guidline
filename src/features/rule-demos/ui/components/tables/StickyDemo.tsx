import { useTranslation } from 'react-i18next'
import { DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

const rows = Array.from({ length: 12 }, (_, i) => [i + 1, 8 + i * 3] as const)

export function StickyGood() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <div className={styles.scroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th style={{ position: 'sticky', top: 0, background: 'var(--bg-elevated)' }}>{t('demo.sprint')}</th>
              <th
                className={styles.num}
                style={{ position: 'sticky', top: 0, background: 'var(--bg-elevated)' }}
              >
                {t('demo.points')}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([n, pts]) => (
              <tr key={n}>
                <td>
                  {t('demo.sprint')} {n}
                </td>
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
  const { t } = useTranslation()
  return (
    <DemoStack>
      <div className={styles.scroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>{t('demo.sprint')}</th>
              <th className={styles.num}>{t('demo.points')}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([n, pts]) => (
              <tr key={n}>
                <td>
                  {t('demo.sprint')} {n}
                </td>
                <td className={styles.num}>{pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DemoStack>
  )
}
