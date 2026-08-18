import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MoreHorizontal } from 'lucide-react'
import { DemoRange, DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import { IconButton } from '@/shared/ui/icon-button'
import { Tag } from '@/shared/ui/tag'
import styles from '../playground.module.css'

export function CriticalActionsGood() {
  const { t } = useTranslation()
  const [width, setWidth] = useState(280)

  return (
    <DemoStack>
      <DemoRange
        label={t('demo.frame')}
        name="resp-good"
        min={240}
        max={360}
        value={width}
        valueLabel={`${width}px`}
        onChange={(e) => setWidth(Number(e.target.value))}
      />
      <div className={styles.frame} style={{ width }}>
        <p className={styles.meta}>{t('demo.editorChrome')}</p>
        <div className={styles.frameSlot}>
          <Button>{t('demo.publish')}</Button>
        </div>
      </div>
    </DemoStack>
  )
}

export function CriticalActionsBad() {
  const { t } = useTranslation()
  const [hover, setHover] = useState(false)

  return (
    <DemoStack>
      <div
        className={styles.frame}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <p className={styles.meta}>{t('demo.editorChrome')}</p>
        <div className={styles.frameSlot}>
          {hover ? (
            <Button>{t('demo.publish')}</Button>
          ) : (
            <Tag>{t('demo.hoverChrome')}</Tag>
          )}
        </div>
      </div>
    </DemoStack>
  )
}

export function TouchGood() {
  const { t } = useTranslation()
  const [hits, setHits] = useState(0)

  return (
    <DemoStack>
      <IconButton
        label={t('demo.more')}
        className={styles.touchTarget}
        onClick={() => setHits((n) => n + 1)}
      >
        <MoreHorizontal size={18} aria-hidden />
      </IconButton>
      <p className={styles.meta}>{t('demo.hits', { n: hits })}</p>
    </DemoStack>
  )
}

export function TouchBad() {
  const { t } = useTranslation()
  const [hits, setHits] = useState(0)

  return (
    <DemoStack>
      <button
        type="button"
        aria-label={t('demo.more')}
        className={styles.tinyTarget}
        onClick={() => setHits((n) => n + 1)}
      >
        <MoreHorizontal size={12} aria-hidden />
      </button>
      <p className={styles.meta}>{t('demo.hits', { n: hits })}</p>
    </DemoStack>
  )
}
