import { useEffect, type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { applyLocale, useLocaleStore } from '@/features/locale-toggle'
import { applyTheme, useThemeStore } from '@/features/theme-toggle'
import { i18n } from '@/shared/config'

type AppProvidersProps = {
  children: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  const theme = useThemeStore((state) => state.theme)
  const locale = useLocaleStore((state) => state.locale)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    applyLocale(locale)
    document.title = i18n.t('meta.title')
  }, [locale])

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
