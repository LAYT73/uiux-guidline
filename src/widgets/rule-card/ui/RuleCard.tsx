import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Check, RotateCcw, X } from 'lucide-react'
import type { Rule } from '@/entities/guideline'
import { getDemos } from '@/features/rule-demos'
import { Badge } from '@/shared/ui/badge'
import { Button } from '@/shared/ui/button'
import { SegmentedControl } from '@/shared/ui/segmented-control'
import { cx } from '@/shared/lib'
import styles from './RuleCard.module.css'

type RuleCardProps = {
  rule: Rule
}

export function RuleCard({ rule }: RuleCardProps) {
  const { t } = useTranslation()
  const [tab, setTab] = useState<'good' | 'bad'>('good')
  const [seed, setSeed] = useState(0)
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

      <div className={styles.toolbar}>
        <div className={styles.switcher}>
          <SegmentedControl
            ariaLabel={title}
            value={tab}
            options={[
              {
                value: 'good',
                label: (
                  <span className={styles.switchLabel}>
                    <Check size={14} aria-hidden />
                    {t('common.do')}
                  </span>
                ),
              },
              {
                value: 'bad',
                label: (
                  <span className={styles.switchLabel}>
                    <X size={14} aria-hidden />
                    {t('common.dont')}
                  </span>
                ),
              },
            ]}
            onChange={setTab}
          />
        </div>
        <Button variant="ghost" size="sm" onClick={() => setSeed((value) => value + 1)}>
          <RotateCcw size={14} aria-hidden />
          {t('common.reset')}
        </Button>
      </div>

      <div className={styles.split}>
        <section
          className={cx(styles.panel, styles.do, tab !== 'good' && styles.panelHidden)}
          aria-label={t('common.do')}
        >
          <div className={styles.panelHead}>
            <Badge tone="do">
              <Check size={12} aria-hidden />
              {t('common.do')}
            </Badge>
            <p className={styles.panelKicker}>{t('common.doLead')}</p>
          </div>
          <div className={styles.stage}>
            <Good key={`good-${seed}`} />
          </div>
          <p className={styles.hint}>
            <span className={styles.hintLabel}>{t('common.notice')}</span>
            {goodHint}
          </p>
        </section>
        <section
          className={cx(styles.panel, styles.dont, tab !== 'bad' && styles.panelHidden)}
          aria-label={t('common.dont')}
        >
          <div className={styles.panelHead}>
            <Badge tone="dont">
              <X size={12} aria-hidden />
              {t('common.dont')}
            </Badge>
            <p className={styles.panelKicker}>{t('common.dontLead')}</p>
          </div>
          <div className={styles.stage}>
            <Bad key={`bad-${seed}`} />
          </div>
          <p className={styles.hint}>
            <span className={styles.hintLabel}>{t('common.notice')}</span>
            {badHint}
          </p>
        </section>
      </div>
    </article>
  )
}
