import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './Badge'

const meta = {
  title: 'shared/Badge',
  component: Badge,
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Do: Story = { args: { tone: 'do', children: 'Do' } }
export const Dont: Story = { args: { tone: 'dont', children: "Don't" } }
export const Neutral: Story = { args: { children: 'Optional' } }
