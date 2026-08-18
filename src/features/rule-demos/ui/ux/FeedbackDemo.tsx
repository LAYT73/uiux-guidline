import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import { Callout } from '@/shared/ui/callout'
import { Spinner } from '@/shared/ui/spinner'
import styles from '../playground.module.css'

export function ImmediateGood() {
  const { t } = useTranslation()
  const [phase, setPhase] = useState<'idle' | 'saving' | 'saved'>('idle')
  return (
    <DemoStack>
      <Button
        disabled={phase === 'saving'}
        aria-busy={phase === 'saving'}
        onClick={() => {
          setPhase('saving')
          window.setTimeout(() => setPhase('saved'), 800)
        }}
      >
        {phase === 'saving' ? (
          <span className={styles.inlineIcon}>
            <Spinner size={14} />
            {t('demo.saving')}
          </span>
        ) : phase === 'saved' ? (
          t('demo.saved')
        ) : (
          t('demo.save')
        )}
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
  const [phase, setPhase] = useState<'idle' | 'saving' | 'failed'>('idle')

  const send = () => {
    setPhase('saving')
    window.setTimeout(() => setPhase('failed'), 600)
  }

  return (
    <DemoStack>
      <Button disabled={phase === 'saving'} aria-busy={phase === 'saving'} onClick={send}>
        {phase === 'saving' ? (
          <span className={styles.inlineIcon}>
            <Spinner size={14} />
            {t('demo.saving')}
          </span>
        ) : (
          t('demo.saveToServer')
        )}
      </Button>
      {phase === 'failed' ? (
        <Callout tone="dont" title={t('demo.error')}>
          <p>{t('demo.requestFailed')}</p>
          <Button variant="secondary" size="sm" onClick={send}>
            {t('demo.retry')}
          </Button>
        </Callout>
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
        disabled={busy}
        aria-busy={busy}
        onClick={() => {
          setBusy(true)
          window.setTimeout(() => setBusy(false), 600)
        }}
      >
        {busy ? (
          <span className={styles.inlineIcon}>
            <Spinner size={14} />
            {t('demo.saving')}
          </span>
        ) : (
          t('demo.saveToServer')
        )}
      </Button>
      <p className={styles.meta}>{t('demo.silentFail')}</p>
    </DemoStack>
  )
}
