import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, useReducedMotion } from 'motion/react'
import { DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import { Switch } from '@/shared/ui/switch'
import { EASE_OUT } from '@/shared/lib'
import styles from '../../playground.module.css'

const TRAVEL = 56

export function ReducedGood() {
  const { t } = useTranslation()
  const prefersReduced = useReducedMotion()
  const [override, setOverride] = useState(false)
  const [on, setOn] = useState(false)
  const reduce = Boolean(prefersReduced) || override

  return (
    <DemoStack>
      <Switch
        checked={override}
        label={t('demo.simulateReduced')}
        onChange={setOverride}
      />
      <Button variant="secondary" onClick={() => setOn((v) => !v)}>
        {t('demo.changeState')}
      </Button>
      <motion.div
        className={styles.tile}
        animate={{ x: on ? TRAVEL : 0 }}
        transition={reduce ? { duration: 0 } : { duration: 0.4, ease: EASE_OUT }}
      />
      <p className={styles.meta}>
        {reduce ? t('demo.instantState') : t('demo.spatialTravel')}
      </p>
    </DemoStack>
  )
}

export function ReducedBad() {
  const { t } = useTranslation()
  const prefersReduced = useReducedMotion()
  const [override, setOverride] = useState(false)
  const [on, setOn] = useState(false)

  return (
    <DemoStack>
      <Switch
        checked={override}
        label={t('demo.simulateReduced')}
        onChange={setOverride}
      />
      <Button variant="secondary" onClick={() => setOn((v) => !v)}>
        {t('demo.changeStateAlways')}
      </Button>
      <motion.div
        className={styles.tile}
        animate={{ x: on ? TRAVEL : 0, rotate: on ? 20 : 0 }}
        transition={prefersReduced ? { duration: 0 } : { duration: 0.8 }}
      />
      <p className={styles.meta}>{t('demo.ignoresReduced')}</p>
    </DemoStack>
  )
}
