import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Check, RotateCcw, X } from 'lucide-react'
import type { Rule } from '@/entities/guideline'
import { getDemos } from '@/features/rule-demos'
import { Badge } from '@/shared/ui/badge'
import { Button } from '@/shared/ui/button'
import { SegmentedControl } from '@/shared/ui/segmented-control'
import { cx, fadeUp, panelPresence, transitionBase, useMediaQuery } from '@/shared/lib'
import styles from './RuleCard.module.css'

type RuleCardProps = {
  rule: Rule
  index?: number
}

type Tab = 'good' | 'bad'

export function RuleCard({ rule, index }: RuleCardProps) {
  const { t } = useTranslation()
  const [tab, setTab] = useState<Tab>('good')
  const [seed, setSeed] = useState(0)
  const compact = useMediaQuery('(max-width: 899px)')
  const reduceMotion = useReducedMotion()
  const demos = getDemos(rule)

  if (!demos) return null

  const { Good, Bad, layout = 'split' } = demos
  const title = t(`rules.${rule.id}.title`)
  const description = t(`rules.${rule.id}.description`)

  const panels = [
    {
      tab: 'good' as Tab,
      Demo: Good,
      tone: 'do' as const,
      label: t('common.do'),
      hint: t(`rules.${rule.id}.goodHint`),
      icon: <Check size={12} aria-hidden />,
    },
    {
      tab: 'bad' as Tab,
      Demo: Bad,
      tone: 'dont' as const,
      label: t('common.dont'),
      hint: t(`rules.${rule.id}.badHint`),
      icon: <X size={12} aria-hidden />,
    },
  ]

  const active = panels.find((panel) => panel.tab === tab) ?? panels[0]!

  return (
    <motion.article className={styles.root} variants={reduceMotion ? undefined : fadeUp}>
      <header className={styles.header}>
        {index !== undefined ? (
          <span className={styles.index} aria-hidden>
            {String(index + 1).padStart(2, '0')}
          </span>
        ) : null}
        <div className={styles.heading}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </header>

      <div className={styles.toolbar}>
        {compact ? (
          <SegmentedControl
            ariaLabel={title}
            value={tab}
            options={panels.map((panel) => ({
              value: panel.tab,
              label: (
                <span className={styles.switchLabel}>
                  {panel.icon}
                  {panel.label}
                </span>
              ),
            }))}
            onChange={setTab}
          />
        ) : null}
        <div className={styles.reset}>
          <Button variant="ghost" size="sm" onClick={() => setSeed((value) => value + 1)}>
            <motion.span
              className={styles.resetIcon}
              animate={reduceMotion ? undefined : { rotate: seed * -360 }}
              transition={transitionBase}
            >
              <RotateCcw size={14} aria-hidden />
            </motion.span>
            {t('common.reset')}
          </Button>
        </div>
      </div>

      {compact ? (
        <AnimatePresence mode="wait" initial={false}>
          <motion.section
            key={active.tab}
            className={cx(styles.panel, styles[active.tone])}
            aria-label={active.label}
            {...(reduceMotion ? {} : panelPresence)}
          >
            <div className={styles.stage}>
              <active.Demo key={`${active.tab}-${seed}`} />
            </div>
            <p className={styles.hint}>{active.hint}</p>
          </motion.section>
        </AnimatePresence>
      ) : (
        <div className={cx(styles.split, layout === 'stacked' && styles.stacked)}>
          {panels.map((panel) => (
            <section
              key={panel.tab}
              className={cx(styles.panel, styles[panel.tone])}
              aria-label={panel.label}
            >
              <div className={styles.panelHead}>
                <Badge tone={panel.tone}>
                  {panel.icon}
                  {panel.label}
                </Badge>
              </div>
              <div className={styles.stage}>
                <panel.Demo key={`${panel.tab}-${seed}`} />
              </div>
              <p className={styles.hint}>{panel.hint}</p>
            </section>
          ))}
        </div>
      )}
    </motion.article>
  )
}
