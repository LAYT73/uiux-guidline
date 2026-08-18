import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import { Modal } from '@/shared/ui/modal'
import styles from '../playground.module.css'

export function ConfirmGood() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [gone, setGone] = useState(false)
  return (
    <DemoStack>
      <Button variant="danger" disabled={gone} onClick={() => setOpen(true)}>
        {t('demo.deleteFile')}
      </Button>
      <Modal open={open} title={t('demo.deleteNamed', { name: 'report.csv' })} onClose={() => setOpen(false)}>
        <p className={styles.meta} style={{ marginBottom: 12 }}>{t('demo.cannotUndo')}</p>
        <Button variant="secondary" onClick={() => setOpen(false)}>{t('demo.cancel')}</Button>{' '}
        <Button variant="danger" onClick={() => { setGone(true); setOpen(false) }}>{t('demo.delete')}</Button>
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
      <label className={styles.field}>
        <span className={styles.label}>{t('demo.start')}</span>
        <input className={styles.input} type="date" value={start} onChange={(e) => setStart(e.target.value)} />
      </label>
      <label className={styles.field}>
        <span className={styles.label}>{t('demo.end')}</span>
        <input className={styles.input} type="date" min={start} value={end} onChange={(e) => setEnd(e.target.value)} />
      </label>
    </DemoStack>
  )
}

export function ConstraintsBad() {
  const { t } = useTranslation()
  const [msg, setMsg] = useState('')
  return (
    <DemoStack>
      <input className={styles.input} type="date" defaultValue="2026-08-10" />
      <input className={styles.input} type="date" defaultValue="2026-08-01" />
      <Button onClick={() => setMsg(t('demo.endBeforeStart'))}>{t('demo.submit')}</Button>
      {msg ? <p className={styles.warn}>{msg}</p> : null}
    </DemoStack>
  )
}
