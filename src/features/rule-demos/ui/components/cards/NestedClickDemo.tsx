import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MoreHorizontal } from 'lucide-react'
import { DemoFocus, DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import { Code } from '@/shared/ui/code'
import { IconButton } from '@/shared/ui/icon-button'
import styles from '../../playground.module.css'

const GOOD_MARKUP = `<div class="card">
  <button>Aurora</button>
  <button aria-label="Project menu">
    <svg aria-hidden="true" />
  </button>
</div>`

const BAD_MARKUP = `<a href="#project">
  <div class="card">
    <button type="button"></button>
  </div>
</a>`

export function NestedClickGood() {
  const { t } = useTranslation()
  const [msg, setMsg] = useState('cardOpens')

  return (
    <DemoStack>
      <DemoFocus
        label={t('demo.focusNow')}
        startLabel={t('demo.tabFromHere')}
        emptyLabel={t('demo.focusOutside')}
      >
        <FakeCard
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 'var(--space-2)',
          }}
        >
          <Button variant="ghost" onClick={() => setMsg('openedProject')}>
            {t('demo.aurora')}
          </Button>
          <IconButton label={t('demo.projectMenu')} onClick={() => setMsg('openedMenu')}>
            <MoreHorizontal size={16} aria-hidden />
          </IconButton>
        </FakeCard>
      </DemoFocus>
      <p className={styles.meta}>{t(`demo.${msg}`)}</p>
      <Code label={t('demo.markup')} tone="do">
        {GOOD_MARKUP}
      </Code>
    </DemoStack>
  )
}

export function NestedClickBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <DemoFocus
        label={t('demo.focusNow')}
        startLabel={t('demo.tabFromHere')}
        emptyLabel={t('demo.focusOutside')}
      >
        <a
          href="#project"
          onClick={(event) => event.preventDefault()}
          style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
        >
          <FakeCard>
            <button type="button" className={styles.chip}>
              {t('demo.notLinkOrButton')}
            </button>
          </FakeCard>
        </a>
      </DemoFocus>
      <p className={styles.meta}>{t('demo.invalidNesting')}</p>
      <Code label={t('demo.markup')} tone="dont">
        {BAD_MARKUP}
      </Code>
    </DemoStack>
  )
}
