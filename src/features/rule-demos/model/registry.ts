import type { ComponentType } from 'react'
import type { Rule } from '@/entities/guideline'

export type RuleDemoLayout = 'split' | 'stacked'

export type RuleDemoPair = {
  Good: ComponentType
  Bad: ComponentType
  layout?: RuleDemoLayout
}

const registry = new Map<string, RuleDemoPair>()

export function registerDemos(entries: Record<string, RuleDemoPair>) {
  for (const [id, pair] of Object.entries(entries)) {
    registry.set(id, pair)
  }
}

export function getDemos(rule: Rule): RuleDemoPair | undefined {
  return registry.get(rule.id)
}
