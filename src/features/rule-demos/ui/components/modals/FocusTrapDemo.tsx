import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import { Modal } from '@/shared/ui/modal'
import styles from '../../playground.module.css'

export function FocusTrapGood() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  return (
    <DemoStack>
      <Button onClick={() => setOpen(true)}>{t('demo.openModal')}</Button>
      <Modal open={open} title={t('demo.renameFile')} onClose={() => setOpen(false)}>
        <p className={styles.meta} style={{ marginBottom: 12 }}>
          {t('demo.keyboardHint')}
        </p>
        <Button onClick={() => setOpen(false)}>{t('demo.done')}</Button>
      </Modal>
    </DemoStack>
  )
}

export function FocusTrapBad() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  return (
    <DemoStack>
      <Button onClick={() => setOpen(true)}>{t('demo.openFakeOverlay')}</Button>
      {open ? (
        <div
          style={{
            marginTop: 8,
            padding: 16,
            background: 'var(--overlay)',
            borderRadius: 12,
            color: 'var(--text)',
          }}
        >
          <p>{t('demo.fakeModal')}</p>
          <button type="button" className={styles.chip} onClick={() => setOpen(false)}>
            {t('demo.done')}
          </button>
        </div>
      ) : null}
    </DemoStack>
  )
}
