import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function ElevationGood() {
  const { t } = useTranslation()
  const [lifted, setLifted] = useState(false)

  return (
    <DemoStack>
      <button type="button" className={styles.chip} onClick={() => setLifted((v) => !v)}>
        {lifted ? t('demo.restingCard') : t('demo.hoverCard')}
      </button>
      <FakeCard
        style={{
          boxShadow: lifted ? 'var(--shadow-hover)' : 'var(--shadow-rest)',
          transform: lifted ? 'translateY(-2px)' : undefined,
          transition: 'box-shadow var(--duration-med) var(--ease-out), transform var(--duration-med) var(--ease-out)',
        }}
      >
        {t('demo.project')}
      </FakeCard>
    </DemoStack>
  )
}

export function ElevationBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <FakeCard
        style={{
          boxShadow: '0 28px 60px rgba(0,0,0,.55)',
          marginBottom: 12,
        }}
      >
        {t('demo.firstRow')}
      </FakeCard>
      <FakeCard style={{ boxShadow: '0 28px 60px rgba(0,0,0,.55)' }}>{t('demo.anotherListRow')}</FakeCard>
      <p className={styles.meta}>{t('demo.bothModal')}</p>
    </DemoStack>
  )
}
