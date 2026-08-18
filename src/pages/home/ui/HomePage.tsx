import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Boxes, LayoutGrid, Ruler, Sparkles } from 'lucide-react'
import type { SectionId } from '@/entities/guideline'
import { RULES, SECTIONS } from '@/entities/guideline'
import { Card } from '@/shared/ui/card'
import { Tag } from '@/shared/ui/tag'
import { fadeUp, stagger } from '@/shared/lib'
import styles from './HomePage.module.css'

const SECTION_ICON: Record<SectionId, typeof Ruler> = {
  foundations: Ruler,
  components: Boxes,
  composition: LayoutGrid,
  'ux-principles': Sparkles,
}

export function HomePage() {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()

  const topicCount = SECTIONS.reduce(
    (total, section) => total + section.topicIds.length,
    0,
  )
  const stats = [
    { value: topicCount, label: t('home.statTopics') },
    { value: RULES.length, label: t('home.statRules') },
    { value: RULES.length * 2, label: t('home.statExamples') },
  ]
  const steps = [t('home.howStepOne'), t('home.howStepTwo'), t('home.howStepThree')]

  return (
    <motion.div
      className={styles.root}
      initial={reduceMotion ? undefined : 'hidden'}
      animate={reduceMotion ? undefined : 'visible'}
      variants={stagger(0.07)}
    >
      <motion.header className={styles.hero} variants={reduceMotion ? undefined : fadeUp}>
        <p className={styles.kicker}>{t('home.kicker')}</p>
        <h1 className={styles.title}>{t('home.title')}</h1>
        <p className={styles.lead}>{t('home.lead')}</p>
        <Link className={styles.cta} to="/foundations/spacing">
          {t('home.cta')}
          <ArrowRight size={18} aria-hidden />
        </Link>
        <dl className={styles.stats}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <dt className={styles.statLabel}>{stat.label}</dt>
              <dd className={styles.statValue}>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </motion.header>

      <motion.section className={styles.how} variants={reduceMotion ? undefined : fadeUp}>
        <h2 className={styles.howTitle}>{t('home.howTitle')}</h2>
        <p className={styles.howLead}>{t('home.howLead')}</p>
        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li key={step} className={styles.step}>
              <span className={styles.stepIndex} aria-hidden>
                {index + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </motion.section>

      <motion.h2
        className={styles.sectionTitle}
        variants={reduceMotion ? undefined : fadeUp}
      >
        {t('home.sectionsTitle')}
      </motion.h2>

      <div className={styles.grid}>
        {SECTIONS.map((section) => {
          const Icon = SECTION_ICON[section.id]
          const ruleCount = RULES.filter((rule) => rule.sectionId === section.id).length

          return (
            <motion.div key={section.id} variants={reduceMotion ? undefined : fadeUp}>
              <Card className={styles.card}>
                <div className={styles.cardHead}>
                  <span className={styles.cardIcon} aria-hidden>
                    <Icon size={18} />
                  </span>
                  <h3 className={styles.cardTitle}>
                    {t(`sections.${section.id}.title`)}
                  </h3>
                  <span className={styles.cardCount}>
                    <Tag size="sm">{t('topic.ruleCount', { count: ruleCount })}</Tag>
                  </span>
                </div>
                <p className={styles.cardLead}>
                  {t(`sections.${section.id}.description`)}
                </p>
                <ul className={styles.topics}>
                  {section.topicIds.map((topicId) => (
                    <li key={topicId}>
                      <Link to={`/${section.id}/${topicId}`}>
                        {t(`topics.${topicId}`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
