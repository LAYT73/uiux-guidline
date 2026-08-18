import { registerDemos } from '../../model/registry'
import { HierarchyBad, HierarchyGood } from './buttons/HierarchyDemo'
import { StatesBad, StatesGood } from './buttons/StatesDemo'
import { VsLinkBad, VsLinkGood } from './buttons/VsLinkDemo'
import { OneJobBad, OneJobGood } from './cards/OneJobDemo'
import { NestedClickBad, NestedClickGood } from './cards/NestedClickDemo'
import { KeyboardBad, KeyboardGood } from './dropdowns/KeyboardDemo'
import { RightControlBad, RightControlGood } from './dropdowns/RightControlDemo'
import { ErrorsBad, ErrorsGood } from './inputs/ErrorsDemo'
import { LabelsBad, LabelsGood } from './inputs/LabelsDemo'
import { RequiredBad, RequiredGood } from './inputs/RequiredDemo'
import { FocusTrapBad, FocusTrapGood } from './modals/FocusTrapDemo'
import { OnePrimaryBad, OnePrimaryGood } from './modals/OnePrimaryDemo'
import { CurrentBad, CurrentGood } from './navigation/CurrentDemo'
import { LandmarksBad, LandmarksGood } from './navigation/LandmarksDemo'
import { DensityBad, DensityGood } from './tables/DensityDemo'
import { NumericBad, NumericGood } from './tables/NumericDemo'
import { StickyBad, StickyGood } from './tables/StickyDemo'

registerDemos({
  'buttons.hierarchy': { Good: HierarchyGood, Bad: HierarchyBad },
  'buttons.states': { Good: StatesGood, Bad: StatesBad },
  'buttons.vs-link': { Good: VsLinkGood, Bad: VsLinkBad },
  'inputs.labels': { Good: LabelsGood, Bad: LabelsBad },
  'inputs.errors': { Good: ErrorsGood, Bad: ErrorsBad },
  'inputs.required': { Good: RequiredGood, Bad: RequiredBad },
  'cards.one-job': { Good: OneJobGood, Bad: OneJobBad },
  'cards.nested-click': { Good: NestedClickGood, Bad: NestedClickBad },
  'modals.focus-trap': { Good: FocusTrapGood, Bad: FocusTrapBad },
  'modals.one-primary': { Good: OnePrimaryGood, Bad: OnePrimaryBad },
  'dropdowns.keyboard': { Good: KeyboardGood, Bad: KeyboardBad },
  'dropdowns.right-control': { Good: RightControlGood, Bad: RightControlBad },
  'tables.numeric': { Good: NumericGood, Bad: NumericBad },
  'tables.sticky': { Good: StickyGood, Bad: StickyBad },
  'tables.density': { Good: DensityGood, Bad: DensityBad },
  'navigation.current': { Good: CurrentGood, Bad: CurrentBad },
  'navigation.landmarks': { Good: LandmarksGood, Bad: LandmarksBad },
})
