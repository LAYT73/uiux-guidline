import { useTranslation } from 'react-i18next'
import { DemoStack } from '@/shared/ui/demo-kit'
import { Code } from '@/shared/ui/code'
import { Tag } from '@/shared/ui/tag'
import styles from '../../playground.module.css'

const GOOD_MARKUP = `<td class="num">1280</td>

.num {
  text-align: right;
  font-variant-numeric: tabular-nums;
}`

const BAD_MARKUP = `<th>Hours</th>
<td>1280 Hours</td>
<td>9 Hours</td>`

const rows = [
  ['northwind', 'shipped', 9],
  ['aurora', 'inReview', 120],
  ['harbor', 'blocked', 1280],
] as const

export function NumericGood() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>{t('demo.project')}</th>
            <th>{t('demo.status')}</th>
            <th className={styles.num}>{t('demo.hours')}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([name, status, hours]) => (
            <tr key={name}>
              <td>{t(`demo.${name}`)}</td>
              <td>
                <Tag size="sm">{t(`demo.${status}`)}</Tag>
              </td>
              <td className={styles.num}>{hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Code label={t('demo.markup')} tone="do">
        {GOOD_MARKUP}
      </Code>
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
            <th>{t('demo.status')}</th>
            <th>{t('demo.hours')}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([name, status, hours]) => (
            <tr key={name}>
              <td>{t(`demo.${name}`)}</td>
              <td>
                <Tag size="sm">{t(`demo.${status}`)}</Tag>
              </td>
              <td>
                {hours} {t('demo.hours')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Code label={t('demo.markup')} tone="dont">
        {BAD_MARKUP}
      </Code>
    </DemoStack>
  )
}
