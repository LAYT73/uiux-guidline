import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import styles from '../../playground.module.css'

export function RequiredGood() {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [team, setTeam] = useState('')

  return (
    <DemoStack>
      <Input label={t('demo.nameRequired')} name="req-name" required value={name} onChange={(e) => setName(e.target.value)} />
      <Input label={t('demo.teamOptional')} name="req-team" value={team} onChange={(e) => setTeam(e.target.value)} />
    </DemoStack>
  )
}

export function RequiredBad() {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [error, setError] = useState(false)

  return (
    <DemoStack>
      <input
        className={styles.input}
        placeholder={t('demo.name')}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button
        onClick={() => {
          setError(!name)
        }}
      >
        {t('demo.submit')}
      </Button>
      {error ? <p className={styles.warn}>{t('demo.nameSurprise')}</p> : null}
    </DemoStack>
  )
}
