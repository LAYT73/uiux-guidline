import { registerDemos } from '../../model/registry'
import { CursorBad, CursorGood, LooksLikeBad, LooksLikeGood } from './AffordanceDemo'
import {
  FocusBad,
  FocusGood,
  IconNameBad,
  IconNameGood,
  SkipLinkBad,
  SkipLinkGood,
} from './AccessibilityDemo'
import {
  DeadEndBad,
  DeadEndGood,
  ExplainActionBad,
  ExplainActionGood,
} from './EmptyStatesDemo'
import {
  ConfirmBad,
  ConfirmGood,
  ConstraintsBad,
  ConstraintsGood,
} from './ErrorPreventionDemo'
import {
  ImmediateBad,
  ImmediateGood,
  SilentFailBad,
  SilentFailGood,
} from './FeedbackDemo'
import { LayoutShiftBad, LayoutShiftGood, SkeletonBad, SkeletonGood } from './LoadingDemo'

registerDemos({
  'feedback.immediate': { Good: ImmediateGood, Bad: ImmediateBad },
  'feedback.silent-fail': { Good: SilentFailGood, Bad: SilentFailBad },
  'affordance.looks-like': { Good: LooksLikeGood, Bad: LooksLikeBad },
  'affordance.cursor': { Good: CursorGood, Bad: CursorBad },
  'error-prevention.confirm': { Good: ConfirmGood, Bad: ConfirmBad },
  'error-prevention.constraints': { Good: ConstraintsGood, Bad: ConstraintsBad },
  'loading-states.skeleton': { Good: SkeletonGood, Bad: SkeletonBad },
  'loading-states.layout-shift': { Good: LayoutShiftGood, Bad: LayoutShiftBad },
  'empty-states.explain-action': { Good: ExplainActionGood, Bad: ExplainActionBad },
  'empty-states.dead-end': { Good: DeadEndGood, Bad: DeadEndBad },
  'accessibility.focus': { Good: FocusGood, Bad: FocusBad },
  'accessibility.icon-name': { Good: IconNameGood, Bad: IconNameBad },
  'accessibility.skip-link': { Good: SkipLinkGood, Bad: SkipLinkBad },
})
