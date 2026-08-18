import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoRange, DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function ProportionalGood() {
  const { t } = useTranslation()
  const [size, setSize] = useState(72)

  return (
    <DemoStack>
      <DemoRange
        label={t('demo.surfaceSize')}
        name="radius-prop-good"
        min={56}
        max={120}
        value={size}
        valueLabel={`${size}px`}
        onChange={(event) => setSize(Number(event.target.value))}
      />
      <FakeCard
        style={{
          width: size,
          height: size * 0.7,
          borderRadius: Math.round(size * 0.12),
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <button
          type="button"
          className={styles.chip}
          style={{ borderRadius: Math.max(6, Math.round(size * 0.08)) }}
        >
          {t('demo.action')}
        </button>
      </FakeCard>
    </DemoStack>
  )
}

export function ProportionalBad() {
  const { t } = useTranslation()
  const [size, setSize] = useState(72)

  return (
    <DemoStack>
      <DemoRange
        label={t('demo.surfaceSize')}
        name="radius-prop-bad"
        min={40}
        max={140}
        value={size}
        valueLabel={`${size}px`}
        onChange={(event) => setSize(Number(event.target.value))}
      />
      <FakeCard
        style={{
          width: size,
          height: size * 0.7,
          borderRadius: size > 90 ? 4 : 40,
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <button type="button" className={styles.chip} style={{ borderRadius: 999 }}>
          {t('demo.action')}
        </button>
      </FakeCard>
    </DemoStack>
  )
}
