import { Link, useParams } from 'react-router'
import { useTranslation } from 'react-i18next'
import { getRulesByTopic, getTopic, isTopicId } from '@/entities/guideline'
import { RuleCard } from '@/widgets/rule-card'
import styles from './TopicPage.module.css'

export function TopicPage() {
  const { t } = useTranslation()
  const { section = '', topic = '' } = useParams()
  const current = getTopic(section, topic)

  if (!current) {
    return (
      <div className={styles.empty}>
        <h1 className={styles.title}>{t('topic.notFound')}</h1>
        <Link to="/">{t('topic.backHome')}</Link>
      </div>
    )
  }

  const rules = isTopicId(current.id) ? getRulesByTopic(current.id) : []

  return (
    <div className={styles.root}>
      <p className={styles.kicker}>{t(`nav.${current.sectionId}`)}</p>
      <h1 className={styles.title}>{t(`topics.${current.id}`)}</h1>
      <p className={styles.lead}>{t(`sections.${current.sectionId}.description`)}</p>

      {rules.length === 0 ? (
        <p className={styles.soon}>{t('common.comingSoon')}</p>
      ) : (
        <div className={styles.rules}>
          {rules.map((rule) => (
            <RuleCard key={rule.id} rule={rule} />
          ))}
        </div>
      )}
    </div>
  )
}
