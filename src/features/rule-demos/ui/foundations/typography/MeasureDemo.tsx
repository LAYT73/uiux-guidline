import { useState } from 'react'
import { DemoRange, DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

const sample =
  'The quickest way to ruin a paragraph is to stretch it across the full viewport. The eye cannot find the start of the next line, so comprehension drops even if the typeface is beautiful.'

export function MeasureGood() {
  const [ch, setCh] = useState(62)

  return (
    <DemoStack>
      <DemoRange
        label="Measure"
        name="measure-good"
        min={45}
        max={75}
        value={ch}
        valueLabel={`${ch}ch`}
        onChange={(event) => setCh(Number(event.target.value))}
      />
      <p style={{ maxWidth: `${ch}ch`, fontSize: 14, lineHeight: 1.55 }}>{sample}</p>
    </DemoStack>
  )
}

export function MeasureBad() {
  const [ch, setCh] = useState(110)

  return (
    <DemoStack>
      <DemoRange
        label="Measure"
        name="measure-bad"
        min={90}
        max={140}
        value={ch}
        valueLabel={`${ch}ch`}
        onChange={(event) => setCh(Number(event.target.value))}
      />
      <p className={styles.meta} style={{ maxWidth: `${ch}ch`, fontSize: 14, lineHeight: 1.55 }}>
        {sample}
      </p>
    </DemoStack>
  )
}
