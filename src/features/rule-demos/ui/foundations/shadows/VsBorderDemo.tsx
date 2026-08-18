import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function VsBorderGood() {
  const { t } = useTranslation()
  const [lifted, setLifted] = useState(false)

  return (
    <DemoStack>
      <button type="button" className={styles.chip} onClick={() => setLifted((v) => !v)}>
        {lifted ? t('demo.restingCard') : t('demo.liftedCard')}
      </button>
      <FakeCard
        style={{
          border: lifted ? '1px solid transparent' : '1px solid var(--border)',
          boxShadow: lifted ? 'var(--shadow-modal)' : 'none',
        }}
      >
        {t('demo.editorChrome')}
      </FakeCard>
    </DemoStack>
  )
}

export function VsBorderBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <FakeCard
        style={{
          border: '2px solid var(--border-strong)',
          boxShadow: 'var(--shadow-modal), inset 0 1px 8px rgba(0,0,0,.25)',
        }}
      >
        {t('demo.restingCard')}
      </FakeCard>
      <p className={styles.meta}>{t('demo.edgeLouder')}</p>
    </DemoStack>
  )
}
