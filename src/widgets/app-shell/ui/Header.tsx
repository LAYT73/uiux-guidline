import { ChevronRight, Menu, X } from 'lucide-react'
import { useLocation } from 'react-router'
import { useTranslation } from 'react-i18next'
import { motion, useScroll } from 'motion/react'
import { getTopic } from '@/entities/guideline'
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
  const { pathname } = useLocation()
  const { scrollYProgress } = useScroll()

  const [section = '', topic = ''] = pathname.split('/').filter(Boolean)
  const current = getTopic(section, topic)

  return (
    <header className={styles.root}>
      <IconButton
        label={navOpen ? t('a11y.closeNav') : t('a11y.openNav')}
        onClick={onToggleNav}
        className={styles.menu}
      >
        {navOpen ? <X size={18} /> : <Menu size={18} />}
      </IconButton>

      {current ? (
        <nav className={styles.crumbs} aria-label={t('meta.title')}>
          <span className={styles.crumbMuted}>{t(`nav.${current.sectionId}`)}</span>
          <ChevronRight size={14} className={styles.crumbIcon} aria-hidden />
          <span className={styles.crumb}>{t(`topics.${current.id}`)}</span>
        </nav>
      ) : (
        <p className={styles.crumb}>{t('meta.title')}</p>
      )}

      <div className={styles.actions}>
        <LocaleToggle />
        <ThemeToggle />
      </div>
      <motion.div
        className={styles.progress}
        style={{ scaleX: scrollYProgress }}
        aria-hidden
      />
    </header>
  )
}
