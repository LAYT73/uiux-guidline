import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import styles from '../playground.module.css'

export function ExplainActionGood() {
  const { t } = useTranslation()
  const [created, setCreated] = useState(false)
  return (
    <DemoStack>
      {created ? (
        <p className={styles.ok}>{t('demo.projectCreated')}</p>
      ) : (
        <FakeCard>
          <p>{t('demo.noProjects')}</p>
          <div style={{ marginTop: 12 }}>
            <Button onClick={() => setCreated(true)}>{t('demo.newProject')}</Button>
          </div>
        </FakeCard>
      )}
    </DemoStack>
  )
}

export function ExplainActionBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <FakeCard>
        <p className={styles.meta}>{t('demo.noData')}</p>
      </FakeCard>
    </DemoStack>
  )
}

export function DeadEndGood() {
  const { t } = useTranslation()
  const [query, setQuery] = useState(t('demo.zebraInvoices'))
  return (
    <DemoStack>
      <input className={styles.input} value={query} onChange={(e) => setQuery(e.target.value)} aria-label={t('demo.search')} />
      {query ? (
        <>
          <p className={styles.meta}>{t('demo.noMatches', { query })}</p>
          <Button variant="secondary" onClick={() => setQuery('')}>
            {t('demo.clearFilters')}
          </Button>
        </>
      ) : (
        <p className={styles.ok}>{t('demo.showingAll')}</p>
      )}
    </DemoStack>
  )
}

export function DeadEndBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <input className={styles.input} defaultValue={t('demo.zebraInvoices')} aria-label={t('demo.search')} />
      <p className={styles.meta}>{t('demo.noData')}</p>
    </DemoStack>
  )
}
