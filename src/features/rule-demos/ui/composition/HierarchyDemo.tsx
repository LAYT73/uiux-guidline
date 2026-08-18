import { useTranslation } from 'react-i18next'
import { DemoStack } from '@/shared/ui/demo-kit'
import styles from '../playground.module.css'

export function OneH1Good() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 22 }}>{t('demo.projectSettings')}</h1>
      <h2 style={{ fontSize: 15, marginTop: 8 }}>{t('demo.billing')}</h2>
      <p className={styles.meta}>{t('demo.oneH1')}</p>
    </DemoStack>
  )
}

export function OneH1Bad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <h1 style={{ fontSize: 18 }}>{t('demo.projectSettings')}</h1>
      <h1 style={{ fontSize: 18 }}>{t('demo.billing')}</h1>
      <h1 style={{ fontSize: 18 }}>{t('demo.members')}</h1>
      <p className={styles.meta}>{t('demo.threeH1')}</p>
    </DemoStack>
  )
}

export function NotAllBoldGood() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <p style={{ fontWeight: 650, fontSize: 18 }}>{t('demo.quarterRevenue')}</p>
      <p className={styles.meta}>{t('demo.revenueSkim')}</p>
    </DemoStack>
  )
}

export function NotAllBoldBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <p style={{ fontWeight: 600, fontSize: 14, lineHeight: 1.5 }}>
        {t('demo.everyLineBold')}
      </p>
    </DemoStack>
  )
}
