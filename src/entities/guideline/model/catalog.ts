import { RULES } from './rules'
import type { Rule, Section, SectionId, Topic, TopicId } from './types'

export const SECTIONS: Section[] = [
  {
    id: 'foundations',
    topicIds: [
      'spacing',
      'border-radius',
      'typography',
      'colors',
      'shadows',
      'icons',
      'motion',
    ],
  },
  {
    id: 'components',
    topicIds: [
      'buttons',
      'inputs',
      'cards',
      'modals',
      'dropdowns',
      'tables',
      'navigation',
    ],
  },
  {
    id: 'composition',
    topicIds: [
      'layout',
      'hierarchy',
      'density',
      'alignment',
      'grouping',
      'whitespace',
      'responsive',
    ],
  },
  {
    id: 'ux-principles',
    topicIds: [
      'feedback',
      'affordance',
      'error-prevention',
      'loading-states',
      'empty-states',
      'accessibility',
    ],
  },
]

export const TOPICS: Topic[] = SECTIONS.flatMap((section) =>
  section.topicIds.map((id) => ({ id, sectionId: section.id })),
)

export { RULES } from './rules'

export function getSection(id: string): Section | undefined {
  return SECTIONS.find((section) => section.id === id)
}

export function getTopic(sectionId: string, topicId: string): Topic | undefined {
  return TOPICS.find((topic) => topic.sectionId === sectionId && topic.id === topicId)
}

export function getTopicById(id: TopicId): Topic | undefined {
  return TOPICS.find((topic) => topic.id === id)
}

export function getRulesByTopic(topicId: TopicId): Rule[] {
  return RULES.filter((rule) => rule.topicId === topicId)
}

export function isSectionId(value: string): value is SectionId {
  return SECTIONS.some((section) => section.id === value)
}

export function isTopicId(value: string): value is TopicId {
  return TOPICS.some((topic) => topic.id === value)
}
