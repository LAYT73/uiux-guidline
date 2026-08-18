import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Star } from 'lucide-react'
import { DemoRange, DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function OpticalSizeGood() {
  const { t } = useTranslation()
  const [size, setSize] = useState(16)

  return (
    <DemoStack>
      <DemoRange
        label={t('demo.typeSize')}
        name="icon-size-good"
        min={14}
        max={20}
        value={size}
        valueLabel={`${size}px`}
        onChange={(event) => setSize(Number(event.target.value))}
      />
      <DemoRow>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: size }}>
          <Star size={size} />
          {t('demo.starred')}
        </span>
      </DemoRow>
    </DemoStack>
  )
}

export function OpticalSizeBad() {
  const { t } = useTranslation()
  const [size, setSize] = useState(16)

  return (
    <DemoStack>
      <DemoRange
        label={t('demo.typeSize')}
        name="icon-size-bad"
        min={12}
        max={22}
        value={size}
        valueLabel={t('demo.iconVsType', { size })}
        onChange={(event) => setSize(Number(event.target.value))}
      />
      <DemoRow>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: size }}>
          <Star size={28} />
          {t('demo.starred')}
        </span>
      </DemoRow>
      <p className={styles.meta}>{t('demo.iconDifferent')}</p>
    </DemoStack>
  )
}
