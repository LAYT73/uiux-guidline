import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoRow, DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import { Tag } from '@/shared/ui/tag'
import styles from '../../playground.module.css'

export function VsBorderGood() {
  const { t } = useTranslation()
  const [lifted, setLifted] = useState(false)

  return (
    <DemoStack>
      <DemoRow>
        <Button variant="secondary" onClick={() => setLifted((v) => !v)}>
          {lifted ? t('demo.dropCard') : t('demo.hoverCard')}
        </Button>
        <Tag tone={lifted ? 'accent' : 'neutral'}>
          {lifted ? t('demo.liftedCard') : t('demo.restingCard')}
        </Tag>
      </DemoRow>
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
          boxShadow: 'var(--shadow-modal), var(--shadow-hover)',
        }}
      >
        {t('demo.restingCard')}
      </FakeCard>
      <p className={styles.meta}>{t('demo.edgeLouder')}</p>
    </DemoStack>
  )
}
