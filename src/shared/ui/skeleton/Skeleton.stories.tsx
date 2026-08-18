import type { Meta, StoryObj } from '@storybook/react-vite'
import { Skeleton } from './Skeleton'

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Bar: Story = { args: { width: 240 } }
export const Paragraph: Story = { args: { lines: 3, width: 320 } }
export const Avatar: Story = { args: { width: 44, height: 44, radius: 'full' } }
export const Card: Story = { args: { width: 320, height: 120, radius: 'sm' } }
