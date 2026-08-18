import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoStack } from '@/shared/ui/demo-kit'
import { Switch } from '@/shared/ui/switch'
import styles from '../../playground.module.css'

const rows = [
  ['design', 'inReview'],
  ['api', 'shipped'],
  ['qa', 'blocked'],
] as const

export function DensityGood() {
  const { t } = useTranslation()
  const [comfortable, setComfortable] = useState(true)
  const pad = comfortable ? '10px 12px' : '4px 8px'

  return (
    <DemoStack>
      <Switch
        checked={comfortable}
        label={t('demo.comfortableDensity')}
        onChange={setComfortable}
      />
      <table className={styles.table}>
        <thead>
          <tr>
            <th style={{ padding: pad }}>{t('demo.team')}</th>
            <th style={{ padding: pad }}>{t('demo.status')}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([team, status]) => (
            <tr key={team}>
              <td style={{ padding: pad }}>{t(`demo.${team}`)}</td>
              <td style={{ padding: pad }}>{t(`demo.${status}`)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DemoStack>
  )
}

export function DensityBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <table className={styles.table}>
        <thead>
          <tr>
            <th style={{ padding: '16px 20px' }}>{t('demo.team')}</th>
            <th style={{ padding: '16px 20px' }}>{t('demo.status')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '2px 4px' }}>{t('demo.design')}</td>
            <td style={{ padding: '2px 4px', whiteSpace: 'normal' }}>
              {t('demo.inReviewLong')}
            </td>
          </tr>
          <tr>
            <td style={{ padding: '18px 8px' }}>{t('demo.api')}</td>
            <td style={{ padding: '18px 8px' }}>{t('demo.shipped')}</td>
          </tr>
        </tbody>
      </table>
    </DemoStack>
  )
}
