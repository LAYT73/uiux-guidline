import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import styles from '../playground.module.css'

export function SkeletonGood() {
  const { t } = useTranslation()
  const [ready, setReady] = useState(false)
  return (
    <DemoStack>
      <Button onClick={() => setReady((v) => !v)}>{ready ? t('demo.showSkeleton') : t('demo.showContent')}</Button>
      <FakeCard>
        {ready ? (
          <>
            <strong>{t('demo.northwind')}</strong>
            <p className={styles.meta}>{t('demo.members')}</p>
          </>
        ) : (
          <div aria-hidden>
            <div style={{ height: 14, width: '40%', background: 'var(--bg-muted)', borderRadius: 4 }} />
            <div style={{ height: 10, width: '60%', background: 'var(--bg-muted)', borderRadius: 4, marginTop: 8 }} />
          </div>
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
      <Button onClick={() => setReady((v) => !v)}>{ready ? t('demo.unload') : t('demo.load')}</Button>
      {ready ? (
        <FakeCard>
          <strong>{t('demo.northwind')}</strong>
          <p className={styles.meta}>{t('demo.members')}</p>
        </FakeCard>
      ) : (
        <p className={styles.meta} style={{ padding: 24, textAlign: 'center' }}>
          {t('demo.saving')}
        </p>
      )}
    </DemoStack>
  )
}

export function LayoutShiftGood() {
  const { t } = useTranslation()
  const [ready, setReady] = useState(false)
  return (
    <DemoStack>
      <Button onClick={() => setReady((v) => !v)}>{t('demo.toggleBanner')}</Button>
      <div style={{ minHeight: 72 }}>
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
      <Button onClick={() => setReady((v) => !v)}>{t('demo.toggleBanner')}</Button>
      {ready ? <FakeCard>{t('demo.surpriseBanner')}</FakeCard> : null}
      <Button>{t('demo.getShoved')}</Button>
    </DemoStack>
  )
}
