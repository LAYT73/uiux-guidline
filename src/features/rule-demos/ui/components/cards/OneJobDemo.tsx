import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Star } from 'lucide-react'
import { DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function OneJobGood() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  return (
    <DemoStack>
      <FakeCard>
        <button type="button" className={styles.chip} onClick={() => setOpen(true)} style={{ width: '100%' }}>
          {t('demo.northwind')}
        </button>
        <p className={styles.meta} style={{ marginTop: 8 }}>
          {t('demo.cardOpens')}
        </p>
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
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
          <button type="button" className={styles.chip} onClick={(e) => { e.stopPropagation(); setLog('titleRename') }}>
            {t('demo.northwind')}
          </button>
          <button
            type="button"
            className={styles.chip}
            onClick={(e) => {
              e.stopPropagation()
              setLog('starFavorite')
            }}
          >
            <Star size={14} />
          </button>
        </div>
      </FakeCard>
      </div>
      <p className={styles.meta}>{t(`demo.${log}`)}</p>
    </DemoStack>
  )
}
