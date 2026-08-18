import { DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import styles from '../../playground.module.css'

export function TokensGood() {
  return (
    <DemoStack>
      <p className={styles.meta}>Uses --accent and --bg-elevated. Switch the app theme.</p>
      <FakeCard>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, marginBottom: 8 }}>Season pass</p>
        <p className={styles.meta} style={{ marginBottom: 12 }}>
          Billed yearly · cancel anytime
        </p>
        <Button>Subscribe</Button>
      </FakeCard>
    </DemoStack>
  )
}

export function TokensBad() {
  return (
    <DemoStack>
      <p className={styles.meta}>Hard-coded gold on charcoal. Breaks in light theme.</p>
      <div
        style={{
          background: '#1a1c22',
          color: '#f3e6c8',
          border: '1px solid #e8a54b',
          borderRadius: 12,
          padding: 16,
        }}
      >
        <p style={{ fontSize: 18, marginBottom: 8 }}>Season pass</p>
        <p style={{ color: '#9a917c', marginBottom: 12, fontSize: 13 }}>Billed yearly · cancel anytime</p>
        <button
          type="button"
          style={{
            background: '#e8a54b',
            color: '#1a1208',
            border: 0,
            borderRadius: 8,
            minHeight: 36,
            padding: '0 12px',
            cursor: 'pointer',
          }}
        >
          Subscribe
        </button>
      </div>
    </DemoStack>
  )
}
