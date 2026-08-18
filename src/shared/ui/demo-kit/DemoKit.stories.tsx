import type { Meta, StoryObj } from '@storybook/react-vite'
import { DemoFocus, DemoRange, DemoRow, DemoStack, FakeCard } from './DemoKit'

const meta = {
  title: 'shared/DemoKit',
  component: DemoStack,
} satisfies Meta<typeof DemoStack>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  args: { children: null },
  render: () => (
    <DemoStack>
      <DemoRange
        label="Gap"
        name="story-gap"
        min={8}
        max={24}
        defaultValue={12}
        valueLabel="12px"
      />
      <DemoRow>
        <FakeCard>One</FakeCard>
        <FakeCard>Two</FakeCard>
      </DemoRow>
    </DemoStack>
  ),
}

export const FocusProbe: Story = {
  args: { children: null },
  render: () => (
    <DemoFocus label="Focus" startLabel="Tab from here" emptyLabel="outside the demo">
      <DemoRow>
        <button type="button">Cancel</button>
        <button type="button">Save</button>
      </DemoRow>
    </DemoFocus>
  ),
}
