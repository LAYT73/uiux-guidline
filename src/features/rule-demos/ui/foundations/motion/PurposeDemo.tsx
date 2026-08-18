import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'motion/react'
import { DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function PurposeGood() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  return (
    <DemoStack>
      <button type="button" className={styles.chip} onClick={() => setOpen((v) => !v)}>
        {open ? t('demo.done') : t('demo.openPanel')}
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <FakeCard>{t('demo.panelFromControl')}</FakeCard>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </DemoStack>
  )
}

export function PurposeBad() {
  const { t } = useTranslation()
  const [spin, setSpin] = useState(0)

  return (
    <DemoStack>
      <motion.button
        type="button"
        className={styles.chip}
        animate={{ rotate: spin }}
        transition={{ duration: 0.8 }}
        onClick={() => setSpin((v) => v + 360)}
      >
        {t('demo.save')}
      </motion.button>
      <p className={styles.meta}>{t('demo.everythingWiggles')}</p>
    </DemoStack>
  )
}
