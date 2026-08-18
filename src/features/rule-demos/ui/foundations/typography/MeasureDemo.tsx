import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoRange, DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function MeasureGood() {
  const { t } = useTranslation()
  const [ch, setCh] = useState(62)

  return (
    <DemoStack>
      <DemoRange
        label={t('demo.measure')}
        name="measure-good"
        min={45}
        max={75}
        value={ch}
        valueLabel={`${ch}ch`}
        onChange={(event) => setCh(Number(event.target.value))}
      />
      <p style={{ maxWidth: `${ch}ch`, fontSize: 14, lineHeight: 1.55 }}>{t('demo.measureSample')}</p>
    </DemoStack>
  )
}

export function MeasureBad() {
  const { t } = useTranslation()
  const [ch, setCh] = useState(110)

  return (
    <DemoStack>
      <DemoRange
        label={t('demo.measure')}
        name="measure-bad"
        min={90}
        max={140}
        value={ch}
        valueLabel={`${ch}ch`}
        onChange={(event) => setCh(Number(event.target.value))}
      />
      <p className={styles.meta} style={{ maxWidth: `${ch}ch`, fontSize: 14, lineHeight: 1.55 }}>
        {t('demo.measureSample')}
      </p>
    </DemoStack>
  )
}
