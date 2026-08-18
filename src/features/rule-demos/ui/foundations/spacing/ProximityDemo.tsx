import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoRange, DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function ProximityGood() {
  const { t } = useTranslation()
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
        <span className={styles.label}>{t('demo.email')}</span>
        <input className={styles.input} defaultValue="ada@lovelace.dev" />
      </div>
      <div style={{ height: outer }} />
      <div className={styles.field} style={{ gap: inner }}>
        <span className={styles.label}>{t('demo.company')}</span>
        <input className={styles.input} defaultValue="Analytical Engine" />
      </div>
    </DemoStack>
  )
}

export function ProximityBad() {
  const { t } = useTranslation()
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
      <span className={styles.label}>{t('demo.email')}</span>
      <div style={{ height: gap }} />
      <input className={styles.input} defaultValue="ada@lovelace.dev" />
      <div style={{ height: gap }} />
      <span className={styles.label}>{t('demo.company')}</span>
      <div style={{ height: gap }} />
      <input className={styles.input} defaultValue="Analytical Engine" />
    </DemoStack>
  )
}
