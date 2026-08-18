import { useTranslation } from 'react-i18next'
import { DemoStack } from '@/shared/ui/demo-kit'
import { Code } from '@/shared/ui/code'
import { cx } from '@/shared/lib'
import styles from '../../playground.module.css'

const rows = Array.from({ length: 12 }, (_, i) => [i + 1, 8 + i * 3] as const)

const GOOD_MARKUP = `<thead>
  <tr><th scope="col">Sprint</th></tr>
</thead>

th { position: sticky; top: 0; }`

const BAD_MARKUP = `<tbody>
  <tr><td class="head">Sprint</td></tr>
  <tr><td>Sprint 1</td></tr>
</tbody>`

export function StickyGood() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <div className={styles.scroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col" className={styles.stickyHead}>
                {t('demo.sprint')}
              </th>
              <th scope="col" className={cx(styles.stickyHead, styles.num)}>
                {t('demo.points')}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([n, pts]) => (
              <tr key={n}>
                <td>
                  {t('demo.sprint')} {n}
                </td>
                <td className={styles.num}>{pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Code label={t('demo.markup')} tone="do">
        {GOOD_MARKUP}
      </Code>
    </DemoStack>
  )
}

export function StickyBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <div className={styles.scroll}>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.headFake}>{t('demo.sprint')}</td>
              <td className={cx(styles.headFake, styles.num)}>{t('demo.points')}</td>
            </tr>
            {rows.map(([n, pts]) => (
              <tr key={n}>
                <td>
                  {t('demo.sprint')} {n}
                </td>
                <td className={styles.num}>{pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Code label={t('demo.markup')} tone="dont">
        {BAD_MARKUP}
      </Code>
    </DemoStack>
  )
}
