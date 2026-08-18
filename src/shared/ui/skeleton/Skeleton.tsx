import { cx } from '@/shared/lib'
import styles from './Skeleton.module.css'

type SkeletonRadius = 'sm' | 'md' | 'full'

type SkeletonProps = {
  width?: string | number
  height?: string | number
  radius?: SkeletonRadius
  lines?: number
}

export function Skeleton({ width, height, radius = 'md', lines = 1 }: SkeletonProps) {
  const barClass = cx(styles.bar, styles[radius])

  if (lines > 1) {
    return (
      <span className={styles.stack} style={{ width }} aria-hidden>
        {Array.from({ length: lines }, (_, index) => (
          <span
            key={index}
            className={cx(barClass, index === lines - 1 && styles.last)}
            style={{ height }}
          />
        ))}
      </span>
    )
  }

  return <span className={barClass} style={{ width, height }} aria-hidden />
}
