import { useTranslation } from 'react-i18next'
import { Inbox } from 'lucide-react'
import { DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function AlignGood() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <button
        type="button"
        className={styles.chip}
        style={{ display: 'inline-flex', alignItems: 'center', gap: 8, lineHeight: 1 }}
      >
        <Inbox size={16} style={{ display: 'block' }} />
        {t('demo.inbox')}
      </button>
    </DemoStack>
  )
}

export function AlignBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <button type="button" className={styles.chip} style={{ display: 'inline-block', paddingTop: 10 }}>
        <Inbox size={16} style={{ display: 'inline', verticalAlign: 'sub', marginRight: 10 }} />
        {t('demo.inbox')}
      </button>
      <p className={styles.meta}>{t('demo.iconDifferent')}</p>
    </DemoStack>
  )
}
