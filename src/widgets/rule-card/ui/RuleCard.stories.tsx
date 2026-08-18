import type { Meta, StoryObj } from '@storybook/react-vite'
import { RULES } from '@/entities/guideline'
import '@/features/rule-demos'
import { RuleCard } from './RuleCard'

function findRule(id: string) {
  const match = RULES.find((item) => item.id === id)
  if (!match) throw new Error(`${id} is missing from the catalog`)
  return match
}

const rule = findRule('spacing.scale')

const meta = {
  title: 'widgets/RuleCard',
  component: RuleCard,
  args: { rule },
  decorators: [
    (Story) => (
      <div style={{ width: 'min(920px, 100vw)', padding: 16 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof RuleCard>

export default meta
type Story = StoryObj<typeof meta>

export const SpacingScale: Story = {}

export const StackedLayout: Story = {
  args: { rule: findRule('typography.measure') },
}

export const Numbered: Story = {
  args: { index: 2 },
}
