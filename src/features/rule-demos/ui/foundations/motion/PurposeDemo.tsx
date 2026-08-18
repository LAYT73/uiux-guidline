import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import { transitionBase } from '@/shared/lib'
import styles from '../../playground.module.css'

export function PurposeGood() {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()
  const [open, setOpen] = useState(false)

  const growth = reduceMotion
    ? {}
    : {
        initial: { height: 0, opacity: 0 },
        animate: { height: 'auto', opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: transitionBase,
      }

  return (
    <DemoStack>
      <Button variant="secondary" onClick={() => setOpen((v) => !v)}>
        {open ? t('demo.done') : t('demo.openPanel')}
      </Button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div style={{ overflow: 'hidden' }} {...growth}>
            <FakeCard>{t('demo.panelFromControl')}</FakeCard>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </DemoStack>
  )
}

export function PurposeBad() {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()
  const [spin, setSpin] = useState(0)

  return (
    <DemoStack>
      <motion.div
        animate={reduceMotion ? undefined : { rotate: spin }}
        transition={{ duration: 0.8 }}
        style={{ alignSelf: 'flex-start' }}
      >
        <Button variant="secondary" onClick={() => setSpin((v) => v + 360)}>
          {t('demo.save')}
        </Button>
      </motion.div>
      <p className={styles.meta}>{t('demo.everythingWiggles')}</p>
    </DemoStack>
  )
}
