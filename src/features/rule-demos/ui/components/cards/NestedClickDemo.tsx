import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MoreHorizontal } from 'lucide-react'
import { DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

export function NestedClickGood() {
  const { t } = useTranslation()
  const [msg, setMsg] = useState('cardOpens')

  return (
    <DemoStack>
      <FakeCard style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
        <button type="button" className={styles.chip} onClick={() => setMsg('openedProject')}>
          {t('demo.aurora')}
        </button>
        <button
          type="button"
          className={styles.chip}
          aria-label={t('demo.projectMenu')}
          onClick={() => setMsg('openedMenu')}
        >
          <MoreHorizontal size={16} />
        </button>
      </FakeCard>
      <p className={styles.meta}>{t(`demo.${msg}`)}</p>
    </DemoStack>
  )
}

export function NestedClickBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
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
      <p className={styles.meta}>{t('demo.invalidNesting')}</p>
    </DemoStack>
  )
}
