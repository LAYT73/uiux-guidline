import type { Meta, StoryObj } from '@storybook/react-vite'
import { Kbd } from './Kbd'

const meta = {
  title: 'shared/Kbd',
  component: Kbd,
  args: { children: 'K' },
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const SingleKey: Story = {}
export const Modifier: Story = { args: { children: 'Shift' } }
export const Combination: Story = {
  render: () => (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-1)' }}>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </span>
  ),
}
