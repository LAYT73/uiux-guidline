import type { Meta, StoryObj } from '@storybook/react-vite'
import { Callout } from './Callout'

const meta = {
  title: 'shared/Callout',
  component: Callout,
  args: { children: 'Keep labels above the field so they never collide with the value.' },
} satisfies Meta<typeof Callout>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = { args: { title: 'Good to know' } }
export const Do: Story = { args: { tone: 'do', title: 'Do' } }
export const Dont: Story = {
  args: {
    tone: 'dont',
    title: "Don't",
    children: 'Never rely on placeholder text as the label.',
  },
}
export const Warning: Story = {
  args: {
    tone: 'warning',
    title: 'Careful',
    children: 'Changing tokens affects every page.',
  },
}
export const WithoutTitle: Story = {}
