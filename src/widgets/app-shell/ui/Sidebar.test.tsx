import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { I18nextProvider } from 'react-i18next'
import { describe, expect, it } from 'vitest'
import { i18n } from '@/shared/config'
import { Sidebar } from './Sidebar'

function renderSidebar() {
  return render(
    <I18nextProvider i18n={i18n}>
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    </I18nextProvider>,
  )
}

describe('Sidebar', () => {
  it('lists every topic with its rule count', () => {
    renderSidebar()

    expect(screen.getByRole('link', { name: /spacing/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /colors/i })).toBeInTheDocument()
  })

  it('filters topics as you search', async () => {
    const user = userEvent.setup()
    renderSidebar()

    await user.type(screen.getByRole('searchbox', { name: 'Search topics' }), 'spac')

    expect(screen.getByRole('link', { name: /spacing/i })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /colors/i })).not.toBeInTheDocument()
  })

  it('says so when nothing matches', async () => {
    const user = userEvent.setup()
    renderSidebar()

    await user.type(screen.getByRole('searchbox', { name: 'Search topics' }), 'zzz')

    expect(screen.getByText('No topic matches that.')).toBeInTheDocument()
  })
})
