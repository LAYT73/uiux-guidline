import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoFocus, DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import { Code } from '@/shared/ui/code'
import styles from '../../playground.module.css'

const GOOD_MARKUP = `<button type="button">Save</button>
<a href="https://www.w3.org/WAI/"
   target="_blank" rel="noreferrer">
  Docs
</a>`

const BAD_MARKUP = `<span class="chip" onclick="save()">
  Save / docs
</span>`

export function VsLinkGood() {
  const { t } = useTranslation()
  const [saved, setSaved] = useState(false)

  return (
    <DemoStack>
      <DemoFocus
        label={t('demo.focusNow')}
        startLabel={t('demo.tabFromHere')}
        emptyLabel={t('demo.focusOutside')}
      >
        <DemoRow>
          <Button onClick={() => setSaved(true)}>{t('demo.save')}</Button>
          <a
            href="https://www.w3.org/WAI/"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            {t('demo.docs')}
          </a>
        </DemoRow>
      </DemoFocus>
      {saved ? <p className={styles.ok}>{t('demo.savedLocally')}</p> : null}
      <Code label={t('demo.markup')} tone="do">
        {GOOD_MARKUP}
      </Code>
    </DemoStack>
  )
}

export function VsLinkBad() {
  const { t } = useTranslation()
  const [clicked, setClicked] = useState(false)

  return (
    <DemoStack>
      <DemoFocus
        label={t('demo.focusNow')}
        startLabel={t('demo.tabFromHere')}
        emptyLabel={t('demo.focusOutside')}
      >
        <DemoRow>
          <span className={styles.chip} onClick={() => setClicked(true)}>
            {t('demo.saveOrDocs')}
          </span>
        </DemoRow>
      </DemoFocus>
      <p className={styles.meta}>{t('demo.spanMeta')}</p>
      {clicked ? <p className={styles.warn}>{t('demo.notLinkOrButton')}</p> : null}
      <Code label={t('demo.markup')} tone="dont">
        {BAD_MARKUP}
      </Code>
    </DemoStack>
  )
}
