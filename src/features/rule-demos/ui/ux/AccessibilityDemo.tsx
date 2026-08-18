import { Trash2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import styles from '../playground.module.css'

export function FocusGood() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <p className={styles.meta}>{t('demo.tabFocus')}</p>
      <DemoRow>
        <Button variant="secondary">{t('demo.one')}</Button>
        <Button>{t('demo.two')}</Button>
      </DemoRow>
    </DemoStack>
  )
}

export function FocusBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <p className={styles.meta}>{t('demo.outlineNone')}</p>
      <button
        type="button"
        className={styles.chip}
        style={{ outline: 'none' }}
        onMouseDown={(e) => e.preventDefault()}
      >
        {t('demo.focusMe')}
      </button>
    </DemoStack>
  )
}

export function IconNameGood() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <button type="button" className={styles.chip} aria-label={t('demo.deleteDraft')} onClick={() => undefined}>
        <Trash2 size={16} />
      </button>
      <p className={styles.meta}>{t('demo.announcesDelete')}</p>
    </DemoStack>
  )
}

export function IconNameBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <button type="button" className={styles.chip} onClick={() => undefined}>
        <Trash2 size={16} />
      </button>
      <p className={styles.meta}>{t('demo.noName')}</p>
    </DemoStack>
  )
}

export function SkipLinkGood() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <p className={styles.meta}>{t('demo.skipHint')}</p>
    </DemoStack>
  )
}

export function SkipLinkBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {Array.from({ length: 8 }, (_, i) => (
          <a key={i} href={`#n${i}`} className={styles.chip} onClick={(e) => e.preventDefault()}>
            {t('demo.linkN', { n: i + 1 })}
          </a>
        ))}
      </div>
      <p className={styles.meta}>{t('demo.noSkip')}</p>
    </DemoStack>
  )
}
