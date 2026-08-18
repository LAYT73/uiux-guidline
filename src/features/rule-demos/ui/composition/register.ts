import { registerDemos } from '../../model/registry'
import {
  GridBad,
  GridGood,
  LongTextBad,
  LongTextGood,
} from './AlignmentDemo'
import { ConsistentBad, ConsistentGood, ContextBad, ContextGood } from './DensityDemo'
import { GroupCardsBad, GroupCardsGood, GroupProximityBad, GroupProximityGood } from './GroupingDemo'
import { NotAllBoldBad, NotAllBoldGood, OneH1Bad, OneH1Good } from './HierarchyDemo'
import { MaxWidthBad, MaxWidthGood, VisualOrderBad, VisualOrderGood } from './LayoutDemo'
import { CriticalActionsBad, CriticalActionsGood, TouchBad, TouchGood } from './ResponsiveDemo'
import { BreathingBad, BreathingGood, CtaBad, CtaGood } from './WhitespaceDemo'

registerDemos({
  'layout.max-width': { Good: MaxWidthGood, Bad: MaxWidthBad },
  'layout.visual-order': { Good: VisualOrderGood, Bad: VisualOrderBad },
  'hierarchy.one-h1': { Good: OneH1Good, Bad: OneH1Bad },
  'hierarchy.not-all-bold': { Good: NotAllBoldGood, Bad: NotAllBoldBad },
  'density.consistent': { Good: ConsistentGood, Bad: ConsistentBad },
  'density.context': { Good: ContextGood, Bad: ContextBad },
  'alignment.grid': { Good: GridGood, Bad: GridBad },
  'alignment.long-text': { Good: LongTextGood, Bad: LongTextBad },
  'grouping.proximity': { Good: GroupProximityGood, Bad: GroupProximityBad },
  'grouping.cards': { Good: GroupCardsGood, Bad: GroupCardsBad },
  'whitespace.cta': { Good: CtaGood, Bad: CtaBad },
  'whitespace.breathing': { Good: BreathingGood, Bad: BreathingBad },
  'responsive.critical-actions': { Good: CriticalActionsGood, Bad: CriticalActionsBad },
  'responsive.touch': { Good: TouchGood, Bad: TouchBad },
})
