import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoRange, DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

const SCALE = [6, 10, 16, 24]

export function RadiusScaleGood() {
  const { t } = useTranslation()
  const [index, setIndex] = useState(1)
  const radius = SCALE[index] ?? 10

  return (
    <DemoStack>
      <DemoRange
        label={t('demo.radiusStep')}
        name="radius-scale-good"
        min={0}
        max={3}
        value={index}
        valueLabel={`${radius}px`}
        onChange={(event) => setIndex(Number(event.target.value))}
      />
      <DemoRow>
        <button type="button" className={styles.chip} style={{ borderRadius: radius }}>
          {t('demo.save')}
        </button>
        <button type="button" className={styles.chip} style={{ borderRadius: radius }}>
          {t('demo.search')}
        </button>
        <span className={styles.tile} style={{ borderRadius: radius }} />
      </DemoRow>
    </DemoStack>
  )
}

export function RadiusScaleBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <p className={styles.meta}>{t('demo.ownCorner')}</p>
      <DemoRow>
        <button type="button" className={styles.chip} style={{ borderRadius: 3 }}>
          {t('demo.save')}
        </button>
        <button type="button" className={styles.chip} style={{ borderRadius: 18 }}>
          {t('demo.search')}
        </button>
        <span className={styles.tile} style={{ borderRadius: 28 }} />
      </DemoRow>
    </DemoStack>
  )
}
