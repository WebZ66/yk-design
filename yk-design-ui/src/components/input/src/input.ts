export interface InputProps {
  type?: string
  // 实现v-model必备的
  modelValue: string
  size?: 'large' | 'small'
  disabled?: boolean
  clearable?: boolean
  // 展示密码
  showPassword?: boolean
  placeholder?: string
  readonly?: boolean
  // 自动填充
  autocomplete?: string
  autofocus?: boolean
  // 关联表单
  form?: string
}

export const InputEmits = {
  'update:modelValue': (val: InputProps['modelValue']) => val,
  input: (value: string) => null,
  change: (value: string) => value,
  focus: (value: FocusEvent) => null,
  blur: (value: FocusEvent) => null,
  clear: () => null,
}
