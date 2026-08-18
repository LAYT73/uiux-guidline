import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import { Switch } from '@/shared/ui/switch'
import styles from '../playground.module.css'

export function ConsistentGood() {
  const { t } = useTranslation()
  const [air, setAir] = useState(false)
  const pad = air ? 'var(--space-4)' : 'var(--space-2)'

  return (
    <DemoStack>
      <Switch checked={air} label={t('demo.comfortableDensity')} onChange={setAir} />
      <FakeCard
        style={{ padding: pad, display: 'flex', flexDirection: 'column', gap: pad }}
      >
        <strong>{t('demo.inbox')}</strong>
        <span className={styles.copy}>{t('demo.adaInvoice')}</span>
        <span className={styles.copy}>{t('demo.graceReview')}</span>
      </FakeCard>
    </DemoStack>
  )
}

export function ConsistentBad() {
  const { t } = useTranslation()

  return (
    <DemoStack>
      <FakeCard>
        <p className={styles.fakeTitle}>{t('demo.inbox')}</p>
        <div className={styles.packed} style={{ marginTop: 'var(--space-1)' }}>
          <span className={styles.meta}>{t('demo.adaInvoice')}</span>
          <span className={styles.meta}>{t('demo.graceReview')}</span>
        </div>
        <div style={{ height: 'var(--space-7)' }} />
        <p className={styles.meta}>{t('demo.threeDensities')}</p>
      </FakeCard>
    </DemoStack>
  )
}

export function ContextGood() {
  const { t } = useTranslation()
  const [edit, setEdit] = useState(false)

  return (
    <DemoStack>
      <Switch checked={edit} label={t('demo.editMode')} onChange={setEdit} />
      <FakeCard
        style={{
          padding: edit ? 'var(--space-4)' : 'var(--space-2)',
          fontSize: edit ? 'var(--text-md)' : 'var(--text-xs)',
        }}
      >
        {edit ? t('demo.editCopy') : t('demo.browseCopy')}
      </FakeCard>
    </DemoStack>
  )
}

export function ContextBad() {
  const { t } = useTranslation()

  return (
    <DemoStack>
      <FakeCard
        style={{
          padding: 'var(--space-1)',
          fontSize: 'var(--text-xs)',
          lineHeight: 1.15,
        }}
      >
        {t('demo.onboardingDense')}
      </FakeCard>
      <p className={styles.meta}>{t('demo.spreadsheetDensity')}</p>
    </DemoStack>
  )
}
