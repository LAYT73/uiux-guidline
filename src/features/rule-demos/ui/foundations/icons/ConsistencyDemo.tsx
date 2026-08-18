import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Bell, Home, Search, User } from 'lucide-react'
import { DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import styles from '../../playground.module.css'

const items = [
  { id: 'home', Icon: Home, labelKey: 'home' },
  { id: 'search', Icon: Search, labelKey: 'search' },
  { id: 'alerts', Icon: Bell, labelKey: 'inbox' },
  { id: 'you', Icon: User, labelKey: 'profile' },
] as const

export function ConsistencyGood() {
  const { t } = useTranslation()
  const [selected, setSelected] = useState('home')

  return (
    <DemoStack>
      <DemoRow>
        {items.map(({ id, Icon, labelKey }) => (
          <button
            key={id}
            type="button"
            className={styles.chip}
            aria-pressed={selected === id}
            onClick={() => setSelected(id)}
          >
            <Icon
              size={16}
              fill={selected === id ? 'currentColor' : 'none'}
              aria-hidden
            />
            {t(`demo.${labelKey}`)}
          </button>
        ))}
      </DemoRow>
      <p className={styles.meta}>{t('demo.oneIconFamily')}</p>
    </DemoStack>
  )
}

export function ConsistencyBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <DemoRow>
        <button type="button" className={styles.chip}>
          <Home size={16} />
          {t('demo.home')}
        </button>
        <button type="button" className={styles.chip}>
          <Search size={16} fill="currentColor" />
          {t('demo.search')}
        </button>
        <button type="button" className={styles.chip}>
          <Bell size={16} strokeWidth={1} />
          {t('demo.inbox')}
        </button>
        <button type="button" className={styles.chip}>
          <User size={20} />
          {t('demo.profile')}
        </button>
      </DemoRow>
      <p className={styles.meta}>{t('demo.mixedIconFamily')}</p>
    </DemoStack>
  )
}
