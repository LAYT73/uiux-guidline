import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoStack } from '@/shared/ui/demo-kit'
import { Code } from '@/shared/ui/code'
import { Input } from '@/shared/ui/input'
import styles from '../../playground.module.css'

const GOOD_MARKUP = `<label for="email">Email</label>
<input id="email" name="email">`

const BAD_MARKUP = `<input class="input"
       placeholder="Email">`

export function LabelsGood() {
  const { t } = useTranslation()
  const [value, setValue] = useState('')
  return (
    <DemoStack>
      <Input
        label={t('demo.email')}
        name="labels-good"
        hint={t('demo.emailHint')}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Code label={t('demo.markup')} tone="do">
        {GOOD_MARKUP}
      </Code>
    </DemoStack>
  )
}

export function LabelsBad() {
  const { t } = useTranslation()
  const [value, setValue] = useState('')
  return (
    <DemoStack>
      <input
        className={styles.input}
        placeholder={t('demo.email')}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <p className={styles.meta}>
        {value ? t('demo.nameVanished') : t('demo.nameInPlaceholder')}
      </p>
      <Code label={t('demo.markup')} tone="dont">
        {BAD_MARKUP}
      </Code>
    </DemoStack>
  )
}
