import type { Rule } from '../types'

export const COMPOSITION_RULES: Rule[] = [
  { id: 'layout.max-width', topicId: 'layout', sectionId: 'composition' },
  { id: 'layout.visual-order', topicId: 'layout', sectionId: 'composition' },
  { id: 'hierarchy.one-h1', topicId: 'hierarchy', sectionId: 'composition' },
  { id: 'hierarchy.not-all-bold', topicId: 'hierarchy', sectionId: 'composition' },
  { id: 'density.consistent', topicId: 'density', sectionId: 'composition' },
  { id: 'density.context', topicId: 'density', sectionId: 'composition' },
  { id: 'alignment.grid', topicId: 'alignment', sectionId: 'composition' },
  { id: 'alignment.long-text', topicId: 'alignment', sectionId: 'composition' },
  { id: 'grouping.proximity', topicId: 'grouping', sectionId: 'composition' },
  { id: 'grouping.cards', topicId: 'grouping', sectionId: 'composition' },
  { id: 'whitespace.cta', topicId: 'whitespace', sectionId: 'composition' },
  { id: 'whitespace.breathing', topicId: 'whitespace', sectionId: 'composition' },
  { id: 'responsive.critical-actions', topicId: 'responsive', sectionId: 'composition' },
  { id: 'responsive.touch', topicId: 'responsive', sectionId: 'composition' },
]
