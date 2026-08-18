import { useTranslation } from 'react-i18next'
import { DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import { Input } from '@/shared/ui/input'
import { Tag } from '@/shared/ui/tag'
import styles from '../../playground.module.css'

export function PillFormGood() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <Input
        label={t('demo.searchProjects')}
        name="pill-good"
        defaultValue={t('demo.northwind')}
      />
      <DemoRow>
        <Tag tone="accent">{t('demo.design')}</Tag>
        <Tag>{t('demo.on')}</Tag>
      </DemoRow>
    </DemoStack>
  )
}

export function PillFormBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <label className={styles.field}>
        <span className={styles.label}>{t('demo.searchProjects')}</span>
        <input
          className={styles.input}
          defaultValue={t('demo.northwind')}
          style={{ borderRadius: 'var(--radius-full)', paddingInline: 'var(--space-5)' }}
        />
      </label>
      <DemoRow>
        <span className={styles.chip} style={{ borderRadius: 2 }}>
          {t('demo.design')}
        </span>
        <span className={styles.chip} style={{ borderRadius: 2 }}>
          {t('demo.on')}
        </span>
      </DemoRow>
    </DemoStack>
  )
}
