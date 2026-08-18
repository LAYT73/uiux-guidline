import { useTranslation } from 'react-i18next'
import { SegmentedControl } from '@/shared/ui/segmented-control'
import { useLocaleStore } from '../model/locale-store'

export function LocaleToggle() {
  const { t } = useTranslation()
  const locale = useLocaleStore((state) => state.locale)
  const setLocale = useLocaleStore((state) => state.setLocale)

  return (
    <SegmentedControl
      size="sm"
      ariaLabel={t('a11y.toggleLocale')}
      value={locale}
      options={[
        { value: 'en', label: 'EN' },
        { value: 'ru', label: 'RU' },
      ]}
      onChange={setLocale}
    />
  )
}
