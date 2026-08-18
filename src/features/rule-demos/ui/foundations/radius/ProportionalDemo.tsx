import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoRange, DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

const MIN_WIDTH = 200
const MAX_WIDTH = 320

function surfaceHeight(width: number) {
  return Math.max(120, Math.round(width * 0.55))
}

export function ProportionalGood() {
  const { t } = useTranslation()
  const [size, setSize] = useState(260)

  const radius = Math.min(24, Math.max(10, Math.round(size * 0.06)))
  const innerRadius = Math.max(6, Math.round(size * 0.03))

  return (
    <DemoStack>
      <DemoRange
        label={t('demo.surfaceSize')}
        name="radius-prop-good"
        min={MIN_WIDTH}
        max={MAX_WIDTH}
        value={size}
        valueLabel={`${size}px`}
        onChange={(event) => setSize(Number(event.target.value))}
      />
      <FakeCard
        style={{
          width: size,
          maxWidth: '100%',
          height: surfaceHeight(size),
          borderRadius: radius,
          padding: 'var(--space-4)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 'var(--space-3)',
        }}
      >
        <span className={styles.meta}>{t('demo.radiusStep')}</span>
        <button
          type="button"
          className={styles.chip}
          style={{ borderRadius: innerRadius }}
        >
          {t('demo.action')}
        </button>
      </FakeCard>
    </DemoStack>
  )
}

export function ProportionalBad() {
  const { t } = useTranslation()
  const [size, setSize] = useState(240)

  return (
    <DemoStack>
      <DemoRange
        label={t('demo.surfaceSize')}
        name="radius-prop-bad"
        min={MIN_WIDTH}
        max={MAX_WIDTH}
        value={size}
        valueLabel={`${size}px`}
        onChange={(event) => setSize(Number(event.target.value))}
      />
      <FakeCard
        style={{
          width: size,
          maxWidth: '100%',
          height: surfaceHeight(size),
          borderRadius: size > 260 ? 4 : 40,
          padding: 'var(--space-4)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 'var(--space-3)',
        }}
      >
        <span className={styles.meta}>{t('demo.radiusStep')}</span>
        <button type="button" className={styles.chip} style={{ borderRadius: 999 }}>
          {t('demo.action')}
        </button>
      </FakeCard>
    </DemoStack>
  )
}
