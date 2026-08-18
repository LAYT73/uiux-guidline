import { useState } from 'react'
import { DemoRange, DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import styles from '../playground.module.css'

export function MaxWidthGood() {
  const [width, setWidth] = useState(280)
  return (
    <DemoStack>
      <DemoRange label="Column" name="mw-good" min={200} max={420} value={width} valueLabel={`${width}px`} onChange={(e) => setWidth(Number(e.target.value))} />
      <div style={{ width, maxWidth: 320, fontSize: 14, lineHeight: 1.5 }}>
        Reading and forms stay on a measure. The column can grow; the text does not become a horizon.
      </div>
    </DemoStack>
  )
}

export function MaxWidthBad() {
  const [width, setWidth] = useState(380)
  return (
    <DemoStack>
      <DemoRange label="Column" name="mw-bad" min={240} max={480} value={width} valueLabel={`${width}px`} onChange={(e) => setWidth(Number(e.target.value))} />
      <p style={{ width, fontSize: 14, lineHeight: 1.5 }}>
        This paragraph always fills the frame, even when the frame is a monitor. The next line is a long swim back.
      </p>
    </DemoStack>
  )
}

export function VisualOrderGood() {
  return (
    <DemoStack>
      <p className={styles.meta}>Tab through. DOM order is visual order.</p>
      <DemoRow>
        <Button variant="secondary">Back</Button>
        <Button>Continue</Button>
      </DemoRow>
    </DemoStack>
  )
}

export function VisualOrderBad() {
  return (
    <DemoStack>
      <p className={styles.meta}>Continue looks first, but is last in the DOM.</p>
      <div style={{ display: 'flex', flexDirection: 'row-reverse', gap: 8, justifyContent: 'flex-end' }}>
        <Button>Continue</Button>
        <Button variant="secondary">Back</Button>
      </div>
    </DemoStack>
  )
}
