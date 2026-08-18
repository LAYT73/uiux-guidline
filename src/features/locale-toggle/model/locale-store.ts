import { persist } from 'zustand/middleware'
import { create } from 'zustand'
import { i18n, isLocale, LOCALE_STORAGE_KEY, type Locale } from '@/shared/config'

type LocaleState = {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

export function applyLocale(locale: Locale) {
  document.documentElement.lang = locale
  void i18n.changeLanguage(locale)
}

export const useLocaleStore = create<LocaleState>()(
  persist(
    (set, get) => ({
      locale: 'en',
      setLocale: (locale) => {
        applyLocale(locale)
        set({ locale })
      },
      toggleLocale: () => {
        const next: Locale = get().locale === 'en' ? 'ru' : 'en'
        applyLocale(next)
        set({ locale: next })
      },
    }),
    {
      name: LOCALE_STORAGE_KEY,
      onRehydrateStorage: () => (state) => {
        if (state && isLocale(state.locale)) applyLocale(state.locale)
      },
    },
  ),
)
