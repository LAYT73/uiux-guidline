import { NavLink } from 'react-router'
import { useTranslation } from 'react-i18next'
import { SECTIONS } from '@/entities/guideline'
import { cx } from '@/shared/lib'
import styles from './Sidebar.module.css'

type SidebarProps = {
  onNavigate?: () => void
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const { t } = useTranslation()

  return (
    <div className={styles.root}>
      <NavLink to="/" className={styles.brand} onClick={onNavigate}>
        <span className={styles.mark} aria-hidden />
        <span>
          <strong className={styles.brandName}>{t('meta.title')}</strong>
          <span className={styles.tagline}>{t('meta.tagline')}</span>
        </span>
      </NavLink>

      <nav className={styles.nav} aria-label={t('meta.title')}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => cx(styles.home, isActive && styles.active)}
          onClick={onNavigate}
        >
          {t('common.home')}
        </NavLink>

        {SECTIONS.map((section) => (
          <div key={section.id} className={styles.group}>
            <p className={styles.groupTitle}>{t(`nav.${section.id}`)}</p>
            <ul className={styles.list}>
              {section.topicIds.map((topicId) => (
                <li key={topicId}>
                  <NavLink
                    to={`/${section.id}/${topicId}`}
                    className={({ isActive }) => cx(styles.link, isActive && styles.active)}
                    onClick={onNavigate}
                  >
                    {t(`topics.${topicId}`)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  )
}
