import { useState, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { SkipLink } from '@/shared/ui/skip-link'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import styles from './AppShell.module.css'

type AppShellProps = {
  children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
  const { t } = useTranslation()
  const [navOpen, setNavOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  return (
    <div className={styles.root}>
      <SkipLink>{t('a11y.skip')}</SkipLink>
      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>
      <div className={styles.mainColumn}>
        <Header navOpen={navOpen} onToggleNav={() => setNavOpen((open) => !open)} />
        <main id="main" className={styles.main}>
          {children}
        </main>
      </div>
      <AnimatePresence>
        {navOpen ? (
          <motion.div
            className={styles.drawer}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
          >
            <button
              type="button"
              className={styles.backdrop}
              aria-label={t('a11y.closeNav')}
              onClick={() => setNavOpen(false)}
            />
            <motion.div
              className={styles.panel}
              initial={reduceMotion ? false : { x: -24 }}
              animate={{ x: 0 }}
              exit={reduceMotion ? undefined : { x: -24 }}
            >
              <Sidebar onNavigate={() => setNavOpen(false)} />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
