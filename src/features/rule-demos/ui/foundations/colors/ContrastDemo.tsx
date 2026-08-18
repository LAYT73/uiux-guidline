import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoRange, DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import { Tag } from '@/shared/ui/tag'
import styles from '../../playground.module.css'

function hexToRgb(hex: string) {
  const value = hex.replace('#', '')
  const n = Number.parseInt(value, 16)
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 }
}

function luminance(hex: string) {
  const { r, g, b } = hexToRgb(hex)
  const toLin = (c: number) => {
    const s = c / 255
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
  }
  return 0.2126 * toLin(r) + 0.7152 * toLin(g) + 0.0722 * toLin(b)
}

function contrast(a: string, b: string) {
  const l1 = luminance(a)
  const l2 = luminance(b)
  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)
  return (lighter + 0.05) / (darker + 0.05)
}

function grey(level: number) {
  const h = level.toString(16).padStart(2, '0')
  return `#${h}${h}${h}`
}

export function ContrastGood() {
  const { t } = useTranslation()
  const [bg, setBg] = useState(16)
  const [fg, setFg] = useState(240)
  const background = grey(bg)
  const color = grey(fg)
  const ratio = contrast(background, color)

  return (
    <DemoStack>
      <DemoRange
        label={t('demo.background')}
        name="c-bg-good"
        min={0}
        max={28}
        value={bg}
        valueLabel={grey(bg)}
        onChange={(event) => setBg(Number(event.target.value))}
      />
      <DemoRange
        label={t('demo.text')}
        name="c-fg-good"
        min={220}
        max={255}
        value={fg}
        valueLabel={grey(fg)}
        onChange={(event) => setFg(Number(event.target.value))}
      />
      <DemoRow>
        <Tag tone="accent">{ratio.toFixed(2)} : 1</Tag>
        <span className={styles.ok}>{t('demo.passesAa')}</span>
      </DemoRow>
      <p className={styles.swatch} style={{ background, color }}>
        {t('demo.contrastGood')}
      </p>
    </DemoStack>
  )
}

export function ContrastBad() {
  const { t } = useTranslation()
  const [bg, setBg] = useState(48)
  const [fg, setFg] = useState(92)
  const background = grey(bg)
  const color = grey(fg)
  const ratio = contrast(background, color)

  return (
    <DemoStack>
      <DemoRange
        label={t('demo.background')}
        name="c-bg-bad"
        min={30}
        max={80}
        value={bg}
        valueLabel={grey(bg)}
        onChange={(event) => setBg(Number(event.target.value))}
      />
      <DemoRange
        label={t('demo.text')}
        name="c-fg-bad"
        min={70}
        max={120}
        value={fg}
        valueLabel={grey(fg)}
        onChange={(event) => setFg(Number(event.target.value))}
      />
      <DemoRow>
        <Tag>{ratio.toFixed(2)} : 1</Tag>
        <span className={styles.warn}>{t('demo.failsAa')}</span>
      </DemoRow>
      <p className={styles.swatch} style={{ background, color }}>
        {t('demo.contrastBad')}
      </p>
    </DemoStack>
  )
}
