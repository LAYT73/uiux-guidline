import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoRow, DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import { Callout } from '@/shared/ui/callout'
import { Input } from '@/shared/ui/input'
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
          <div className={styles.mini}>
            <p className={styles.copy}>{t('demo.noProjects')}</p>
            <DemoRow>
              <Button onClick={() => setCreated(true)}>{t('demo.newProject')}</Button>
            </DemoRow>
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
  const shown = query.length > 18 ? `${query.slice(0, 18)}…` : query

  return (
    <DemoStack>
      <Input
        label={t('demo.searchProjects')}
        name="dead-end-search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      {query ? (
        <Callout tone="info">
          <p>{t('demo.noMatches', { query: shown })}</p>
          <DemoRow>
            <Button variant="secondary" size="sm" onClick={() => setQuery('')}>
              {t('demo.clearFilters')}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setQuery('')}>
              {t('demo.createAnyway', { query: shown })}
            </Button>
          </DemoRow>
        </Callout>
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
      <input
        className={styles.input}
        defaultValue={t('demo.zebraInvoices')}
        aria-label={t('demo.search')}
      />
      <p className={styles.meta}>{t('demo.noData')}</p>
    </DemoStack>
  )
}
