import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CircleAlert } from 'lucide-react'
import { DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import styles from '../../playground.module.css'

export function NotOnlyColorGood() {
  const { t } = useTranslation()
  const [value, setValue] = useState('ada')
  const invalid = !value.includes('@')

  return (
    <DemoStack>
      <Input
        label={t('demo.email')}
        name="email-good"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        error={invalid ? t('demo.enterEmail') : undefined}
      />
      {invalid ? (
        <p className={styles.warn} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <CircleAlert size={16} aria-hidden />
          {t('demo.errorWithIcon')}
        </p>
      ) : (
        <p className={styles.ok}>{t('demo.saved')}</p>
      )}
    </DemoStack>
  )
}

export function NotOnlyColorBad() {
  const { t } = useTranslation()
  const [value, setValue] = useState('ada')
  const invalid = !value.includes('@')

  return (
    <DemoStack>
      <input
        aria-label={t('demo.email')}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className={styles.input}
        style={{ borderColor: invalid ? '#e11' : undefined }}
      />
      <Button disabled={invalid}>{t('demo.continue')}</Button>
      <p className={styles.meta}>{t('demo.errorColorOnly')}</p>
    </DemoStack>
  )
}
