import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import styles from '../../playground.module.css'

export function StatesGood() {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)

  return (
    <DemoStack>
      <DemoRow>
        <Button
          disabled={loading}
          aria-busy={loading}
          onClick={() => {
            setLoading(true)
            window.setTimeout(() => setLoading(false), 1200)
          }}
        >
          {loading ? t('demo.saving') : t('demo.save')}
        </Button>
        <Button variant="secondary">{t('demo.focusMe')}</Button>
        <Button variant="ghost" disabled>
          {t('demo.disabledGuess')}
        </Button>
      </DemoRow>
      <p className={styles.meta}>{t('demo.focusRingHint')}</p>
    </DemoStack>
  )
}

export function StatesBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <DemoRow>
        <span
          style={{
            background: 'var(--accent)',
            color: 'var(--accent-contrast)',
            padding: '6px 12px',
            borderRadius: 4,
          }}
        >
          {t('demo.save')}
        </span>
        <span style={{ color: 'var(--text-subtle)' }}>{t('demo.disabledGuess')}</span>
      </DemoRow>
      <p className={styles.meta}>{t('demo.notAButton')}</p>
    </DemoStack>
  )
}
