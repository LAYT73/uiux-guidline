import { describe, expect, it } from 'vitest'
import { RULES } from '@/entities/guideline'
import { messagesEn, messagesRu } from '@/shared/config'
import { getDemos } from './registry'
import '../ui/foundations/register'
import '../ui/components/register'

function pick(root: unknown, id: string) {
  return id.split('.').reduce<unknown>((node, part) => {
    if (node && typeof node === 'object' && part in node) {
      return (node as Record<string, unknown>)[part]
    }
    return undefined
  }, root)
}

describe('rule completeness', () => {
  it('gives every catalog rule copy and a demo pair', () => {
    expect(RULES.length).toBeGreaterThan(0)

    for (const rule of RULES) {
      const enCopy = pick(messagesEn.rules, rule.id) as { title?: string; description?: string } | undefined
      const ruCopy = pick(messagesRu.rules, rule.id) as { title?: string; description?: string } | undefined
      expect(enCopy?.title, rule.id).toBeTruthy()
      expect(enCopy?.description, rule.id).toBeTruthy()
      expect(ruCopy?.title, rule.id).toBeTruthy()
      expect(getDemos(rule), rule.id).toBeTruthy()
    }
  })
})
