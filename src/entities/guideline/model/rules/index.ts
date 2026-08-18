import { COMPONENT_RULES } from './components'
import { COMPOSITION_RULES } from './composition'
import { FOUNDATION_RULES } from './foundations'
import { UX_RULES } from './ux-principles'

export const RULES = [
  ...FOUNDATION_RULES,
  ...COMPONENT_RULES,
  ...COMPOSITION_RULES,
  ...UX_RULES,
]
