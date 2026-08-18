import { useState } from 'react'
import { DemoRange, DemoStack } from '@/shared/ui/demo-kit'

const sample =
  'Line-height is not a decoration. Body copy needs air so the next line does not collide with descenders. Display type can sit tighter because it is short.'

export function LineHeightGood() {
  const [leading, setLeading] = useState(1.55)

  return (
    <DemoStack>
      <DemoRange
        label="Line-height"
        name="lh-good"
        min={140}
        max={180}
        value={Math.round(leading * 100)}
        valueLabel={leading.toFixed(2)}
        onChange={(event) => setLeading(Number(event.target.value) / 100)}
      />
      <p style={{ fontSize: 15, lineHeight: leading }}>{sample}</p>
    </DemoStack>
  )
}

export function LineHeightBad() {
  const [leading, setLeading] = useState(1.05)

  return (
    <DemoStack>
      <DemoRange
        label="Line-height"
        name="lh-bad"
        min={100}
        max={120}
        value={Math.round(leading * 100)}
        valueLabel={leading.toFixed(2)}
        onChange={(event) => setLeading(Number(event.target.value) / 100)}
      />
      <p style={{ fontSize: 15, lineHeight: leading }}>{sample}</p>
    </DemoStack>
  )
}
