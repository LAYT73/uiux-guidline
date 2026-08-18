import { useTranslation } from 'react-i18next'
import { DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import styles from '../../playground.module.css'

export function VsLinkGood() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <DemoRow>
        <Button
          onClick={() => {
            window.alert(t('demo.savedLocally'))
          }}
        >
          {t('demo.save')}
        </Button>
        <a href="https://www.w3.org/WAI/" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>
          {t('demo.docs')}
        </a>
      </DemoRow>
    </DemoStack>
  )
}

export function VsLinkBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <DemoRow>
        <span
          className={styles.chip}
          onClick={() => {
            window.alert(t('demo.notLinkOrButton'))
          }}
        >
          {t('demo.saveOrDocs')}
        </span>
      </DemoRow>
      <p className={styles.meta}>{t('demo.spanMeta')}</p>
    </DemoStack>
  )
}
