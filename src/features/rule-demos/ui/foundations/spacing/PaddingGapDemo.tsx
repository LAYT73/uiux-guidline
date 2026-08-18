import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoRange, DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function PaddingGapGood() {
  const { t } = useTranslation()
  const [pad, setPad] = useState(16)
  const [gap, setGap] = useState(8)

  return (
    <DemoStack>
      <DemoRange
        label={t('demo.padding')}
        name="pad-good"
        min={12}
        max={24}
        value={pad}
        valueLabel={`${pad}px`}
        onChange={(event) => setPad(Number(event.target.value))}
      />
      <DemoRange
        label={t('demo.gap')}
        name="gap-good"
        min={8}
        max={16}
        value={gap}
        valueLabel={`${gap}px`}
        onChange={(event) => setGap(Number(event.target.value))}
      />
      <FakeCard style={{ padding: pad, display: 'flex', flexDirection: 'column', gap }}>
        <input className={styles.input} defaultValue={t('demo.firstRow')} />
        <input className={styles.input} defaultValue={t('demo.secondRow')} />
        <input className={styles.input} defaultValue={t('demo.thirdRow')} />
      </FakeCard>
    </DemoStack>
  )
}

export function PaddingGapBad() {
  const { t } = useTranslation()
  const [margin, setMargin] = useState(14)

  return (
    <DemoStack>
      <DemoRange
        label={t('demo.eachRowMargin')}
        name="pad-bad"
        min={4}
        max={24}
        value={margin}
        valueLabel={`${margin}px`}
        onChange={(event) => setMargin(Number(event.target.value))}
      />
      <FakeCard style={{ padding: 0 }}>
        <input className={styles.input} defaultValue={t('demo.firstRow')} style={{ margin }} />
        <input className={styles.input} defaultValue={t('demo.secondRow')} style={{ margin }} />
        <input className={styles.input} defaultValue={t('demo.thirdRow')} style={{ margin }} />
      </FakeCard>
    </DemoStack>
  )
}
