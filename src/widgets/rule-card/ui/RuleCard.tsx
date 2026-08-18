import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Check, X } from 'lucide-react'
import type { Rule } from '@/entities/guideline'
import { getDemos } from '@/features/rule-demos'
import { cx } from '@/shared/lib'
import styles from './RuleCard.module.css'

type RuleCardProps = {
  rule: Rule
}

export function RuleCard({ rule }: RuleCardProps) {
  const { t } = useTranslation()
  const [tab, setTab] = useState<'good' | 'bad'>('good')
  const demos = getDemos(rule)
  const title = t(`rules.${rule.id}.title`)
  const description = t(`rules.${rule.id}.description`)
  const goodHint = t(`rules.${rule.id}.goodHint`)
  const badHint = t(`rules.${rule.id}.badHint`)

  if (!demos) return null

  const { Good, Bad } = demos

  return (
    <article className={styles.root}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </header>

      <div className={styles.tabs} role="tablist" aria-label={title}>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'good'}
          className={cx(styles.tab, styles.tabDo, tab === 'good' && styles.tabActive)}
          onClick={() => setTab('good')}
        >
          <Check size={16} aria-hidden />
          {t('common.do')}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'bad'}
          className={cx(styles.tab, styles.tabDont, tab === 'bad' && styles.tabActive)}
          onClick={() => setTab('bad')}
        >
          <X size={16} aria-hidden />
          {t('common.dont')}
        </button>
      </div>

      <div className={styles.split}>
        <section
          className={cx(styles.panel, styles.do, tab !== 'good' && styles.panelHidden)}
          aria-label={t('common.do')}
        >
          <p className={cx(styles.badge, styles.badgeDo)}>
            <Check size={14} aria-hidden />
            {t('common.do')}
          </p>
          <div className={styles.stage}>
            <Good />
          </div>
          <p className={styles.hint}>{goodHint}</p>
        </section>
        <section
          className={cx(styles.panel, styles.dont, tab !== 'bad' && styles.panelHidden)}
          aria-label={t('common.dont')}
        >
          <p className={cx(styles.badge, styles.badgeDont)}>
            <X size={14} aria-hidden />
            {t('common.dont')}
          </p>
          <div className={styles.stage}>
            <Bad />
          </div>
          <p className={styles.hint}>{badHint}</p>
        </section>
      </div>
    </article>
  )
}
