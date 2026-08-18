import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/shared/ui/button'
import { Modal } from './Modal'

const meta = {
  title: 'shared/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Open: Story = {
  args: {
    open: true,
    title: 'Discard draft?',
    onClose: () => undefined,
    children: 'This action cannot be undone.',
  },
  render: function Render() {
    const [open, setOpen] = useState(true)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal open={open} title="Discard draft?" onClose={() => setOpen(false)}>
          This action cannot be undone.
        </Modal>
      </>
    )
  },
}
