import type { Meta, StoryObj } from '@storybook/react-vite'
import { Spinner } from './Spinner'

const meta = {
  title: 'shared/Spinner',
  component: Spinner,
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithLabel: Story = { args: { label: 'Loading tokens' } }
export const Large: Story = { args: { size: 32, label: 'Loading tokens' } }
export const InheritsColor: Story = {
  args: { size: 20 },
  render: (args) => (
    <span style={{ color: 'var(--accent)' }}>
      <Spinner {...args} />
    </span>
  ),
}
