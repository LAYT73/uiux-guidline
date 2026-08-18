import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, useReducedMotion } from 'motion/react'
import { DemoRange, DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import { EASE_OUT } from '@/shared/lib'
import styles from '../../playground.module.css'

const TRAVEL = 48

export function DurationGood() {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()
  const [on, setOn] = useState(false)
  const [ms, setMs] = useState(240)

  return (
    <DemoStack>
      <DemoRange
        label={t('demo.duration')}
        name="dur-good"
        min={150}
        max={280}
        step={10}
        value={ms}
        valueLabel={`${ms}ms`}
        onChange={(event) => setMs(Number(event.target.value))}
      />
      <Button variant="secondary" onClick={() => setOn((v) => !v)}>
        {t('demo.toggle')}
      </Button>
      <motion.div
        className={styles.tile}
        animate={{ x: on ? TRAVEL : 0 }}
        transition={
          reduceMotion ? { duration: 0 } : { duration: ms / 1000, ease: EASE_OUT }
        }
      />
    </DemoStack>
  )
}

export function DurationBad() {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()
  const [on, setOn] = useState(false)

  return (
    <DemoStack>
      <Button variant="secondary" onClick={() => setOn((v) => !v)}>
        {t('demo.toggleSlow')}
      </Button>
      <motion.div
        className={styles.tile}
        animate={{ x: on ? TRAVEL : 0, rotate: on ? 180 : 0 }}
        transition={
          reduceMotion ? { duration: 0 } : { duration: 2, type: 'spring', bounce: 0.7 }
        }
      />
      <p className={styles.meta}>{t('demo.waitChoreography')}</p>
    </DemoStack>
  )
}
