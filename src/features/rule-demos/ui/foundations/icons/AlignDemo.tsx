import { useTranslation } from 'react-i18next'
import { Inbox } from 'lucide-react'
import { DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function AlignGood() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <DemoRow>
        <button type="button" className={styles.chip}>
          <Inbox size={16} style={{ display: 'block' }} aria-hidden />
          {t('demo.inbox')}
        </button>
        <span className={styles.inlineIcon}>
          <Inbox size={16} style={{ display: 'block' }} aria-hidden />
          {t('demo.settings')}
        </span>
      </DemoRow>
    </DemoStack>
  )
}

export function AlignBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <DemoRow>
        <button
          type="button"
          className={styles.chip}
          style={{ display: 'inline-block', paddingTop: 10 }}
        >
          <Inbox
            size={16}
            style={{ display: 'inline', verticalAlign: 'sub', marginRight: 10 }}
          />
          {t('demo.inbox')}
        </button>
        <span>
          <Inbox size={16} style={{ display: 'inline', verticalAlign: 'super' }} />
          {t('demo.settings')}
        </span>
      </DemoRow>
      <p className={styles.meta}>{t('demo.iconDifferent')}</p>
    </DemoStack>
  )
}
