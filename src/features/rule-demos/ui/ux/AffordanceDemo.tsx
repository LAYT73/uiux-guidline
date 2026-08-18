import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import styles from '../playground.module.css'

export function LooksLikeGood() {
  const { t } = useTranslation()
  const [deleted, setDeleted] = useState(false)

  return (
    <DemoStack>
      <Button variant="danger" onClick={() => setDeleted(true)}>
        {t('demo.deleteFile')}
      </Button>
      <p className={styles.meta}>{t('demo.looksLikeButton')}</p>
      {deleted ? <p className={styles.ok}>{t('demo.deletedAlert')}</p> : null}
    </DemoStack>
  )
}

export function LooksLikeBad() {
  const { t } = useTranslation()
  const [deleted, setDeleted] = useState(false)

  return (
    <DemoStack>
      <span className={styles.meta} onClick={() => setDeleted(true)}>
        {t('demo.deleteFile')}
      </span>
      <p className={styles.meta}>{t('demo.looksLikeCaption')}</p>
      {deleted ? <p className={styles.warn}>{t('demo.deletedAlert')}</p> : null}
    </DemoStack>
  )
}

export function CursorGood() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <Button>{t('demo.download')}</Button>
      <p className={styles.meta}>{t('demo.notClickable')}</p>
    </DemoStack>
  )
}

export function CursorBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <FakeCard style={{ cursor: 'pointer' }}>
        <div className={styles.mini}>
          <p>{t('demo.projectName')}</p>
          <p className={styles.meta}>{t('demo.notClickable')}</p>
        </div>
      </FakeCard>
    </DemoStack>
  )
}
