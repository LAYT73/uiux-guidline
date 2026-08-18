import { render, screen } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { describe, expect, it } from 'vitest'
import { RULES } from '@/entities/guideline'
import { i18n } from '@/shared/config'
import '@/features/rule-demos'
import { RuleCard } from './RuleCard'

const rule = RULES.find((item) => item.id === 'spacing.scale')

if (!rule) {
  throw new Error('spacing.scale is missing from the catalog')
}

function renderCard() {
  return render(
    <I18nextProvider i18n={i18n}>
      <RuleCard rule={rule!} index={0} />
    </I18nextProvider>,
  )
}

describe('RuleCard', () => {
  it('shows both examples side by side on a wide screen', () => {
    renderCard()

    expect(screen.getByRole('region', { name: 'Do' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: "Don't" })).toBeInTheDocument()
  })

  it('labels each example once, so the badge and the switcher never duplicate', () => {
    renderCard()

    expect(screen.getAllByText('Do')).toHaveLength(1)
    expect(screen.getAllByText("Don't")).toHaveLength(1)
    expect(screen.queryByRole('tablist')).not.toBeInTheDocument()
  })

  it('offers a reset for the interactive state', () => {
    renderCard()

    expect(screen.getByRole('button', { name: /reset example/i })).toBeInTheDocument()
  })
})
