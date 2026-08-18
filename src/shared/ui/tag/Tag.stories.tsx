import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tag } from './Tag'

const meta = {
  title: 'shared/Tag',
  component: Tag,
  args: { children: 'Spacing' },
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const Neutral: Story = {}
export const Accent: Story = { args: { tone: 'accent', children: 'New' } }
export const Small: Story = { args: { size: 'sm', children: '12 px' } }
