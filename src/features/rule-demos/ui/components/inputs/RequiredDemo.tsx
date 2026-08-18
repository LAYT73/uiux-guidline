import { useId, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import { Code } from '@/shared/ui/code'
import { Input } from '@/shared/ui/input'
import styles from '../../playground.module.css'

const GOOD_MARKUP = `<label for="name">
  Name (required)
</label>
<input id="name" required>`

const BAD_MARKUP = `<label for="name">Name</label>
<input id="name">`

export function RequiredGood() {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [team, setTeam] = useState('')

  return (
    <DemoStack>
      <Input
        label={t('demo.nameRequired')}
        name="req-name"
        required
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Input
        label={t('demo.teamOptional')}
        name="req-team"
        value={team}
        onChange={(event) => setTeam(event.target.value)}
      />
      <Code label={t('demo.markup')} tone="do">
        {GOOD_MARKUP}
      </Code>
    </DemoStack>
  )
}

export function RequiredBad() {
  const { t } = useTranslation()
  const fieldId = useId()
  const [name, setName] = useState('')
  const [error, setError] = useState(false)

  return (
    <DemoStack>
      <div className={styles.field}>
        <label className={styles.label} htmlFor={fieldId}>
          {t('demo.name')}
        </label>
        <input
          id={fieldId}
          className={styles.input}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <Button onClick={() => setError(!name)}>{t('demo.submit')}</Button>
      {error ? <p className={styles.warn}>{t('demo.nameSurprise')}</p> : null}
      <Code label={t('demo.markup')} tone="dont">
        {BAD_MARKUP}
      </Code>
    </DemoStack>
  )
}
