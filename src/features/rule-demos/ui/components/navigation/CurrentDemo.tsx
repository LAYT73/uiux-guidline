import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import { Code } from '@/shared/ui/code'
import { cx } from '@/shared/lib'
import styles from '../../playground.module.css'

const items = ['overview', 'billing', 'members'] as const

const GOOD_MARKUP = `<a href="#billing"
   aria-current="page"
   class="chip is-current">
  Billing
</a>`

const BAD_MARKUP = `<div class="row">
  <span class="chip">Overview</span>
  <span class="chip">Billing</span>
</div>`

export function CurrentGood() {
  const { t } = useTranslation()
  const [current, setCurrent] = useState<(typeof items)[number]>('overview')

  return (
    <DemoStack>
      <nav aria-label={t('demo.settings')}>
        <ul className={styles.navList}>
          {items.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                aria-current={item === current ? 'page' : undefined}
                className={cx(styles.chip, item === current && styles.chipCurrent)}
                onClick={(event) => {
                  event.preventDefault()
                  setCurrent(item)
                }}
              >
                {t(`demo.${item}`)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <FakeCard>{t(`demo.${current}`)}</FakeCard>
      <Code label={t('demo.markup')} tone="do">
        {GOOD_MARKUP}
      </Code>
    </DemoStack>
  )
}

export function CurrentBad() {
  const { t } = useTranslation()
  const [current, setCurrent] = useState<(typeof items)[number]>('overview')

  return (
    <DemoStack>
      <div className={styles.navRow}>
        {items.map((item) => (
          <span key={item} className={styles.chip} onClick={() => setCurrent(item)}>
            {t(`demo.${item}`)}
          </span>
        ))}
      </div>
      <p className={styles.meta}>
        {t('demo.clickedNotCurrent', { current: t(`demo.${current}`) })}
      </p>
      <Code label={t('demo.markup')} tone="dont">
        {BAD_MARKUP}
      </Code>
    </DemoStack>
  )
}
