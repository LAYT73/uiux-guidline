import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoRow, DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import { Tag } from '@/shared/ui/tag'
import styles from '../../playground.module.css'

export function ElevationGood() {
  const { t } = useTranslation()
  const [lifted, setLifted] = useState(false)

  return (
    <DemoStack>
      <DemoRow>
        <Button variant="secondary" onClick={() => setLifted((v) => !v)}>
          {lifted ? t('demo.dropCard') : t('demo.hoverCard')}
        </Button>
        <Tag tone={lifted ? 'accent' : 'neutral'}>
          {lifted ? t('demo.liftedCard') : t('demo.restingCard')}
        </Tag>
      </DemoRow>
      <FakeCard
        style={{
          boxShadow: lifted ? 'var(--shadow-hover)' : 'var(--shadow-rest)',
          transform: lifted ? 'translateY(-2px)' : undefined,
          transition:
            'box-shadow var(--duration-med) var(--ease-out), transform var(--duration-med) var(--ease-out)',
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
      <FakeCard style={{ boxShadow: 'var(--shadow-modal)' }}>
        {t('demo.firstRow')}
      </FakeCard>
      <FakeCard style={{ boxShadow: 'var(--shadow-modal)' }}>
        {t('demo.anotherListRow')}
      </FakeCard>
      <p className={styles.meta}>{t('demo.bothModal')}</p>
    </DemoStack>
  )
}
