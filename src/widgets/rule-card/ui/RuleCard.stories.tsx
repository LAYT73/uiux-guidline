import type { Meta, StoryObj } from '@storybook/react-vite'
import { RULES } from '@/entities/guideline'
import '@/features/rule-demos'
import { RuleCard } from './RuleCard'

const rule = RULES.find((item) => item.id === 'spacing.scale')

if (!rule) {
  throw new Error('spacing.scale is missing from the catalog')
}

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
