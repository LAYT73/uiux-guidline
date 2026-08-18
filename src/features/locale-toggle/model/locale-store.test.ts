import { beforeEach, describe, expect, it } from 'vitest'
import { applyLocale, useLocaleStore } from './locale-store'

describe('locale store', () => {
  beforeEach(() => {
    localStorage.clear()
    useLocaleStore.setState({ locale: 'en' })
    applyLocale('en')
  })

  it('defaults to English', () => {
    expect(useLocaleStore.getState().locale).toBe('en')
    expect(document.documentElement.lang).toBe('en')
  })

  it('switches to Russian', () => {
    useLocaleStore.getState().toggleLocale()
    expect(useLocaleStore.getState().locale).toBe('ru')
    expect(document.documentElement.lang).toBe('ru')
  })
})
