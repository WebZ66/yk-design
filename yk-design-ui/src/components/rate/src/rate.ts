export interface RateProps {
  value?: number
  modelValue?: number
  max?: number
  disabled?: boolean
  allowHalf?: boolean
  lowThreshold?: number
  highThreshold?: number
  texts?: string[]
  iconClasses?: string[] | Record<string, string>
  colors?: string[]
  voidIconClass?: string
  voidColor?: string
}

export interface RateEmits {
  (e: 'update:modelValue', value: RateProps['modelValue']): void
  (e: 'change', value: RateProps['modelValue']): void
}
