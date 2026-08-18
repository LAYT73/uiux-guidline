import { useId, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import { Code } from '@/shared/ui/code'
import { Input } from '@/shared/ui/input'
import styles from '../../playground.module.css'

const GOOD_MARKUP = `<input id="email" aria-invalid="true"
       aria-describedby="email-error">
<span id="email-error" role="alert">
  Enter an email with @.
</span>`

const BAD_MARKUP = `<p class="banner">Invalid form.</p>
<label for="email">Email</label>
<input id="email">`

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
      <Code label={t('demo.markup')} tone="do">
        {GOOD_MARKUP}
      </Code>
    </DemoStack>
  )
}

export function ErrorsBad() {
  const { t } = useTranslation()
  const fieldId = useId()
  const [value, setValue] = useState('')
  const [banner, setBanner] = useState(false)

  return (
    <DemoStack>
      {banner ? <p className={styles.warn}>{t('demo.invalidForm')}</p> : null}
      <div className={styles.field}>
        <label className={styles.label} htmlFor={fieldId}>
          {t('demo.email')}
        </label>
        <input
          id={fieldId}
          className={styles.input}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
      <div className={styles.spacer} />
      <Button onClick={() => setBanner(true)}>{t('demo.continue')}</Button>
      <Code label={t('demo.markup')} tone="dont">
        {BAD_MARKUP}
      </Code>
    </DemoStack>
  )
}
