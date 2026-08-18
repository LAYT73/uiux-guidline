import { useTranslation } from 'react-i18next'
import { DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import styles from '../playground.module.css'

export function LooksLikeGood() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <Button>{t('demo.deleteFile')}</Button>
      <p className={styles.meta}>{t('demo.looksLikeButton')}</p>
    </DemoStack>
  )
}

export function LooksLikeBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <span
        onClick={() => window.alert(t('demo.deletedAlert'))}
        style={{ color: 'var(--text-muted)', cursor: 'default' }}
      >
        {t('demo.deleteFile')}
      </span>
      <p className={styles.meta}>{t('demo.looksLikeCaption')}</p>
    </DemoStack>
  )
}

export function CursorGood() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <Button>{t('demo.download')}</Button>
      <p className={styles.meta} style={{ cursor: 'default' }}>
        {t('demo.looksLikeCaption')}
      </p>
    </DemoStack>
  )
}

export function CursorBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <div style={{ cursor: 'pointer' }}>
        <p>{t('demo.projectName')}</p>
        <p className={styles.meta}>{t('demo.notClickable')}</p>
      </div>
    </DemoStack>
  )
}
