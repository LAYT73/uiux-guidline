import { useMemo, useState } from 'react'
import { NavLink } from 'react-router'
import { useTranslation } from 'react-i18next'
import { Search, X } from 'lucide-react'
import { RULES, SECTIONS } from '@/entities/guideline'
import { cx } from '@/shared/lib'
import styles from './Sidebar.module.css'

type SidebarProps = {
  onNavigate?: () => void
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const { t } = useTranslation()
  const [query, setQuery] = useState('')

  const groups = useMemo(() => {
    const needle = query.trim().toLowerCase()

    return SECTIONS.map((section) => ({
      id: section.id,
      topics: section.topicIds
        .filter(
          (topicId) => !needle || t(`topics.${topicId}`).toLowerCase().includes(needle),
        )
        .map((topicId) => ({
          id: topicId,
          href: `/${section.id}/${topicId}`,
          title: t(`topics.${topicId}`),
          count: RULES.filter((rule) => rule.topicId === topicId).length,
        })),
    })).filter((section) => section.topics.length > 0)
  }, [query, t])

  return (
    <div className={styles.root}>
      <NavLink to="/" className={styles.brand} onClick={onNavigate}>
        <span className={styles.mark} aria-hidden />
        <span>
          <strong className={styles.brandName}>{t('meta.title')}</strong>
          <span className={styles.tagline}>{t('meta.tagline')}</span>
        </span>
      </NavLink>

      <div className={styles.search}>
        <Search size={15} className={styles.searchIcon} aria-hidden />
        <input
          type="search"
          className={styles.searchInput}
          value={query}
          aria-label={t('nav.search')}
          placeholder={t('nav.searchPlaceholder')}
          onChange={(event) => setQuery(event.target.value)}
        />
        {query ? (
          <button
            type="button"
            className={styles.searchClear}
            aria-label={t('common.close')}
            onClick={() => setQuery('')}
          >
            <X size={14} aria-hidden />
          </button>
        ) : null}
      </div>

      <nav className={styles.nav} aria-label={t('meta.title')}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => cx(styles.home, isActive && styles.active)}
          onClick={onNavigate}
        >
          {t('common.home')}
        </NavLink>

        {groups.length === 0 ? (
          <p className={styles.noResults}>{t('nav.noResults')}</p>
        ) : null}

        {groups.map((section) => (
          <div key={section.id} className={styles.group}>
            <p className={styles.groupTitle}>{t(`nav.${section.id}`)}</p>
            <ul className={styles.list}>
              {section.topics.map((topic) => (
                <li key={topic.id}>
                  <NavLink
                    to={topic.href}
                    className={({ isActive }) =>
                      cx(styles.link, isActive && styles.active)
                    }
                    onClick={onNavigate}
                  >
                    <span className={styles.linkTitle}>{topic.title}</span>
                    <span className={styles.linkCount}>{topic.count}</span>
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
