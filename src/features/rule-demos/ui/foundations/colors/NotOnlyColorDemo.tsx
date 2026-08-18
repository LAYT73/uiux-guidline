import { useId, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Check, CircleAlert } from 'lucide-react'
import { DemoStack } from '@/shared/ui/demo-kit'
import { Badge } from '@/shared/ui/badge'
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
        <Badge tone="dont">
          <CircleAlert size={12} aria-hidden />
          {t('demo.errorWithIcon')}
        </Badge>
      ) : (
        <Badge tone="do">
          <Check size={12} aria-hidden />
          {t('demo.saved')}
        </Badge>
      )}
    </DemoStack>
  )
}

export function NotOnlyColorBad() {
  const { t } = useTranslation()
  const fieldId = useId()
  const [value, setValue] = useState('ada')
  const invalid = !value.includes('@')

  return (
    <DemoStack>
      <div className={styles.field}>
        <label className={styles.label} htmlFor={fieldId}>
          {t('demo.email')}
        </label>
        <input
          id={fieldId}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className={styles.input}
          style={{ borderColor: invalid ? 'var(--dont)' : undefined }}
        />
      </div>
      <Button disabled={invalid}>{t('demo.continue')}</Button>
      <p className={styles.meta}>{t('demo.errorColorOnly')}</p>
    </DemoStack>
  )
}
