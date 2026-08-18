import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tooltip } from './Tooltip'

const meta = {
  title: 'shared/Tooltip',
  component: Tooltip,
  args: {
    content: 'Copies the token name',
    children: <button type="button">Copy token</button>,
  },
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Top: Story = {}
export const Bottom: Story = { args: { side: 'bottom' } }
export const LongContent: Story = {
  args: {
    content: 'Tooltips describe, they never carry the only copy of an instruction.',
  },
}
