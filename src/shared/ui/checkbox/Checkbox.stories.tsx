import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from './Checkbox'

const meta = {
  title: 'shared/Checkbox',
  component: Checkbox,
  args: { checked: false, label: 'Respect reduced motion', onChange: () => undefined },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: function Render() {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox checked={checked} label="Respect reduced motion" onChange={setChecked} />
    )
  },
}

export const Checked: Story = { args: { checked: true } }
export const Disabled: Story = { args: { checked: true, disabled: true } }
