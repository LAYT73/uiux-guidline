import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function PurposeGood() {
  const [open, setOpen] = useState(false)

  return (
    <DemoStack>
      <button type="button" className={styles.chip} onClick={() => setOpen((v) => !v)}>
        {open ? 'Close panel' : 'Open panel'}
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
            <FakeCard>The panel grows from the control that opened it.</FakeCard>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </DemoStack>
  )
}

export function PurposeBad() {
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
        Save
      </motion.button>
      <p className={styles.meta}>The spin does not map to saving.</p>
    </DemoStack>
  )
}
