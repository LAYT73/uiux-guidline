import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import { Switch } from '@/shared/ui/switch'
import styles from '../playground.module.css'

export function ConsistentGood() {
  const { t } = useTranslation()
  const [air, setAir] = useState(false)
  const pad = air ? 18 : 8

  return (
    <DemoStack>
      <Switch checked={air} label={t('demo.comfortableDensity')} onChange={setAir} />
      <FakeCard style={{ padding: pad, display: 'flex', flexDirection: 'column', gap: pad }}>
        <strong>{t('demo.inbox')}</strong>
        <span>{t('demo.adaInvoice')}</span>
        <span>{t('demo.graceReview')}</span>
      </FakeCard>
    </DemoStack>
  )
}

export function ConsistentBad() {
  const { t } = useTranslation()

  return (
    <DemoStack>
      <FakeCard>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 22, marginBottom: 4 }}>{t('demo.inbox')}</p>
        <p style={{ fontSize: 12, lineHeight: 1.1 }}>{t('demo.adaInvoice')}</p>
        <p style={{ fontSize: 12, lineHeight: 1.1 }}>{t('demo.graceReview')}</p>
        <div style={{ height: 48 }} />
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
      <FakeCard style={{ padding: edit ? 16 : 8, fontSize: edit ? 16 : 12 }}>
        {edit ? t('demo.editCopy') : t('demo.browseCopy')}
      </FakeCard>
    </DemoStack>
  )
}

export function ContextBad() {
  const { t } = useTranslation()

  return (
    <DemoStack>
      <FakeCard style={{ padding: 4, fontSize: 11, lineHeight: 1.2 }}>
        {t('demo.onboardingDense')}
      </FakeCard>
      <p className={styles.meta}>{t('demo.spreadsheetDensity')}</p>
    </DemoStack>
  )
}
