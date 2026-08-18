import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Switch } from './Switch'

const meta = {
  title: 'shared/Switch',
  component: Switch,
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { checked: true, label: 'Public profile', onChange: () => undefined },
  render: function Render() {
    const [on, setOn] = useState(true)
    return <Switch checked={on} label="Public profile" onChange={setOn} />
  },
}
