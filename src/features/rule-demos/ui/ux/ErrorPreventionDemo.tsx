import { useId, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import { Checkbox } from '@/shared/ui/checkbox'
import { Input } from '@/shared/ui/input'
import { Modal } from '@/shared/ui/modal'
import styles from '../playground.module.css'

export function ConfirmGood() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [acknowledged, setAcknowledged] = useState(false)
  const [gone, setGone] = useState(false)

  const close = () => {
    setOpen(false)
    setAcknowledged(false)
  }

  return (
    <DemoStack>
      <Button variant="danger" disabled={gone} onClick={() => setOpen(true)}>
        {t('demo.deleteFile')}
      </Button>
      <Modal
        open={open}
        tone="danger"
        title={t('demo.deleteNamed', { name: 'report.csv' })}
        description={t('demo.cannotUndo')}
        closeLabel={t('demo.cancel')}
        onClose={close}
        footer={
          <>
            <Button variant="secondary" onClick={close}>
              {t('demo.cancel')}
            </Button>
            <Button
              variant="danger"
              disabled={!acknowledged}
              onClick={() => {
                setGone(true)
                close()
              }}
            >
              {t('demo.delete')}
            </Button>
          </>
        }
      >
        <Checkbox
          checked={acknowledged}
          label={t('demo.confirmDelete')}
          onChange={setAcknowledged}
        />
      </Modal>
      {gone ? <p className={styles.meta}>{t('demo.deletedNamed')}</p> : null}
    </DemoStack>
  )
}

export function ConfirmBad() {
  const { t } = useTranslation()
  const [gone, setGone] = useState(false)
  return (
    <DemoStack>
      <Button variant="danger" disabled={gone} onClick={() => setGone(true)}>
        {t('demo.delete')}
      </Button>
      {gone ? <p className={styles.warn}>{t('demo.goneNoUndo')}</p> : null}
    </DemoStack>
  )
}

export function ConstraintsGood() {
  const { t } = useTranslation()
  const [start, setStart] = useState('2026-08-01')
  const [end, setEnd] = useState('2026-08-10')

  return (
    <DemoStack>
      <Input
        label={t('demo.start')}
        name="constraints-start"
        type="date"
        value={start}
        onChange={(event) => setStart(event.target.value)}
      />
      <Input
        label={t('demo.end')}
        name="constraints-end"
        type="date"
        min={start}
        value={end}
        onChange={(event) => setEnd(event.target.value)}
      />
    </DemoStack>
  )
}

export function ConstraintsBad() {
  const { t } = useTranslation()
  const startId = useId()
  const endId = useId()
  const [message, setMessage] = useState('')

  return (
    <DemoStack>
      <div className={styles.field}>
        <label className={styles.label} htmlFor={startId}>
          {t('demo.start')}
        </label>
        <input
          id={startId}
          className={styles.input}
          type="date"
          defaultValue="2026-08-10"
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor={endId}>
          {t('demo.end')}
        </label>
        <input
          id={endId}
          className={styles.input}
          type="date"
          defaultValue="2026-08-01"
        />
      </div>
      <Button onClick={() => setMessage(t('demo.endBeforeStart'))}>
        {t('demo.submit')}
      </Button>
      {message ? <p className={styles.warn}>{message}</p> : null}
    </DemoStack>
  )
}
