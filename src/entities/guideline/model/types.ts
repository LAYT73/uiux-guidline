export const SECTION_IDS = [
  'foundations',
  'components',
  'composition',
  'ux-principles',
] as const

export type SectionId = (typeof SECTION_IDS)[number]

export const TOPIC_IDS = [
  'spacing',
  'border-radius',
  'typography',
  'colors',
  'shadows',
  'icons',
  'motion',
  'buttons',
  'inputs',
  'cards',
  'modals',
  'dropdowns',
  'tables',
  'navigation',
  'layout',
  'hierarchy',
  'density',
  'alignment',
  'grouping',
  'whitespace',
  'responsive',
  'feedback',
  'affordance',
  'error-prevention',
  'loading-states',
  'empty-states',
  'accessibility',
] as const

export type TopicId = (typeof TOPIC_IDS)[number]

export type Topic = {
  id: TopicId
  sectionId: SectionId
}

export type Rule = {
  id: string
  topicId: TopicId
  sectionId: SectionId
}

export type Section = {
  id: SectionId
  topicIds: TopicId[]
}
