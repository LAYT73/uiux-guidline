import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './Input'

const meta = {
  title: 'shared/Input',
  component: Input,
  args: { label: 'Email', name: 'email', placeholder: 'you@studio.com' },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithHint: Story = { args: { hint: 'We never share this.' } }
export const Invalid: Story = { args: { error: 'Enter a valid email.' } }
