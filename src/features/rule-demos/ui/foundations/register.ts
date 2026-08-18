import { registerDemos } from '../../model/registry'
import { AlignBad, AlignGood } from './icons/AlignDemo'
import { ConsistencyBad, ConsistencyGood } from './icons/ConsistencyDemo'
import { OpticalSizeBad, OpticalSizeGood } from './icons/OpticalSizeDemo'
import { ContrastBad, ContrastGood } from './colors/ContrastDemo'
import { NotOnlyColorBad, NotOnlyColorGood } from './colors/NotOnlyColorDemo'
import { TokensBad, TokensGood } from './colors/TokensDemo'
import { DurationBad, DurationGood } from './motion/DurationDemo'
import { PurposeBad, PurposeGood } from './motion/PurposeDemo'
import { ReducedBad, ReducedGood } from './motion/ReducedDemo'
import { PillFormBad, PillFormGood } from './radius/PillFormDemo'
import { ProportionalBad, ProportionalGood } from './radius/ProportionalDemo'
import { RadiusScaleBad, RadiusScaleGood } from './radius/ScaleDemo'
import { ElevationBad, ElevationGood } from './shadows/ElevationDemo'
import { VsBorderBad, VsBorderGood } from './shadows/VsBorderDemo'
import { PaddingGapBad, PaddingGapGood } from './spacing/PaddingGapDemo'
import { ProximityBad, ProximityGood } from './spacing/ProximityDemo'
import { ScaleBad, ScaleGood } from './spacing/ScaleDemo'
import { HierarchyBad, HierarchyGood } from './typography/HierarchyDemo'
import { LineHeightBad, LineHeightGood } from './typography/LineHeightDemo'
import { MeasureBad, MeasureGood } from './typography/MeasureDemo'

registerDemos({
  'spacing.scale': { Good: ScaleGood, Bad: ScaleBad },
  'spacing.proximity': { Good: ProximityGood, Bad: ProximityBad },
  'spacing.padding-vs-gap': { Good: PaddingGapGood, Bad: PaddingGapBad },
  'border-radius.scale': { Good: RadiusScaleGood, Bad: RadiusScaleBad },
  'border-radius.proportional': { Good: ProportionalGood, Bad: ProportionalBad },
  'border-radius.pill-vs-form': { Good: PillFormGood, Bad: PillFormBad },
  'typography.hierarchy': { Good: HierarchyGood, Bad: HierarchyBad },
  'typography.measure': { Good: MeasureGood, Bad: MeasureBad },
  'typography.line-height': { Good: LineHeightGood, Bad: LineHeightBad },
  'colors.tokens': { Good: TokensGood, Bad: TokensBad },
  'colors.contrast': { Good: ContrastGood, Bad: ContrastBad },
  'colors.not-only-color': { Good: NotOnlyColorGood, Bad: NotOnlyColorBad },
  'shadows.elevation': { Good: ElevationGood, Bad: ElevationBad },
  'shadows.vs-border': { Good: VsBorderGood, Bad: VsBorderBad },
  'icons.optical-size': { Good: OpticalSizeGood, Bad: OpticalSizeBad },
  'icons.align': { Good: AlignGood, Bad: AlignBad },
  'icons.consistency': { Good: ConsistencyGood, Bad: ConsistencyBad },
  'motion.duration': { Good: DurationGood, Bad: DurationBad },
  'motion.purpose': { Good: PurposeGood, Bad: PurposeBad },
  'motion.reduced': { Good: ReducedGood, Bad: ReducedBad },
})
