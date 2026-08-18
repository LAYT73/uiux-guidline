import { describe, expect, it } from 'vitest'
import { RULES, SECTIONS, TOPICS } from './catalog'

describe('guideline catalog', () => {
  it('registers four sections and twenty-seven topics', () => {
    expect(SECTIONS).toHaveLength(4)
    expect(TOPICS).toHaveLength(27)
  })

  it('keeps topic ids unique and bound to a known section', () => {
    const ids = TOPICS.map((topic) => topic.id)
    expect(new Set(ids).size).toBe(ids.length)

    const sectionIds = new Set(SECTIONS.map((section) => section.id))
    for (const topic of TOPICS) {
      expect(sectionIds.has(topic.sectionId)).toBe(true)
    }
  })

  it('lists every topic on its parent section', () => {
    const listed = SECTIONS.flatMap((section) => section.topicIds)
    expect(listed).toHaveLength(27)
    expect(new Set(listed).size).toBe(27)
  })

  it('ships sixty-four interactive rules', () => {
    expect(RULES).toHaveLength(64)
  })
})
