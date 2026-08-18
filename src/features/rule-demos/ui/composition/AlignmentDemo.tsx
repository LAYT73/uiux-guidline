import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoRange, DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import { cx } from '@/shared/lib'
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
        step={4}
        value={gutter}
        valueLabel={`${gutter}px`}
        onChange={(e) => setGutter(Number(e.target.value))}
      />
      <div className={styles.grid2} style={{ gap: gutter }}>
        <FakeCard>{t('demo.one')}</FakeCard>
        <FakeCard>{t('demo.two')}</FakeCard>
      </div>
      <div className={styles.grid2} style={{ gap: gutter }}>
        <FakeCard>{t('demo.three')}</FakeCard>
        <FakeCard>{t('demo.action')}</FakeCard>
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
      <FakeCard style={{ marginLeft: 9 }}>{t('demo.three')}</FakeCard>
      <p className={styles.meta}>{t('demo.ownIndent')}</p>
    </DemoStack>
  )
}

export function LongTextGood() {
  const { t } = useTranslation()

  return (
    <DemoStack>
      <p className={styles.copy} style={{ width: 'min(100%, 70ch)' }}>
        {t('demo.leftAlignCopy')}
      </p>
    </DemoStack>
  )
}

export function LongTextBad() {
  const { t } = useTranslation()

  return (
    <DemoStack>
      <p
        className={cx(styles.copy, styles.centerText)}
        style={{ width: 'min(100%, 70ch)' }}
      >
        {t('demo.centerAlignCopy')}
      </p>
    </DemoStack>
  )
}
