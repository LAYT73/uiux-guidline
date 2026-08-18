import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import styles from '../playground.module.css'

export function ImmediateGood() {
  const { t } = useTranslation()
  const [phase, setPhase] = useState<'idle' | 'saving' | 'saved'>('idle')
  return (
    <DemoStack>
      <Button
        disabled={phase === 'saving'}
        onClick={() => {
          setPhase('saving')
          window.setTimeout(() => setPhase('saved'), 800)
        }}
      >
        {phase === 'saving' ? t('demo.saving') : phase === 'saved' ? t('demo.saved') : t('demo.save')}
      </Button>
    </DemoStack>
  )
}

export function ImmediateBad() {
  const { t } = useTranslation()
  const [n, setN] = useState(0)
  return (
    <DemoStack>
      <Button
        onClick={() => {
          window.setTimeout(() => setN((v) => v + 1), 1200)
        }}
      >
        {t('demo.save')}
      </Button>
      <p className={styles.meta}>{t('demo.clicksRecorded', { n })}</p>
    </DemoStack>
  )
}

export function SilentFailGood() {
  const { t } = useTranslation()
  const [error, setError] = useState(false)
  return (
    <DemoStack>
      <Button
        onClick={() => setError(true)}
      >
        {t('demo.saveToServer')}
      </Button>
      {error ? (
        <p className={styles.warn}>
          {t('demo.requestFailed')}{' '}
          <button type="button" className={styles.chip} onClick={() => setError(false)}>
            {t('demo.retry')}
          </button>
        </p>
      ) : null}
    </DemoStack>
  )
}

export function SilentFailBad() {
  const { t } = useTranslation()
  const [busy, setBusy] = useState(false)
  return (
    <DemoStack>
      <Button
        onClick={() => {
          setBusy(true)
          window.setTimeout(() => setBusy(false), 600)
        }}
      >
        {busy ? t('demo.saving') : t('demo.saveToServer')}
      </Button>
      <p className={styles.meta}>{t('demo.silentFail')}</p>
    </DemoStack>
  )
}
