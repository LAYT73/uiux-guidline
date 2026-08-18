import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

const items = ['overview', 'billing', 'members'] as const

export function CurrentGood() {
  const { t } = useTranslation()
  const [current, setCurrent] = useState<(typeof items)[number]>('overview')

  return (
    <DemoStack>
      <nav aria-label={t('demo.settings')}>
        <ul style={{ display: 'flex', gap: 8, listStyle: 'none', margin: 0, padding: 0 }}>
          {items.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                aria-current={item === current ? 'page' : undefined}
                className={styles.chip}
                style={{
                  background: item === current ? 'var(--accent-soft)' : undefined,
                  color: item === current ? 'var(--accent)' : undefined,
                }}
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
    </DemoStack>
  )
}

export function CurrentBad() {
  const { t } = useTranslation()
  const [current, setCurrent] = useState<(typeof items)[number]>('overview')

  return (
    <DemoStack>
      <div style={{ display: 'flex', gap: 8 }}>
        {items.map((item) => (
          <span key={item} className={styles.chip} onClick={() => setCurrent(item)}>
            {t(`demo.${item}`)}
          </span>
        ))}
      </div>
      <p className={styles.meta}>{t('demo.clickedNotCurrent', { current: t(`demo.${current}`) })}</p>
    </DemoStack>
  )
}
