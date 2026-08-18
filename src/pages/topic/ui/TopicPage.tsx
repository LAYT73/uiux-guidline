import { Link, useParams } from 'react-router'
import { useTranslation } from 'react-i18next'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowLeft, ArrowRight, Check, X } from 'lucide-react'
import { TOPICS, getRulesByTopic, getTopic, isTopicId } from '@/entities/guideline'
import { RuleCard } from '@/widgets/rule-card'
import { Badge } from '@/shared/ui/badge'
import { Tag } from '@/shared/ui/tag'
import { stagger } from '@/shared/lib'
import styles from './TopicPage.module.css'

export function TopicPage() {
  const { t } = useTranslation()
  const { section = '', topic = '' } = useParams()
  const reduceMotion = useReducedMotion()
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
  const position = TOPICS.findIndex((item) => item.id === current.id)
  const previous = position > 0 ? TOPICS[position - 1] : undefined
  const next = position < TOPICS.length - 1 ? TOPICS[position + 1] : undefined

  return (
    <div className={styles.root}>
      <header className={styles.head}>
        <p className={styles.kicker}>{t(`nav.${current.sectionId}`)}</p>
        <h1 className={styles.title}>{t(`topics.${current.id}`)}</h1>
        <p className={styles.lead}>{t(`topicLead.${current.id}`)}</p>
        <Tag>{t('topic.ruleCount', { count: rules.length })}</Tag>
      </header>

      {rules.length > 0 ? (
        <div className={styles.legend}>
          <p className={styles.legendItem}>
            <Badge tone="do">
              <Check size={12} aria-hidden />
              {t('common.do')}
            </Badge>
            {t('common.doLead')}
          </p>
          <p className={styles.legendItem}>
            <Badge tone="dont">
              <X size={12} aria-hidden />
              {t('common.dont')}
            </Badge>
            {t('common.dontLead')}
          </p>
        </div>
      ) : null}

      {rules.length === 0 ? (
        <p className={styles.soon}>{t('common.comingSoon')}</p>
      ) : (
        <motion.div
          className={styles.rules}
          initial={reduceMotion ? undefined : 'hidden'}
          animate={reduceMotion ? undefined : 'visible'}
          variants={stagger(0.08)}
        >
          {rules.map((rule, index) => (
            <RuleCard key={rule.id} rule={rule} index={index} />
          ))}
        </motion.div>
      )}

      <nav className={styles.pager} aria-label={t('meta.title')}>
        {previous ? (
          <Link className={styles.pagerLink} to={`/${previous.sectionId}/${previous.id}`}>
            <ArrowLeft size={16} aria-hidden />
            <span>
              <span className={styles.pagerLabel}>{t('topic.prev')}</span>
              <span className={styles.pagerTitle}>{t(`topics.${previous.id}`)}</span>
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link className={styles.pagerNext} to={`/${next.sectionId}/${next.id}`}>
            <span>
              <span className={styles.pagerLabel}>{t('topic.next')}</span>
              <span className={styles.pagerTitle}>{t(`topics.${next.id}`)}</span>
            </span>
            <ArrowRight size={16} aria-hidden />
          </Link>
        ) : null}
      </nav>
    </div>
  )
}
