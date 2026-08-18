import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import styles from '../../playground.module.css'

export function ErrorsGood() {
  const { t } = useTranslation()
  const [value, setValue] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const error = submitted && !value.includes('@') ? t('demo.enterEmail') : undefined

  return (
    <DemoStack>
      <Input
        label={t('demo.email')}
        name="errors-good"
        value={value}
        error={error}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button onClick={() => setSubmitted(true)}>{t('demo.continue')}</Button>
    </DemoStack>
  )
}

export function ErrorsBad() {
  const { t } = useTranslation()
  const [value, setValue] = useState('')
  const [banner, setBanner] = useState(false)

  return (
    <DemoStack>
      {banner ? <p className={styles.warn}>{t('demo.invalidForm')}</p> : null}
      <DemoRow>
        <input
          className={styles.input}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          aria-label={t('demo.email')}
        />
      </DemoRow>
      <Button onClick={() => setBanner(true)}>{t('demo.continue')}</Button>
    </DemoStack>
  )
}
