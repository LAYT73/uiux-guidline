import { useTranslation } from 'react-i18next'
import { DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function PillFormGood() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <input className={styles.input} defaultValue={t('demo.searchProjects')} aria-label={t('demo.searchProjects')} />
      <DemoRow>
        <span className={styles.chip} style={{ borderRadius: 999 }}>
          {t('demo.design')}
        </span>
        <span className={styles.chip} style={{ borderRadius: 999 }}>
          {t('demo.on')}
        </span>
      </DemoRow>
    </DemoStack>
  )
}

export function PillFormBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <input
        className={styles.input}
        defaultValue={t('demo.searchProjects')}
        aria-label={t('demo.searchProjects')}
        style={{ borderRadius: 999, paddingInline: 18 }}
      />
      <DemoRow>
        <span className={styles.chip} style={{ borderRadius: 4 }}>
          {t('demo.design')}
        </span>
        <span className={styles.chip} style={{ borderRadius: 4 }}>
          {t('demo.on')}
        </span>
      </DemoRow>
    </DemoStack>
  )
}
