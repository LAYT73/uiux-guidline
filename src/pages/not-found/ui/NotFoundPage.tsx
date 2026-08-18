import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import styles from './NotFoundPage.module.css'

export function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>{t('topic.notFound')}</h1>
      <Link to="/">{t('topic.backHome')}</Link>
    </div>
  )
}
