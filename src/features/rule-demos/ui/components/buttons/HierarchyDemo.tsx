import { DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'

export function HierarchyGood() {
  return (
    <DemoStack>
      <DemoRow>
        <Button>Publish</Button>
        <Button variant="secondary">Save draft</Button>
        <Button variant="ghost">Preview</Button>
      </DemoRow>
    </DemoStack>
  )
}

export function HierarchyBad() {
  return (
    <DemoStack>
      <DemoRow>
        <Button>Publish</Button>
        <Button>Save draft</Button>
        <Button>Preview</Button>
      </DemoRow>
    </DemoStack>
  )
}
