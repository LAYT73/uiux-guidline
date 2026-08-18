import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function ReducedGood() {
  const prefersReduced = useReducedMotion()
  const [override, setOverride] = useState(false)
  const [on, setOn] = useState(false)
  const reduce = prefersReduced || override

  return (
    <DemoStack>
      <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <input type="checkbox" checked={override} onChange={(event) => setOverride(event.target.checked)} />
        Simulate reduced motion
      </label>
      <button type="button" className={styles.chip} onClick={() => setOn((v) => !v)}>
        Change state
      </button>
      <motion.div
        className={styles.tile}
        animate={{ x: on ? 56 : 0 }}
        transition={reduce ? { duration: 0 } : { duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <p className={styles.meta}>{reduce ? 'Instant state change.' : 'Spatial travel enabled.'}</p>
    </DemoStack>
  )
}

export function ReducedBad() {
  const [on, setOn] = useState(false)

  return (
    <DemoStack>
      <button type="button" className={styles.chip} onClick={() => setOn((v) => !v)}>
        Change state (always animates)
      </button>
      <motion.div
        className={styles.tile}
        animate={{ x: on ? 56 : 0, rotate: on ? 20 : 0 }}
        transition={{ duration: 0.8 }}
      />
      <p className={styles.meta}>Ignores prefers-reduced-motion.</p>
    </DemoStack>
  )
}
