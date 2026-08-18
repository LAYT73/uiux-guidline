import { useTranslation } from 'react-i18next'
import { DemoStack } from '@/shared/ui/demo-kit'
import { Code } from '@/shared/ui/code'
import styles from '../../playground.module.css'

const items = ['home', 'work', 'docs'] as const

const GOOD_MARKUP = `<nav aria-label="Product">
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#work">Work</a></li>
  </ul>
</nav>`

const BAD_MARKUP = `<div class="row">
  <span>Home</span>
  <span>Work</span>
</div>`

export function LandmarksGood() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <nav aria-label={t('demo.product')}>
        <ul className={styles.navList}>
          {items.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={styles.chip}
                onClick={(e) => e.preventDefault()}
              >
                {t(`demo.${item}`)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.skipTarget}>{t('demo.contentStart')}</div>
      <p className={styles.meta}>{t('demo.namedNav')}</p>
      <Code label={t('demo.markup')} tone="do">
        {GOOD_MARKUP}
      </Code>
    </DemoStack>
  )
}

export function LandmarksBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <div className={styles.navRow}>
        {items.map((item) => (
          <span key={item} className={styles.chip}>
            {t(`demo.${item}`)}
          </span>
        ))}
      </div>
      <div className={styles.skipTarget}>{t('demo.contentStart')}</div>
      <p className={styles.meta}>{t('demo.divSoup')}</p>
      <Code label={t('demo.markup')} tone="dont">
        {BAD_MARKUP}
      </Code>
    </DemoStack>
  )
}
