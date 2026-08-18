import type { Meta, StoryObj } from '@storybook/react-vite'
import { Code } from './Code'

const meta = {
  title: 'shared/Code',
  component: Code,
  args: {
    children:
      '<button type="button" aria-label="Delete draft">\n  <TrashIcon />\n</button>',
  },
} satisfies Meta<typeof Code>

export default meta
type Story = StoryObj<typeof meta>

export const Neutral: Story = {}

export const Labelled: Story = {
  args: { label: 'Markup' },
}

export const Do: Story = {
  args: { tone: 'do', label: 'Markup' },
}

export const Dont: Story = {
  args: {
    tone: 'dont',
    label: 'Markup',
    children: '<div onclick="remove()">\n  <TrashIcon />\n</div>',
  },
}
