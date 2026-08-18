import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Star } from 'lucide-react'
import { DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import styles from '../../playground.module.css'

export function OneJobGood() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  return (
    <DemoStack>
      <FakeCard>
        <div className={styles.mini}>
          <Button
            variant="secondary"
            className={styles.fullWidth}
            onClick={() => setOpen(true)}
          >
            {t('demo.northwind')}
          </Button>
          <p className={styles.meta}>{t('demo.cardOpens')}</p>
        </div>
      </FakeCard>
      {open ? <p className={styles.ok}>{t('demo.openedProject')}</p> : null}
    </DemoStack>
  )
}

export function OneJobBad() {
  const { t } = useTranslation()
  const [log, setLog] = useState('clickCardParts')

  return (
    <DemoStack>
      <div onClick={() => setLog('bodyPreview')} style={{ cursor: 'pointer' }}>
        <FakeCard>
          <div className={styles.navRow} style={{ justifyContent: 'space-between' }}>
            <button
              type="button"
              className={styles.chip}
              onClick={(event) => {
                event.stopPropagation()
                setLog('titleRename')
              }}
            >
              {t('demo.northwind')}
            </button>
            <button
              type="button"
              className={styles.chip}
              aria-label={t('demo.starred')}
              onClick={(event) => {
                event.stopPropagation()
                setLog('starFavorite')
              }}
            >
              <Star size={14} aria-hidden />
            </button>
          </div>
        </FakeCard>
      </div>
      <p className={styles.meta}>{t(`demo.${log}`)}</p>
    </DemoStack>
  )
}
