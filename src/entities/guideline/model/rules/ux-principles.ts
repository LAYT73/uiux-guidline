import type { Rule } from '../types'

export const UX_RULES: Rule[] = [
  { id: 'feedback.immediate', topicId: 'feedback', sectionId: 'ux-principles' },
  { id: 'feedback.silent-fail', topicId: 'feedback', sectionId: 'ux-principles' },
  { id: 'affordance.looks-like', topicId: 'affordance', sectionId: 'ux-principles' },
  { id: 'affordance.cursor', topicId: 'affordance', sectionId: 'ux-principles' },
  { id: 'error-prevention.confirm', topicId: 'error-prevention', sectionId: 'ux-principles' },
  { id: 'error-prevention.constraints', topicId: 'error-prevention', sectionId: 'ux-principles' },
  { id: 'loading-states.skeleton', topicId: 'loading-states', sectionId: 'ux-principles' },
  { id: 'loading-states.layout-shift', topicId: 'loading-states', sectionId: 'ux-principles' },
  { id: 'empty-states.explain-action', topicId: 'empty-states', sectionId: 'ux-principles' },
  { id: 'empty-states.dead-end', topicId: 'empty-states', sectionId: 'ux-principles' },
  { id: 'accessibility.focus', topicId: 'accessibility', sectionId: 'ux-principles' },
  { id: 'accessibility.icon-name', topicId: 'accessibility', sectionId: 'ux-principles' },
  { id: 'accessibility.skip-link', topicId: 'accessibility', sectionId: 'ux-principles' },
]
