import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoRange, DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import styles from '../playground.module.css'

export function GridGood() {
  const { t } = useTranslation()
  const [gutter, setGutter] = useState(12)

  return (
    <DemoStack>
      <DemoRange
        label={t('demo.gutter')}
        name="grid-good"
        min={8}
        max={16}
        value={gutter}
        valueLabel={`${gutter}px`}
        onChange={(e) => setGutter(Number(e.target.value))}
      />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: gutter }}>
        <FakeCard>{t('demo.one')}</FakeCard>
        <FakeCard>{t('demo.two')}</FakeCard>
      </div>
    </DemoStack>
  )
}

export function GridBad() {
  const { t } = useTranslation()

  return (
    <DemoStack>
      <FakeCard style={{ marginLeft: 2 }}>{t('demo.one')}</FakeCard>
      <FakeCard style={{ marginLeft: 18, marginTop: 6 }}>{t('demo.two')}</FakeCard>
      <p className={styles.meta}>{t('demo.ownIndent')}</p>
    </DemoStack>
  )
}

export function LongTextGood() {
  const { t } = useTranslation()

  return (
    <DemoStack>
      <p style={{ textAlign: 'left', fontSize: 14, lineHeight: 1.55 }}>{t('demo.leftAlignCopy')}</p>
    </DemoStack>
  )
}

export function LongTextBad() {
  const { t } = useTranslation()

  return (
    <DemoStack>
      <p style={{ textAlign: 'center', fontSize: 14, lineHeight: 1.55 }}>{t('demo.centerAlignCopy')}</p>
    </DemoStack>
  )
}
