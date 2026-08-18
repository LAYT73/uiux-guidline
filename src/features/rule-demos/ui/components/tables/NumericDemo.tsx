import { useTranslation } from 'react-i18next'
import { DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

const rows = [
  ['northwind', 9],
  ['aurora', 120],
  ['harbor', 1280],
] as const

export function NumericGood() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>{t('demo.project')}</th>
            <th className={styles.num}>{t('demo.hours')}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([name, hours]) => (
            <tr key={name}>
              <td>{t(`demo.${name}`)}</td>
              <td className={styles.num}>{hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DemoStack>
  )
}

export function NumericBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>{t('demo.project')}</th>
            <th>{t('demo.hours')}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([name, hours]) => (
            <tr key={name}>
              <td>{t(`demo.${name}`)}</td>
              <td>
                {hours} {t('demo.hours')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </DemoStack>
  )
}
