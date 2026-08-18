import { useTranslation } from 'react-i18next'
import { DemoRow, DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import styles from '../playground.module.css'

export function GroupProximityGood() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <DemoRow>
        <Button variant="secondary">{t('demo.cancel')}</Button>
        <Button>{t('demo.save')}</Button>
      </DemoRow>
      <div style={{ height: 24 }} />
      <Button variant="danger">{t('demo.deleteProject')}</Button>
    </DemoStack>
  )
}

export function GroupProximityBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <DemoRow>
        <Button variant="secondary">{t('demo.cancel')}</Button>
        <Button>{t('demo.save')}</Button>
        <Button variant="danger">{t('demo.deleteProject')}</Button>
      </DemoRow>
      <p className={styles.meta}>{t('demo.equalGaps')}</p>
    </DemoStack>
  )
}

export function GroupCardsGood() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <FakeCard>{t('demo.profileCard')}</FakeCard>
      <FakeCard>{t('demo.billingCard')}</FakeCard>
    </DemoStack>
  )
}

export function GroupCardsBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <FakeCard>
        <p>{t('demo.profile')}</p>
        <p className={styles.meta}>{t('demo.mixedCard')}</p>
      </FakeCard>
    </DemoStack>
  )
}
