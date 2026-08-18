import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoRange, DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function HierarchyGood() {
  const { t } = useTranslation()
  const [display, setDisplay] = useState(28)

  return (
    <DemoStack>
      <DemoRange
        label={t('demo.displaySize')}
        name="type-h-good"
        min={24}
        max={36}
        value={display}
        valueLabel={`${display}px`}
        onChange={(event) => setDisplay(Number(event.target.value))}
      />
      <div className={styles.mini}>
        <p className={styles.demoH1} style={{ fontSize: display }}>
          {t('demo.invoice')}
        </p>
        <p className={styles.meta}>{t('demo.invoiceDue')}</p>
        <p className={styles.copy}>{t('demo.invoiceBody')}</p>
      </div>
    </DemoStack>
  )
}

export function HierarchyBad() {
  const { t } = useTranslation()
  const [size, setSize] = useState(16)

  return (
    <DemoStack>
      <DemoRange
        label={t('demo.everything')}
        name="type-h-bad"
        min={14}
        max={20}
        value={size}
        valueLabel={`${size}px`}
        onChange={(event) => setSize(Number(event.target.value))}
      />
      <div className={styles.tight} style={{ fontSize: size, fontWeight: 500 }}>
        <p>{t('demo.invoice')}</p>
        <p>{t('demo.invoiceDue')}</p>
        <p>{t('demo.invoiceBody')}</p>
      </div>
    </DemoStack>
  )
}
