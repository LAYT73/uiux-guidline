import { DemoRow, DemoStack, FakeCard } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'
import styles from '../playground.module.css'

export function GroupProximityGood() {
  return (
    <DemoStack>
      <DemoRow>
        <Button variant="secondary">Cancel</Button>
        <Button>Save</Button>
      </DemoRow>
      <div style={{ height: 24 }} />
      <Button variant="danger">Delete project</Button>
    </DemoStack>
  )
}

export function GroupProximityBad() {
  return (
    <DemoStack>
      <DemoRow>
        <Button variant="secondary">Cancel</Button>
        <Button>Save</Button>
        <Button variant="danger">Delete project</Button>
      </DemoRow>
      <p className={styles.meta}>Equal gaps. Delete is in the family.</p>
    </DemoStack>
  )
}

export function GroupCardsGood() {
  return (
    <DemoStack>
      <FakeCard>Profile — name and avatar.</FakeCard>
      <FakeCard>Billing — plan and invoices.</FakeCard>
    </DemoStack>
  )
}

export function GroupCardsBad() {
  return (
    <DemoStack>
      <FakeCard>
        <p>Profile</p>
        <p className={styles.meta}>Name, avatar, plan, invoices, and delete account.</p>
      </FakeCard>
    </DemoStack>
  )
}
