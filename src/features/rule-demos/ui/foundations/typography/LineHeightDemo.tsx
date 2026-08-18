import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoRange, DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function LineHeightGood() {
  const { t } = useTranslation()
  const [leading, setLeading] = useState(1.55)

  return (
    <DemoStack>
      <DemoRange
        label={t('demo.lineHeight')}
        name="lh-good"
        min={145}
        max={170}
        value={Math.round(leading * 100)}
        valueLabel={leading.toFixed(2)}
        onChange={(event) => setLeading(Number(event.target.value) / 100)}
      />
      <p className={styles.copy} style={{ lineHeight: leading }}>
        {t('demo.lineHeightSample')}
      </p>
    </DemoStack>
  )
}

export function LineHeightBad() {
  const { t } = useTranslation()
  const [leading, setLeading] = useState(1.05)

  return (
    <DemoStack>
      <DemoRange
        label={t('demo.lineHeight')}
        name="lh-bad"
        min={100}
        max={120}
        value={Math.round(leading * 100)}
        valueLabel={leading.toFixed(2)}
        onChange={(event) => setLeading(Number(event.target.value) / 100)}
      />
      <p className={styles.copy} style={{ lineHeight: leading }}>
        {t('demo.lineHeightSample')}
      </p>
    </DemoStack>
  )
}
