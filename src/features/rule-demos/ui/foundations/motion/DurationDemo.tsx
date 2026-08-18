import { useState } from 'react'
import { motion } from 'motion/react'
import { DemoRange, DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function DurationGood() {
  const [on, setOn] = useState(false)
  const [ms, setMs] = useState(240)

  return (
    <DemoStack>
      <DemoRange
        label="Duration"
        name="dur-good"
        min={120}
        max={400}
        step={10}
        value={ms}
        valueLabel={`${ms}ms`}
        onChange={(event) => setMs(Number(event.target.value))}
      />
      <button type="button" className={styles.chip} onClick={() => setOn((v) => !v)}>
        Toggle
      </button>
      <motion.div
        className={styles.tile}
        animate={{ x: on ? 48 : 0 }}
        transition={{ duration: ms / 1000, ease: [0.22, 1, 0.36, 1] }}
      />
    </DemoStack>
  )
}

export function DurationBad() {
  const [on, setOn] = useState(false)

  return (
    <DemoStack>
      <button type="button" className={styles.chip} onClick={() => setOn((v) => !v)}>
        Toggle (2s bounce)
      </button>
      <motion.div
        className={styles.tile}
        animate={{ x: on ? 48 : 0, rotate: on ? 180 : 0 }}
        transition={{ duration: 2, type: 'spring', bounce: 0.7 }}
      />
      <p className={styles.meta}>You wait for the choreography to finish.</p>
    </DemoStack>
  )
}
