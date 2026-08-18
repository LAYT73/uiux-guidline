import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoFocus, DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import { Code } from '@/shared/ui/code'
import { Input } from '@/shared/ui/input'
import { Kbd } from '@/shared/ui/kbd'
import { Modal } from '@/shared/ui/modal'
import styles from '../../playground.module.css'

const GOOD_MARKUP = `<div role="dialog"
     aria-modal="true"
     aria-labelledby="title"
     tabindex="-1">
  <h2 id="title">Rename file</h2>
</div>`

const BAD_MARKUP = `<div class="overlay">
  <div class="panel">
    <p class="title">Rename file</p>
  </div>
</div>`

export function FocusTrapGood() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('report.csv')

  return (
    <DemoStack>
      <Button onClick={() => setOpen(true)}>{t('demo.openModal')}</Button>
      <DemoRow>
        <Kbd>{t('demo.keyTab')}</Kbd>
        <Kbd>{t('demo.keyEsc')}</Kbd>
        <span className={styles.meta}>{t('demo.keyboardHint')}</span>
      </DemoRow>
      <Modal
        open={open}
        title={t('demo.renameFile')}
        closeLabel={t('demo.cancel')}
        onClose={() => setOpen(false)}
        footer={
          <>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              {t('demo.cancel')}
            </Button>
            <Button onClick={() => setOpen(false)}>{t('demo.done')}</Button>
          </>
        }
      >
        <Input
          label={t('demo.fileName')}
          name="rename-file"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Modal>
      <Code label={t('demo.markup')} tone="do">
        {GOOD_MARKUP}
      </Code>
    </DemoStack>
  )
}

export function FocusTrapBad() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  return (
    <DemoStack>
      <DemoFocus
        label={t('demo.focusNow')}
        startLabel={t('demo.tabFromHere')}
        emptyLabel={t('demo.focusOutside')}
      >
        <Button onClick={() => setOpen(true)}>{t('demo.openFakeOverlay')}</Button>
        {open ? (
          <div className={styles.fakeOverlay}>
            <div className={styles.fakePanel}>
              <p className={styles.fakeTitle}>{t('demo.renameFile')}</p>
              <p className={styles.meta}>{t('demo.fakeModal')}</p>
              <div className={styles.fakeActions}>
                <Button variant="secondary" size="sm" onClick={() => setOpen(false)}>
                  {t('demo.done')}
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </DemoFocus>
      <Code label={t('demo.markup')} tone="dont">
        {BAD_MARKUP}
      </Code>
    </DemoStack>
  )
}
