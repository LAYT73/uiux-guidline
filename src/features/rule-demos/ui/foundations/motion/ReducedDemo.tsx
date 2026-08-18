import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, useReducedMotion } from 'motion/react'
import { DemoStack } from '@/shared/ui/demo-kit'
import { Switch } from '@/shared/ui/switch'
import styles from '../../playground.module.css'

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
      <button type="button" className={styles.chip} onClick={() => setOn((v) => !v)}>
        {t('demo.changeState')}
      </button>
      <motion.div
        className={styles.tile}
        animate={{ x: on ? 56 : 0 }}
        transition={reduce ? { duration: 0 } : { duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <p className={styles.meta}>{reduce ? t('demo.instantState') : t('demo.spatialTravel')}</p>
    </DemoStack>
  )
}

export function ReducedBad() {
  const { t } = useTranslation()
  const [on, setOn] = useState(false)

  return (
    <DemoStack>
      <button type="button" className={styles.chip} onClick={() => setOn((v) => !v)}>
        {t('demo.changeStateAlways')}
      </button>
      <motion.div
        className={styles.tile}
        animate={{ x: on ? 56 : 0, rotate: on ? 20 : 0 }}
        transition={{ duration: 0.8 }}
      />
      <p className={styles.meta}>{t('demo.ignoresReduced')}</p>
    </DemoStack>
  )
}
