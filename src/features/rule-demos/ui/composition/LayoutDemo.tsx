import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoFocus, DemoRange, DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import { Code } from '@/shared/ui/code'
import { Kbd } from '@/shared/ui/kbd'
import styles from '../playground.module.css'

const ORDER_GOOD_MARKUP = `<div class="row">
  <button>Back</button>
  <button>Continue</button>
</div>`

const ORDER_BAD_MARKUP = `<div class="row">
  <button>Continue</button>
  <button>Back</button>
</div>

.row { flex-direction: row-reverse; }`

export function MaxWidthGood() {
  const { t } = useTranslation()
  const [measure, setMeasure] = useState(56)

  return (
    <DemoStack>
      <DemoRange
        label={t('demo.column')}
        name="mw-good"
        min={40}
        max={62}
        value={measure}
        valueLabel={`${measure}ch`}
        onChange={(e) => setMeasure(Number(e.target.value))}
      />
      <p className={styles.copy} style={{ width: `min(100%, ${measure}ch)` }}>
        {t('demo.measureCopy')}
      </p>
    </DemoStack>
  )
}

export function MaxWidthBad() {
  const { t } = useTranslation()
  const [measure, setMeasure] = useState(28)

  return (
    <DemoStack>
      <DemoRange
        label={t('demo.column')}
        name="mw-bad"
        min={20}
        max={40}
        value={measure}
        valueLabel={`${measure}ch`}
        onChange={(e) => setMeasure(Number(e.target.value))}
      />
      <p className={styles.copy} style={{ width: '100%', minWidth: `${measure}ch` }}>
        {t('demo.fullBleedCopy')}
      </p>
    </DemoStack>
  )
}

export function VisualOrderGood() {
  const { t } = useTranslation()

  return (
    <DemoStack>
      <DemoRow>
        <Kbd>{t('demo.keyTab')}</Kbd>
        <span className={styles.meta}>{t('demo.tabVisualOrder')}</span>
      </DemoRow>
      <DemoFocus
        label={t('demo.focusNow')}
        startLabel={t('demo.tabFromHere')}
        emptyLabel={t('demo.focusOutside')}
      >
        <DemoRow>
          <Button variant="secondary">{t('demo.back')}</Button>
          <Button>{t('demo.continue')}</Button>
        </DemoRow>
      </DemoFocus>
      <Code label={t('demo.markup')} tone="do">
        {ORDER_GOOD_MARKUP}
      </Code>
    </DemoStack>
  )
}

export function VisualOrderBad() {
  const { t } = useTranslation()

  return (
    <DemoStack>
      <DemoRow>
        <Kbd>{t('demo.keyTab')}</Kbd>
        <span className={styles.meta}>{t('demo.continueFirst')}</span>
      </DemoRow>
      <DemoFocus
        label={t('demo.focusNow')}
        startLabel={t('demo.tabFromHere')}
        emptyLabel={t('demo.focusOutside')}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            gap: 'var(--space-2)',
            justifyContent: 'flex-end',
          }}
        >
          <Button>{t('demo.continue')}</Button>
          <Button variant="secondary">{t('demo.back')}</Button>
        </div>
      </DemoFocus>
      <Code label={t('demo.markup')} tone="dont">
        {ORDER_BAD_MARKUP}
      </Code>
    </DemoStack>
  )
}
