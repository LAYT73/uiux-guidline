import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoRange, DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import styles from '../playground.module.css'

export function CtaGood() {
  const { t } = useTranslation()
  const [space, setSpace] = useState(24)

  return (
    <DemoStack>
      <DemoRange
        label={t('demo.spaceAroundCta')}
        name="cta-good"
        min={16}
        max={32}
        value={space}
        valueLabel={`${space}px`}
        onChange={(e) => setSpace(Number(e.target.value))}
      />
      <p className={styles.meta}>{t('demo.readyToShip')}</p>
      <div style={{ marginTop: space, marginBottom: space }}>
        <Button>{t('demo.publish')}</Button>
      </div>
    </DemoStack>
  )
}

export function CtaBad() {
  const { t } = useTranslation()

  return (
    <DemoStack>
      <p className={styles.meta} style={{ marginBottom: 4 }}>
        {t('demo.readyToShip')}
      </p>
      <Button>{t('demo.publish')}</Button>
    </DemoStack>
  )
}

export function BreathingGood() {
  const { t } = useTranslation()
  const [space, setSpace] = useState(20)

  return (
    <DemoStack>
      <DemoRange
        label={t('demo.betweenSections')}
        name="air-good"
        min={16}
        max={32}
        value={space}
        valueLabel={`${space}px`}
        onChange={(e) => setSpace(Number(e.target.value))}
      />
      <FakeCard>{t('demo.intro')}</FakeCard>
      <div style={{ height: space }} />
      <FakeCard>{t('demo.details')}</FakeCard>
    </DemoStack>
  )
}

export function BreathingBad() {
  const { t } = useTranslation()

  return (
    <DemoStack>
      <FakeCard style={{ margin: 0 }}>{t('demo.intro')}</FakeCard>
      <FakeCard style={{ margin: 0, borderRadius: 0 }}>{t('demo.details')}</FakeCard>
      <FakeCard style={{ margin: 0 }}>{t('demo.footerWidgets')}</FakeCard>
    </DemoStack>
  )
}
