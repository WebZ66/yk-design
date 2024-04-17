export type CheckboxProps = {
  modelValue?: number | string | boolean
  disabled?: boolean
  indeterminate?: boolean
  value?: string | number
}

export const CheckboxEmits = {
  'update:modelValue': (val: CheckboxProps['modelValue']) => val,
}
