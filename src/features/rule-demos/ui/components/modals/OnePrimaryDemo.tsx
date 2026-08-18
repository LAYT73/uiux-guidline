import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import { Modal } from '@/shared/ui/modal'
import styles from '../../playground.module.css'

export function OnePrimaryGood() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [log, setLog] = useState('')

  return (
    <DemoStack>
      <Button variant="danger" onClick={() => setOpen(true)}>
        {t('demo.deleteProject')}
      </Button>
      <Modal open={open} title={t('demo.deleteNamed', { name: t('demo.project') })} onClose={() => setOpen(false)}>
        <p className={styles.meta} style={{ marginBottom: 12 }}>
          {t('demo.cannotUndo')}
        </p>
        <DemoRow>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            {t('demo.cancel')}
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              setLog(t('demo.deletedAlert'))
              setOpen(false)
            }}
          >
            {t('demo.delete')}
          </Button>
        </DemoRow>
      </Modal>
      {log ? <p className={styles.meta}>{log}</p> : null}
    </DemoStack>
  )
}

export function OnePrimaryBad() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  return (
    <DemoStack>
      <Button onClick={() => setOpen(true)}>{t('demo.deleteProject')}</Button>
      <Modal open={open} title={t('demo.areYouSure')} onClose={() => setOpen(false)}>
        <DemoRow>
          <Button onClick={() => setOpen(false)}>{t('demo.cancel')}</Button>
          <Button onClick={() => setOpen(false)}>{t('demo.delete')}</Button>
        </DemoRow>
      </Modal>
    </DemoStack>
  )
}
