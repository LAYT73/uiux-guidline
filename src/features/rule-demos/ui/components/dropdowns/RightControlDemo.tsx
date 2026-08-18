import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoStack } from '@/shared/ui/demo-kit'
import { Switch } from '@/shared/ui/switch'
import styles from '../../playground.module.css'

export function RightControlGood() {
  const { t } = useTranslation()
  const [on, setOn] = useState(true)

  return (
    <DemoStack>
      <Switch checked={on} label={t('demo.publicProfile')} onChange={setOn} />
      <p className={styles.meta}>{on ? t('demo.onState') : t('demo.offState')}</p>
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
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="yes">{t('demo.yes')}</option>
          <option value="no">{t('demo.no')}</option>
        </select>
      </label>
    </DemoStack>
  )
}
