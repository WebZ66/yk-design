import { Ref } from 'vue'

export interface InputProps {
  id?: string
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

export interface InputEmits {
  (e: 'update:modelValue', value: InputProps['modelValue']): void
  (e: 'clear'): void
  (e: 'change', value: InputProps['modelValue']): void
  (e: 'input', value: InputProps['modelValue']): void
  (e: 'focus', event: FocusEvent): void
  (e: 'blur', event: FocusEvent): void
}

export interface InputInstance {
  ref: Ref<HTMLInputElement | HTMLTextAreaElement | void>
  focus(): Promise<void>
  blur(): void
  clear(): void
}
