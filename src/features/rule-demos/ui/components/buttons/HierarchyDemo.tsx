import { useTranslation } from 'react-i18next'
import { DemoRow, DemoStack } from '@/shared/ui/demo-kit'
import { Button } from '@/shared/ui/button'

export function HierarchyGood() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <DemoRow>
        <Button>{t('demo.publish')}</Button>
        <Button variant="secondary">{t('demo.saveDraft')}</Button>
        <Button variant="ghost">{t('demo.preview')}</Button>
      </DemoRow>
    </DemoStack>
  )
}

export function HierarchyBad() {
  const { t } = useTranslation()
  return (
    <DemoStack>
      <DemoRow>
        <Button>{t('demo.publish')}</Button>
        <Button>{t('demo.saveDraft')}</Button>
        <Button>{t('demo.preview')}</Button>
      </DemoRow>
    </DemoStack>
  )
}
