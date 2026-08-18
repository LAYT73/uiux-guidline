import type { Meta, StoryObj } from '@storybook/react-vite'
import { Select } from './Select'

const meta = {
  title: 'shared/Select',
  component: Select,
  args: {
    label: 'Density',
    name: 'density',
    defaultValue: 'comfortable',
    children: (
      <>
        <option value="compact">Compact</option>
        <option value="comfortable">Comfortable</option>
        <option value="spacious">Spacious</option>
      </>
    ),
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithHint: Story = { args: { hint: 'Affects row height across tables.' } }
export const Invalid: Story = { args: { error: 'Pick a density to continue.' } }
export const Disabled: Story = { args: { disabled: true } }
