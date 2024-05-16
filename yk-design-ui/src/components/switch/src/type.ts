export type valueType = boolean | string | number
export interface ISwitchProps {
  modelValue: valueType
  size?: 's' | 'm' | 'S' | 'M'
  loading?: boolean
  disabled?: boolean
  checkedValue?: valueType
  unCheckedValue?: valueType
  checkedColor?: string
  uncheckedColor?: string
}
