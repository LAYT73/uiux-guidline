import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'
import { SECTIONS } from '@/entities/guideline'
import { Card } from '@/shared/ui/card'
import styles from './HomePage.module.css'

export function HomePage() {
  const { t } = useTranslation()

  return (
    <div className={styles.root}>
      <p className={styles.kicker}>{t('home.kicker')}</p>
      <h1 className={styles.title}>{t('home.title')}</h1>
      <p className={styles.lead}>{t('home.lead')}</p>
      <Link className={styles.cta} to="/foundations/spacing">
        {t('home.cta')}
        <ArrowRight size={18} aria-hidden />
      </Link>

      <h2 className={styles.sectionTitle}>{t('home.sectionsTitle')}</h2>
      <div className={styles.grid}>
        {SECTIONS.map((section) => (
          <Card key={section.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{t(`sections.${section.id}.title`)}</h3>
            <p className={styles.cardLead}>{t(`sections.${section.id}.description`)}</p>
            <ul className={styles.topics}>
              {section.topicIds.map((topicId) => (
                <li key={topicId}>
                  <Link to={`/${section.id}/${topicId}`}>{t(`topics.${topicId}`)}</Link>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  )
}
