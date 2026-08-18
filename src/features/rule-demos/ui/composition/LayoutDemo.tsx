import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoRange, DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import styles from '../playground.module.css'

export function MaxWidthGood() {
  const { t } = useTranslation()
  const [width, setWidth] = useState(280)

  return (
    <DemoStack>
      <DemoRange
        label={t('demo.column')}
        name="mw-good"
        min={240}
        max={320}
        value={width}
        valueLabel={`${width}px`}
        onChange={(e) => setWidth(Number(e.target.value))}
      />
      <div style={{ width, fontSize: 14, lineHeight: 1.5 }}>{t('demo.measureCopy')}</div>
    </DemoStack>
  )
}

export function MaxWidthBad() {
  const { t } = useTranslation()
  const [width, setWidth] = useState(380)

  return (
    <DemoStack>
      <DemoRange
        label={t('demo.column')}
        name="mw-bad"
        min={320}
        max={480}
        value={width}
        valueLabel={`${width}px`}
        onChange={(e) => setWidth(Number(e.target.value))}
      />
      <p style={{ width, fontSize: 14, lineHeight: 1.5 }}>{t('demo.fullBleedCopy')}</p>
    </DemoStack>
  )
}

export function VisualOrderGood() {
  const { t } = useTranslation()

  return (
    <DemoStack>
      <p className={styles.meta}>{t('demo.tabVisualOrder')}</p>
      <DemoRow>
        <Button variant="secondary">{t('demo.back')}</Button>
        <Button>{t('demo.continue')}</Button>
      </DemoRow>
    </DemoStack>
  )
}

export function VisualOrderBad() {
  const { t } = useTranslation()

  return (
    <DemoStack>
      <p className={styles.meta}>{t('demo.continueFirst')}</p>
      <div style={{ display: 'flex', flexDirection: 'row-reverse', gap: 8, justifyContent: 'flex-end' }}>
        <Button>{t('demo.continue')}</Button>
        <Button variant="secondary">{t('demo.back')}</Button>
      </div>
    </DemoStack>
  )
}
