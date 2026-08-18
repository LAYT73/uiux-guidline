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
      <div className={styles.spacer} />
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
      <FakeCard>
        <div className={styles.mini}>
          <p className={styles.demoH2}>{t('demo.profile')}</p>
          <p className={styles.meta}>{t('demo.profileCard')}</p>
        </div>
      </FakeCard>
      <FakeCard>
        <div className={styles.mini}>
          <p className={styles.demoH2}>{t('demo.billing')}</p>
          <p className={styles.meta}>{t('demo.billingCard')}</p>
        </div>
      </FakeCard>
    </DemoStack>
  )
}

export function GroupCardsBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <FakeCard>
        <div className={styles.mini}>
          <p className={styles.demoH2}>{t('demo.profile')}</p>
          <p className={styles.meta}>{t('demo.mixedCard')}</p>
          <DemoRow>
            <Button variant="danger" size="sm">
              {t('demo.deleteProject')}
            </Button>
          </DemoRow>
        </div>
      </FakeCard>
    </DemoStack>
  )
}
