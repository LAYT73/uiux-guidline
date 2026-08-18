import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoStack } from '@/shared/ui/demo-kit'
import { Select } from '@/shared/ui/select'
import { Switch } from '@/shared/ui/switch'
import styles from '../../playground.module.css'

const STATUSES = ['draft', 'review', 'published', 'archived', 'scheduled'] as const

export function RightControlGood() {
  const { t } = useTranslation()
  const [on, setOn] = useState(true)
  const [status, setStatus] = useState<string>('review')

  return (
    <DemoStack>
      <Switch checked={on} label={t('demo.publicProfile')} onChange={setOn} />
      <p className={styles.meta}>{on ? t('demo.onState') : t('demo.offState')}</p>
      <Select
        label={t('demo.chooseStatus')}
        name="right-control-status"
        hint={t('demo.fiveStatusesSelect')}
        value={status}
        onChange={(event) => setStatus(event.target.value)}
      >
        {STATUSES.map((option) => (
          <option key={option} value={option}>
            {t(`demo.${option}`)}
          </option>
        ))}
      </Select>
    </DemoStack>
  )
}

export function RightControlBad() {
  const { t } = useTranslation()
  const [value, setValue] = useState('yes')

  return (
    <DemoStack>
      <label className={styles.field}>
        <span className={styles.label}>{t('demo.publicProfile')}</span>
        <select
          className={styles.select}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        >
          <option value="yes">{t('demo.yes')}</option>
          <option value="no">{t('demo.no')}</option>
        </select>
      </label>
    </DemoStack>
  )
}
