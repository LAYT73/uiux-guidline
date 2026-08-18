import { beforeEach, describe, expect, it } from 'vitest'
import { applyTheme, useThemeStore } from './theme-store'

describe('theme store', () => {
  beforeEach(() => {
    localStorage.clear()
    useThemeStore.setState({ theme: 'dark' })
    applyTheme('dark')
  })

  it('defaults to dark', () => {
    expect(useThemeStore.getState().theme).toBe('dark')
    expect(document.documentElement.dataset.theme).toBe('dark')
  })

  it('toggles to light and back', () => {
    useThemeStore.getState().toggleTheme()
    expect(useThemeStore.getState().theme).toBe('light')
    expect(document.documentElement.dataset.theme).toBe('light')
    useThemeStore.getState().toggleTheme()
    expect(useThemeStore.getState().theme).toBe('dark')
  })
})
