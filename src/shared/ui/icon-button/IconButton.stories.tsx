import type { Meta, StoryObj } from '@storybook/react-vite'
import { Star } from 'lucide-react'
import { IconButton } from './IconButton'

const meta = {
  title: 'shared/IconButton',
  component: IconButton,
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Star',
    children: <Star size={18} />,
  },
}
