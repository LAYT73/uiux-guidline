import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'
import styles from './NotFoundPage.module.css'

export function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <div className={styles.root}>
      <p className={styles.code} aria-hidden>
        404
      </p>
      <h1 className={styles.title}>{t('topic.notFound')}</h1>
      <p className={styles.lead}>{t('topic.notFoundLead')}</p>
      <Link className={styles.back} to="/">
        {t('topic.backHome')}
        <ArrowRight size={16} aria-hidden />
      </Link>
    </div>
  )
}
