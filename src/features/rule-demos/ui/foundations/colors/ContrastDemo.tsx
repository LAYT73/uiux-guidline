import { useState } from 'react'
import { DemoRange, DemoStack } from '@/shared/ui/demo-kit'
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
  const [bg, setBg] = useState(18)
  const [fg, setFg] = useState(236)
  const background = grey(bg)
  const color = grey(fg)
  const ratio = contrast(background, color)

  return (
    <DemoStack>
      <DemoRange
        label="Background"
        name="c-bg-good"
        min={0}
        max={60}
        value={bg}
        onChange={(event) => setBg(Number(event.target.value))}
      />
      <DemoRange
        label="Text"
        name="c-fg-good"
        min={180}
        max={255}
        value={fg}
        onChange={(event) => setFg(Number(event.target.value))}
      />
      <p className={ratio >= 4.5 ? styles.ok : styles.warn}>{ratio.toFixed(2)} : 1</p>
      <p style={{ background, color, padding: 12, borderRadius: 8 }}>
        Body text must stay at or above 4.5:1.
      </p>
    </DemoStack>
  )
}

export function ContrastBad() {
  const [bg, setBg] = useState(48)
  const [fg, setFg] = useState(92)
  const background = grey(bg)
  const color = grey(fg)
  const ratio = contrast(background, color)

  return (
    <DemoStack>
      <DemoRange
        label="Background"
        name="c-bg-bad"
        min={30}
        max={80}
        value={bg}
        onChange={(event) => setBg(Number(event.target.value))}
      />
      <DemoRange
        label="Text"
        name="c-fg-bad"
        min={70}
        max={120}
        value={fg}
        onChange={(event) => setFg(Number(event.target.value))}
      />
      <p className={styles.warn}>{ratio.toFixed(2)} : 1</p>
      <p style={{ background, color, padding: 12, borderRadius: 8 }}>Looks soft. Fails in daylight.</p>
    </DemoStack>
  )
}
