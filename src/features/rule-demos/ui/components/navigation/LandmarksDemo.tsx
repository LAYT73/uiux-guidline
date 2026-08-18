import { useTranslation } from 'react-i18next'
import { DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function LandmarksGood() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <nav aria-label={t('demo.product')}>
        <ul style={{ display: 'flex', gap: 8, listStyle: 'none', margin: 0, padding: 0 }}>
          <li>
            <a href="#home" className={styles.chip} onClick={(e) => e.preventDefault()}>
              {t('demo.home')}
            </a>
          </li>
          <li>
            <a href="#work" className={styles.chip} onClick={(e) => e.preventDefault()}>
              {t('demo.work')}
            </a>
          </li>
        </ul>
      </nav>
      <p className={styles.meta}>{t('demo.namedNav')}</p>
    </DemoStack>
  )
}

export function LandmarksBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <div style={{ display: 'flex', gap: 12 }}>
        <span className={styles.chip}>{t('demo.home')}</span>
        <span className={styles.chip}>{t('demo.work')}</span>
      </div>
      <p className={styles.meta}>{t('demo.divSoup')}</p>
    </DemoStack>
  )
}
