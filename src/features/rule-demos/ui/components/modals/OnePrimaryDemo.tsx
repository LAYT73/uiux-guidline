import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoStack } from '@/shared/ui/demo-kit'
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
      <Modal
        open={open}
        tone="danger"
        title={t('demo.deleteNamed', { name: t('demo.project') })}
        description={t('demo.cannotUndo')}
        closeLabel={t('demo.cancel')}
        onClose={() => setOpen(false)}
        footer={
          <>
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
          </>
        }
      />
      {log ? <p className={styles.ok}>{log}</p> : null}
    </DemoStack>
  )
}

export function OnePrimaryBad() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  return (
    <DemoStack>
      <Button onClick={() => setOpen(true)}>{t('demo.deleteProject')}</Button>
      <Modal
        open={open}
        title={t('demo.areYouSure')}
        closeLabel={t('demo.cancel')}
        onClose={() => setOpen(false)}
        footer={
          <>
            <Button onClick={() => setOpen(false)}>{t('demo.cancel')}</Button>
            <Button onClick={() => setOpen(false)}>{t('demo.delete')}</Button>
          </>
        }
      />
    </DemoStack>
  )
}
