import { useTranslation } from 'react-i18next'
import { DemoStack } from '@/shared/ui/demo-kit'
import { Code } from '@/shared/ui/code'
import styles from '../playground.module.css'

const GOOD_MARKUP = `<h1>Project settings</h1>
<h2>Billing</h2>
<h2>Members</h2>`

const BAD_MARKUP = `<h1>Project settings</h1>
<h1>Billing</h1>
<h1>Members</h1>`

export function OneH1Good() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <div className={styles.mini}>
        <h1 className={styles.demoH1}>{t('demo.projectSettings')}</h1>
        <h2 className={styles.demoH2}>{t('demo.billing')}</h2>
        <h2 className={styles.demoH2}>{t('demo.members')}</h2>
      </div>
      <p className={styles.meta}>{t('demo.oneH1')}</p>
      <Code label={t('demo.markup')} tone="do">
        {GOOD_MARKUP}
      </Code>
    </DemoStack>
  )
}

export function OneH1Bad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <div className={styles.mini}>
        <h1 className={styles.demoH1}>{t('demo.projectSettings')}</h1>
        <h1 className={styles.demoH1}>{t('demo.billing')}</h1>
        <h1 className={styles.demoH1}>{t('demo.members')}</h1>
      </div>
      <p className={styles.meta}>{t('demo.threeH1')}</p>
      <Code label={t('demo.markup')} tone="dont">
        {BAD_MARKUP}
      </Code>
    </DemoStack>
  )
}

export function NotAllBoldGood() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <div className={styles.mini}>
        <p className={styles.figure}>{t('demo.quarterRevenue')}</p>
        <p className={styles.copy}>{t('demo.notBoldBody')}</p>
        <p className={styles.meta}>{t('demo.revenueSkim')}</p>
      </div>
    </DemoStack>
  )
}

export function NotAllBoldBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <div className={styles.mini}>
        <p className={styles.copyStrong}>{t('demo.quarterRevenue')}</p>
        <p className={styles.copyStrong}>{t('demo.notBoldBody')}</p>
        <p className={styles.copyStrong}>{t('demo.everyLineBold')}</p>
      </div>
    </DemoStack>
  )
}
