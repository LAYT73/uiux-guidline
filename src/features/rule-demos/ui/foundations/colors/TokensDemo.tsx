import { useTranslation } from 'react-i18next'
import { DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import styles from '../../playground.module.css'

export function TokensGood() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <p className={styles.meta}>{t('demo.tokenCard')}</p>
      <FakeCard>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, marginBottom: 8 }}>{t('demo.product')}</p>
        <p className={styles.meta} style={{ marginBottom: 12 }}>
          {t('demo.invoiceDue')}
        </p>
        <Button>{t('demo.submit')}</Button>
      </FakeCard>
    </DemoStack>
  )
}

export function TokensBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <p className={styles.meta}>{t('demo.hexCard')}</p>
      <div
        style={{
          background: '#1a1c22',
          color: '#f3e6c8',
          border: '1px solid #e8a54b',
          borderRadius: 12,
          padding: 16,
        }}
      >
        <p style={{ fontSize: 18, marginBottom: 8 }}>{t('demo.product')}</p>
        <p style={{ color: '#9a917c', marginBottom: 12, fontSize: 13 }}>{t('demo.invoiceDue')}</p>
        <button
          type="button"
          style={{
            background: '#e8a54b',
            color: '#1a1208',
            border: 0,
            borderRadius: 8,
            minHeight: 36,
            padding: '0 12px',
            cursor: 'pointer',
          }}
        >
          {t('demo.submit')}
        </button>
      </div>
    </DemoStack>
  )
}
