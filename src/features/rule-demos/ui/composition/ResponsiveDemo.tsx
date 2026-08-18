import { useState } from 'react'
import { MoreHorizontal } from 'lucide-react'
import { DemoRange, DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import { IconButton } from '@/shared/ui/icon-button'
import styles from '../playground.module.css'

export function CriticalActionsGood() {
  const [width, setWidth] = useState(280)
  return (
    <DemoStack>
      <DemoRange label="Frame" name="resp-good" min={180} max={360} value={width} valueLabel={`${width}px`} onChange={(e) => setWidth(Number(e.target.value))} />
      <div style={{ width, border: '1px dashed var(--border)', padding: 12, borderRadius: 12 }}>
        <p className={styles.meta}>Editor chrome</p>
        <div style={{ marginTop: 12 }}>
          <Button>Publish</Button>
        </div>
      </div>
    </DemoStack>
  )
}

export function CriticalActionsBad() {
  const [hover, setHover] = useState(false)
  return (
    <DemoStack>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ border: '1px dashed var(--border)', padding: 8, borderRadius: 12 }}
      >
        <span className={styles.meta}>Hover the chrome</span>
        {hover ? <Button>Publish</Button> : <span className={styles.chip}>···</span>}
      </div>
    </DemoStack>
  )
}

export function TouchGood() {
  const [hits, setHits] = useState(0)
  return (
    <DemoStack>
      <IconButton label="More" onClick={() => setHits((n) => n + 1)}>
        <MoreHorizontal size={18} />
      </IconButton>
      <p className={styles.meta}>44px target. Hits: {hits}</p>
    </DemoStack>
  )
}

export function TouchBad() {
  const [hits, setHits] = useState(0)
  return (
    <DemoStack>
      <button
        type="button"
        aria-label="More"
        onClick={() => setHits((n) => n + 1)}
        style={{ width: 22, height: 22, padding: 0, border: '1px solid var(--border)', background: 'var(--bg-elevated)', color: 'inherit' }}
      >
        <MoreHorizontal size={12} />
      </button>
      <p className={styles.meta}>22px target. Hits: {hits}</p>
    </DemoStack>
  )
}
