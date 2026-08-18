import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import { AppProviders } from '@/app/lib/providers'
import { AppRoutes } from '@/app/router'
import { AppShell } from '@/widgets/app-shell'

function renderAt(path: string) {
  return render(
    <AppProviders>
      <MemoryRouter initialEntries={[path]}>
        <AppShell>
          <AppRoutes />
        </AppShell>
      </MemoryRouter>
    </AppProviders>,
  )
}

describe('routes', () => {
  it('renders the overview heading on home', () => {
    renderAt('/')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Build interfaces that make sense.',
    )
  })

  it('renders a topic page for a known guideline', () => {
    renderAt('/foundations/spacing')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Spacing')
  })

  it('shows the not-found copy for an unknown topic', () => {
    renderAt('/foundations/does-not-exist')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'This topic does not exist.',
    )
  })
})
