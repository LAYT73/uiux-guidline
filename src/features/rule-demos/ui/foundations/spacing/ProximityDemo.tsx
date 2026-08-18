import { useId, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoRange, DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function ProximityGood() {
  const { t } = useTranslation()
  const emailId = useId()
  const companyId = useId()
  const [inner, setInner] = useState(6)
  const outer = inner * 3

  return (
    <DemoStack>
      <DemoRange
        label={t('demo.insideGroup')}
        name="proximity-good"
        min={4}
        max={8}
        value={inner}
        valueLabel={t('demo.betweenGroupsShort', { inner, outer })}
        onChange={(event) => setInner(Number(event.target.value))}
      />
      <div className={styles.field} style={{ gap: inner }}>
        <label className={styles.label} htmlFor={emailId}>
          {t('demo.email')}
        </label>
        <input id={emailId} className={styles.input} defaultValue="ada@lovelace.dev" />
      </div>
      <div style={{ height: outer }} />
      <div className={styles.field} style={{ gap: inner }}>
        <label className={styles.label} htmlFor={companyId}>
          {t('demo.company')}
        </label>
        <input id={companyId} className={styles.input} defaultValue="Analytical Engine" />
      </div>
    </DemoStack>
  )
}

export function ProximityBad() {
  const { t } = useTranslation()
  const emailId = useId()
  const companyId = useId()
  const [gap, setGap] = useState(16)

  return (
    <DemoStack>
      <DemoRange
        label={t('demo.everything')}
        name="proximity-bad"
        min={10}
        max={24}
        value={gap}
        valueLabel={`${gap}px`}
        onChange={(event) => setGap(Number(event.target.value))}
      />
      <label className={styles.label} htmlFor={emailId}>
        {t('demo.email')}
      </label>
      <div style={{ height: gap }} />
      <input id={emailId} className={styles.input} defaultValue="ada@lovelace.dev" />
      <div style={{ height: gap }} />
      <label className={styles.label} htmlFor={companyId}>
        {t('demo.company')}
      </label>
      <div style={{ height: gap }} />
      <input id={companyId} className={styles.input} defaultValue="Analytical Engine" />
    </DemoStack>
  )
}
