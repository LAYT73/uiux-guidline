import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoStack } from '@/shared/ui/demo-kit'
import { Switch } from '@/shared/ui/switch'
import { Tag } from '@/shared/ui/tag'
import styles from '../../playground.module.css'

const rows = [
  ['design', 'inReview'],
  ['api', 'shipped'],
  ['qa', 'blocked'],
] as const

export function DensityGood() {
  const { t } = useTranslation()
  const [comfortable, setComfortable] = useState(true)
  const pad = comfortable
    ? 'var(--space-2) var(--space-3)'
    : 'var(--space-1) var(--space-2)'

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
              <td style={{ padding: pad }}>
                <Tag size="sm">{t(`demo.${status}`)}</Tag>
              </td>
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
            <td style={{ padding: '2px 4px' }}>{t('demo.inReviewLong')}</td>
          </tr>
          <tr>
            <td style={{ padding: '18px 8px' }}>{t('demo.api')}</td>
            <td style={{ padding: '18px 8px' }}>
              <Tag size="sm">{t('demo.shipped')}</Tag>
            </td>
          </tr>
        </tbody>
      </table>
    </DemoStack>
  )
}
