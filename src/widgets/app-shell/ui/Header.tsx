import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { ThemeToggle } from '@/features/theme-toggle'
import { LocaleToggle } from '@/features/locale-toggle'
import { IconButton } from '@/shared/ui/icon-button'
import styles from './Header.module.css'

type HeaderProps = {
  navOpen: boolean
  onToggleNav: () => void
}

export function Header({ navOpen, onToggleNav }: HeaderProps) {
  const { t } = useTranslation()

  return (
    <header className={styles.root}>
      <IconButton
        label={navOpen ? t('a11y.closeNav') : t('a11y.openNav')}
        onClick={onToggleNav}
        className={styles.menu}
      >
        {navOpen ? <X size={18} /> : <Menu size={18} />}
      </IconButton>
      <p className={styles.title}>{t('meta.title')}</p>
      <div className={styles.actions}>
        <LocaleToggle />
        <ThemeToggle />
      </div>
    </header>
  )
}
