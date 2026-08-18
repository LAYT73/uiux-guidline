import { useTranslation } from 'react-i18next'
import { IconButton } from '@/shared/ui/icon-button'
import { useLocaleStore } from '../model/locale-store'

export function LocaleToggle() {
  const { t } = useTranslation()
  const locale = useLocaleStore((state) => state.locale)
  const toggleLocale = useLocaleStore((state) => state.toggleLocale)

  return (
    <IconButton label={t('a11y.toggleLocale')} onClick={toggleLocale}>
      {locale === 'en' ? 'RU' : 'EN'}
    </IconButton>
  )
}
