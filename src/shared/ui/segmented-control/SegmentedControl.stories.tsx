import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { SegmentedControl } from './SegmentedControl'

const meta = {
  title: 'shared/SegmentedControl',
  component: SegmentedControl,
} satisfies Meta<typeof SegmentedControl>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 'do',
    ariaLabel: 'Example',
    options: [
      { value: 'do', label: 'Do' },
      { value: 'dont', label: "Don't" },
    ],
    onChange: () => undefined,
  },
  render: function Render() {
    const [value, setValue] = useState<'do' | 'dont'>('do')
    return (
      <SegmentedControl
        value={value}
        ariaLabel="Example"
        options={[
          { value: 'do', label: 'Do' },
          { value: 'dont', label: "Don't" },
        ]}
        onChange={setValue}
      />
    )
  },
}
