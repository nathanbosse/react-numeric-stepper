/// <reference types="react" />
export declare type Size = 'sm' | 'md' | 'lg'
export declare type DragDirection = 'x' | 'y'
export interface StyledProps {
  size?: Size
  inactiveTrackColor?: string
  activeTrackColor?: string
  hoverButtonColor?: string
  activeButtonColor?: string
  inactiveIconColor?: string
  hoverIconColor?: string
  activeIconColor?: string
  disabledIconColor?: string
  thumbColor?: string
  thumbLabelColor?: string
  thumbShadowAnimationOnTrackHoverEnabled?: boolean
  focusRingColor?: string
}
export interface AccessibilityProps {
  decrementButtonAriaLabel?: string
  thumbAriaLabel?: string
  incrementButtonAriaLabel?: string
}
export interface Props extends StyledProps, AccessibilityProps {
  minimumValue?: number
  maximumValue?: number
  stepValue?: number
  value: number
  onChange: (value: number) => void
}
export declare function NumericStepper({
  minimumValue,
  maximumValue,
  stepValue,
  value,
  onChange,
  size,
  inactiveTrackColor,
  activeTrackColor,
  hoverButtonColor,
  activeButtonColor,
  inactiveIconColor,
  hoverIconColor,
  activeIconColor,
  disabledIconColor,
  thumbColor,
  thumbLabelColor,
  thumbShadowAnimationOnTrackHoverEnabled,
  focusRingColor,
  decrementButtonAriaLabel,
  thumbAriaLabel,
  incrementButtonAriaLabel,
}: Props): JSX.Element
//# sourceMappingURL=NumericStepper.d.ts.map
