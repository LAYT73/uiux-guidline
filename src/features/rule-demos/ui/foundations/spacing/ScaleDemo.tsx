import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoRange, DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import { Tag } from '@/shared/ui/tag'
import styles from '../../playground.module.css'

const SCALE = [4, 8, 12, 16, 24, 32]

function snap(value: number) {
  return SCALE.reduce((best, step) =>
    Math.abs(step - value) < Math.abs(best - value) ? step : best,
  )
}

export function ScaleGood() {
  const { t } = useTranslation()
  const [raw, setRaw] = useState(16)
  const gap = snap(raw)

  return (
    <DemoStack>
      <DemoRange
        label={t('demo.gap')}
        name="spacing-scale-good"
        min={4}
        max={32}
        value={raw}
        valueLabel={`${gap}px`}
        onChange={(event) => setRaw(Number(event.target.value))}
      />
      <DemoRow>
        {SCALE.map((step) => (
          <Tag key={step} size="sm" tone={step === gap ? 'accent' : 'neutral'}>
            {step}
          </Tag>
        ))}
      </DemoRow>
      <div className={styles.tiles} style={{ gap }}>
        <span className={styles.tile} />
        <span className={styles.tile} />
        <span className={styles.tile} />
      </div>
      <p className={styles.meta}>{t('demo.scaleSnaps')}</p>
    </DemoStack>
  )
}

export function ScaleBad() {
  const { t } = useTranslation()
  const [gap, setGap] = useState(11)

  return (
    <DemoStack>
      <DemoRange
        label={t('demo.gap')}
        name="spacing-scale-bad"
        min={5}
        max={19}
        value={gap}
        valueLabel={`${gap}px`}
        onChange={(event) => setGap(Number(event.target.value))}
      />
      <div className={styles.tiles} style={{ gap }}>
        <span className={styles.tile} />
        <span className={styles.tile} style={{ marginLeft: 3 }} />
        <span className={styles.tile} style={{ marginLeft: 7 }} />
      </div>
    </DemoStack>
  )
}
