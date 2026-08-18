import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import { Skeleton } from '@/shared/ui/skeleton'
import { cx } from '@/shared/lib'
import styles from '../playground.module.css'

export function SkeletonGood() {
  const { t } = useTranslation()
  const [ready, setReady] = useState(false)
  return (
    <DemoStack>
      <Button variant="secondary" onClick={() => setReady((v) => !v)}>
        {ready ? t('demo.showSkeleton') : t('demo.showContent')}
      </Button>
      <FakeCard>
        {ready ? (
          <div className={styles.mini}>
            <strong>{t('demo.northwind')}</strong>
            <p className={styles.meta}>{t('demo.members')}</p>
          </div>
        ) : (
          <Skeleton lines={2} />
        )}
      </FakeCard>
    </DemoStack>
  )
}

export function SkeletonBad() {
  const { t } = useTranslation()
  const [ready, setReady] = useState(false)
  return (
    <DemoStack>
      <Button variant="secondary" onClick={() => setReady((v) => !v)}>
        {ready ? t('demo.unload') : t('demo.load')}
      </Button>
      {ready ? (
        <FakeCard>
          <div className={styles.mini}>
            <strong>{t('demo.northwind')}</strong>
            <p className={styles.meta}>{t('demo.members')}</p>
          </div>
        </FakeCard>
      ) : (
        <p className={cx(styles.meta, styles.centerNote)}>{t('demo.saving')}</p>
      )}
    </DemoStack>
  )
}

export function LayoutShiftGood() {
  const { t } = useTranslation()
  const [ready, setReady] = useState(false)
  return (
    <DemoStack>
      <Button variant="secondary" onClick={() => setReady((v) => !v)}>
        {t('demo.toggleBanner')}
      </Button>
      <div className={styles.reserve}>
        {ready ? <FakeCard>{t('demo.lateBannerOk')}</FakeCard> : null}
      </div>
      <Button>{t('demo.stayPut')}</Button>
    </DemoStack>
  )
}

export function LayoutShiftBad() {
  const { t } = useTranslation()
  const [ready, setReady] = useState(false)
  return (
    <DemoStack>
      <Button variant="secondary" onClick={() => setReady((v) => !v)}>
        {t('demo.toggleBanner')}
      </Button>
      {ready ? <FakeCard>{t('demo.surpriseBanner')}</FakeCard> : null}
      <Button>{t('demo.getShoved')}</Button>
    </DemoStack>
  )
}
