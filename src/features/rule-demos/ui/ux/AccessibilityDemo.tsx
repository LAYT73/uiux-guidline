import { useId, useRef, useState } from 'react'
import { Trash2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { DemoFocus, DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import { Code } from '@/shared/ui/code'
import { IconButton } from '@/shared/ui/icon-button'
import { Kbd } from '@/shared/ui/kbd'
import { Tooltip } from '@/shared/ui/tooltip'
import styles from '../playground.module.css'

const NAV_ITEMS = ['home', 'work', 'docs', 'settings'] as const

const FOCUS_GOOD_MARKUP = `<button>Two</button>

:focus-visible {
  outline: 2px solid var(--focus);
  outline-offset: 2px;
}`

const FOCUS_BAD_MARKUP = `<button style="outline: none">
  Two
</button>`

const ICON_GOOD_MARKUP = `<button type="button"
        aria-label="Delete draft">
  <svg aria-hidden="true" />
</button>`

const ICON_BAD_MARKUP = `<button type="button">
  <svg />
</button>`

const SKIP_GOOD_MARKUP = `<a href="#main" class="skip-link">
  Skip to content
</a>
<nav aria-label="Product"></nav>
<main id="main" tabindex="-1"></main>`

const SKIP_BAD_MARKUP = `<div class="row">
  <a href="#n1">Link 1</a>
  <a href="#n8">Link 8</a>
</div>
<div>Article starts here.</div>`

export function FocusGood() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <DemoRow>
        <Kbd>{t('demo.keyTab')}</Kbd>
        <span className={styles.meta}>{t('demo.tabFocus')}</span>
      </DemoRow>
      <DemoFocus
        label={t('demo.focusNow')}
        startLabel={t('demo.tabFromHere')}
        emptyLabel={t('demo.focusOutside')}
      >
        <DemoRow>
          <Button variant="secondary">{t('demo.one')}</Button>
          <Button>{t('demo.two')}</Button>
        </DemoRow>
      </DemoFocus>
      <Code label={t('demo.markup')} tone="do">
        {FOCUS_GOOD_MARKUP}
      </Code>
    </DemoStack>
  )
}

export function FocusBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <DemoRow>
        <Kbd>{t('demo.keyTab')}</Kbd>
        <span className={styles.meta}>{t('demo.outlineNone')}</span>
      </DemoRow>
      <DemoFocus
        label={t('demo.focusNow')}
        startLabel={t('demo.tabFromHere')}
        emptyLabel={t('demo.focusOutside')}
      >
        <DemoRow>
          <button
            type="button"
            className={styles.chip}
            style={{ outline: 'none' }}
            onMouseDown={(e) => e.preventDefault()}
          >
            {t('demo.one')}
          </button>
          <button
            type="button"
            className={styles.chip}
            style={{ outline: 'none' }}
            onMouseDown={(e) => e.preventDefault()}
          >
            {t('demo.two')}
          </button>
        </DemoRow>
      </DemoFocus>
      <Code label={t('demo.markup')} tone="dont">
        {FOCUS_BAD_MARKUP}
      </Code>
    </DemoStack>
  )
}

export function IconNameGood() {
  const { t } = useTranslation()
  const [deleted, setDeleted] = useState(false)

  return (
    <DemoStack>
      <Tooltip content={t('demo.deleteDraft')}>
        <IconButton label={t('demo.deleteDraft')} onClick={() => setDeleted(true)}>
          <Trash2 size={16} aria-hidden />
        </IconButton>
      </Tooltip>
      <p className={styles.meta}>{t('demo.announcesDelete')}</p>
      {deleted ? <p className={styles.ok}>{t('demo.deletedAlert')}</p> : null}
      <Code label={t('demo.markup')} tone="do">
        {ICON_GOOD_MARKUP}
      </Code>
    </DemoStack>
  )
}

export function IconNameBad() {
  const { t } = useTranslation()
  const [deleted, setDeleted] = useState(false)

  return (
    <DemoStack>
      <button type="button" className={styles.chip} onClick={() => setDeleted(true)}>
        <Trash2 size={16} />
      </button>
      <p className={styles.meta}>{t('demo.noName')}</p>
      {deleted ? <p className={styles.warn}>{t('demo.deletedAlert')}</p> : null}
      <Code label={t('demo.markup')} tone="dont">
        {ICON_BAD_MARKUP}
      </Code>
    </DemoStack>
  )
}

export function SkipLinkGood() {
  const { t } = useTranslation()
  const targetId = useId()
  const targetRef = useRef<HTMLDivElement>(null)
  const [landed, setLanded] = useState(false)

  return (
    <DemoStack>
      <DemoRow>
        <Kbd>{t('demo.keyTab')}</Kbd>
        <span className={styles.meta}>{t('demo.skipHint')}</span>
      </DemoRow>
      <DemoFocus
        label={t('demo.focusNow')}
        startLabel={t('demo.tabFromHere')}
        emptyLabel={t('demo.focusOutside')}
      >
        <div className={styles.miniPage}>
          <a
            className={styles.skipLink}
            href={`#${targetId}`}
            onClick={(event) => {
              event.preventDefault()
              targetRef.current?.focus()
              setLanded(true)
            }}
          >
            {t('demo.skipToContent')}
          </a>
          <nav aria-label={t('demo.product')}>
            <ul className={styles.navList}>
              {NAV_ITEMS.map((item) => (
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
          <div id={targetId} ref={targetRef} tabIndex={-1} className={styles.skipTarget}>
            {t('demo.contentStart')}
          </div>
        </div>
      </DemoFocus>
      {landed ? <p className={styles.ok}>{t('demo.focusLanded')}</p> : null}
      <Code label={t('demo.markup')} tone="do">
        {SKIP_GOOD_MARKUP}
      </Code>
    </DemoStack>
  )
}

export function SkipLinkBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <DemoRow>
        <Kbd>{t('demo.keyTab')}</Kbd>
        <span className={styles.meta}>{t('demo.noSkip')}</span>
      </DemoRow>
      <DemoFocus
        label={t('demo.focusNow')}
        startLabel={t('demo.tabFromHere')}
        emptyLabel={t('demo.focusOutside')}
      >
        <div className={styles.navRow}>
          {Array.from({ length: 8 }, (_, i) => (
            <a
              key={i}
              href={`#n${i}`}
              className={styles.chip}
              onClick={(e) => e.preventDefault()}
            >
              {t('demo.linkN', { n: i + 1 })}
            </a>
          ))}
        </div>
        <div className={styles.skipTarget}>{t('demo.contentStart')}</div>
      </DemoFocus>
      <Code label={t('demo.markup')} tone="dont">
        {SKIP_BAD_MARKUP}
      </Code>
    </DemoStack>
  )
}
